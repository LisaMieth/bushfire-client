import xml2js from 'xml2js';

import { cleanFireDistricts, cleanSuburbs } from './helpers/data-handlers';
import { scraper } from './helpers/scraper';
import {
  canFindFireDistrict,
  capitalise,
  getCouncil,
  getFireDistrictFromCouncil,
} from './helpers/google-api';

const xmlParser = new xml2js.Parser({
  explicitRoot: true,
  mergeAttrs: true,
  explicitArray: false,
  normalize: true,
});

/*
* Parses the XML data to JSON
* @param {String} data - XML data
*
* @return {Promise} promise that resolves to JSON data
*/
export async function parseXml(data) {
  return new Promise((resolve, reject) => {
    xmlParser.parseString(data, (err, res) => {
      if (err) reject(new Error('Your request returned invalid XML.'));
      resolve(res);
    });
  });
}

const jsonParser = data => new Promise(resolve => resolve(JSON.parse(data)));

async function sendQuery(fetch, endpoint) {
  const data = await fetch(endpoint);
  const result = await data.text();
  return result;
}

const processXml = function (fetch, endpoint) {
  return sendQuery(fetch, endpoint).then(parseXml);
};

const processJson = function (fetch, endpoint) {
  return sendQuery(fetch, endpoint).then(jsonParser);
};

const scrape = function (fetch, endpoint) {
  return scraper(endpoint);
};

// Mapping for Fire Services urls
const endpoints = {
  NSW: { endpoint: 'http://www.rfs.nsw.gov.au/feeds/fdrToban.xml', processor: processXml },
  // ACT: 'http://www.rfs.nsw.gov.au/feeds/fdrToban.xml',
  VIC: { endpoint: 'https://data.emergency.vic.gov.au/Show?pageId=getFDRTFBJSON', processor: processJson },
  SA: { endpoint: 'http://www.cfs.sa.gov.au/fire_bans_rss/index.jsp', processor: processXml },
  WA: { endpoint: 'https://www.emergency.wa.gov.au/#firedangerratings', processor: scrape },
};

async function fetchData(fetch, state) {
  const { endpoint, processor } = endpoints[state];

  if (!endpoint) throw new Error('This state is currently not supported');

  // const data = await sendQuery(fetch, endpoint);
  // const parsed = await processor(data);
  const parsed = processor(fetch, endpoint);

  return parsed;
}

export default function getClient(fetch) {
  // params: { state: 'NSW' }
  const getStateData = async ({ state }) => fetchData(fetch, state);

  // params: { fireDistrict: 'Greater Sydney', state: 'NSW' }
  const getFireDistrictData = async ({ fireDistrict, state }) => {
    if (!canFindFireDistrict(fireDistrict, state)) throw new Error('Cannot find fire district.');

    const data = await fetchData(fetch, state);

    // Use appropriate method, depending on the state
    return cleanFireDistricts(data, capitalise(fireDistrict), state);
  };

  // params: { suburb: 'Richmond', state: 'NSW' }
  const getSuburbData = async ({ state, suburb }) => {
    const council = await getCouncil(suburb, state);
    const fireDistrict = getFireDistrictFromCouncil(council, state);

    // If no fire district found, try to find it by suburb
    if (!fireDistrict) throw new Error('Could not find a fire district for your suburb.');

    // Make the actual request for data
    const fireDistrictData = await getFireDistrictData({
      fireDistrict: fireDistrict.toLowerCase(),
      state,
    });

    // Use appropriate method to extract the data for the suburb
    return cleanSuburbs(fireDistrictData, state, fireDistrict, suburb);
  };

  return {
    getStateData,
    getFireDistrictData,
    getSuburbData,
  };
}

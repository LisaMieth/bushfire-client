import { fireDistricts, councils, fallbacks } from './location-mapping.js';
const googleMapsUrl = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyD05woHcaU0DLw8_Yfb6U7fnL8JT8awhNA&address=';

async function getGoogleMapsData(suburb, state) {
  // Get Google Maps data
  const response = await fetch(`${googleMapsUrl}${suburb},${state},au`);
  // return await response.json();
  return response.json();
}

// Capitalises first letter of every word
export const capitalise = str => str.replace(/\w\S*/g, (txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));

/*
* Finds council for suburb by state via Google Maps API
* @param {String} suburb
* @params {String} state
*
* @return {String} council or empty if no results was returned
*/
export async function getCouncil(suburb, state) {
  const data = await getGoogleMapsData(suburb, state);

  if (!data.results.length) return '';

  // Find what should be the council in Google's response
  const council = data.results[0].address_components.reduce((result, current) => {
    // Admin area level 2 is council, but not always present
    if (current.types.indexOf('administrative_area_level_2') !== -1) {
      // eslint-disable-next-line no-param-reassign
      result = current.short_name;
    }
    // Otherwise use admin area level 1 if that is not equal to the state
    else if (!result && current.types.indexOf('administrative_area_level_1') !== -1 && current.short_name !== state.toUpperCase()) {
      // eslint-disable-next-line no-param-reassign
      result = current.short_name;
    }
    return result;
  }, '');

  // Some results don't have any helpful administrative area level, first item is usually correct
  return council || data.results[0].address_components[0].short_name;
}

export function canFindFireDistrict(fireDistrict, state) {
  // Find state using fireDistrict
  const stateByFireDistrict = Object.keys(fireDistricts).reduce((result, key) => {
    if (fireDistricts[key].indexOf(capitalise(fireDistrict)) !== -1
    || fireDistricts[key].indexOf(fireDistrict.toUpperCase()) !== -1) {
      // eslint-disable-next-line no-param-reassign
      result = key;
    }
    return result;
  }, null);

  // If states don't match, we can't find the fire districts
  return state === stateByFireDistrict;
}

// Find matching fire district for council
export function getFireDistrictFromCouncil(council, state) {
  // If we have a fallback, see if we find a council from it
  const fallback = fallbacks[state];
  const fallbackCouncil = fallback
    && Object.keys(fallback).find(key => fallback[key].indexOf(council) !== -1);

  // Find fire district form our location mapping
  const result = fireDistricts[state]
    .find(fireDistrict => councils[state][fireDistrict]
      .find(councilByDistrict =>
        council.includes(councilByDistrict)
          || councilByDistrict.includes(council)
          || (fallbackCouncil && councilByDistrict.includes(fallbackCouncil))));

  return result || null;
}

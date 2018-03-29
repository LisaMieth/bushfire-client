const councilsNSW = {
  'Far North Coast': ['Ballina', 'Byron', 'Clarence Valley', 'Kyogle', 'Lismore', 'Richmond Valley', 'Tweed'],
  'North Coast': ['Bellingen', 'Coffs Harbour', 'Gloucester', 'Greater Taree', 'Great Lakes',
    'Port Macquarie-Hastings', 'Kempsey', 'Nambucca'],
  'Greater Hunter': ['Cessnock', 'Dungog', 'Lake Macquarie', 'Maitland', 'Muswellbrook', 'Newcastle',
    'Port Stephens', 'Singleton', 'Upper Hunter'],
  'Greater Sydney': ['Ashfield', 'Auburn', 'Bankstown', 'The Hills', 'Blacktown', 'Blue Mountains', 'Botany Bay',
    'Burwood', 'Camden', 'Campbelltown', 'Canada Bay', 'Canterbury', 'Fairfield', 'Gosford', 'Hawkesbury',
    'Holroyd', 'Hornsby', 'Hunters Hill', 'Hurstville', 'Kogarah', 'Ku-Ring-Gai', 'Lane Cove', 'Leichhardt',
    'Liverpool', 'Manly', 'Marrickville', 'Mosman', 'North Sydney', 'Parramatta', 'Penrith', 'Pittwater',
    'Randwick', 'Rockdale', 'Ryde', 'Strathfield', 'Sutherland', 'Sydney', 'Warringah', 'Waverley', 'Willoughby',
    'Woollahra', 'Wyong'],
  'Illawara/Shoalhaven': ['Kiama', 'Shellharbour', 'Shoalhaven', 'Wingecarribee', 'Wollondilly', 'Wollongong'],
  'Far South Coast': ['Bega Valley', 'Eurobodalla'],
  'Monaro Alpine': ['Bombala', 'Cooma-Monaro', 'Snowy River'],
  // ACT: ['Belconnen', 'Gunghalin', 'Inner South', 'North Canberra', 'Tuggeranong', 'Weston Creek', 'Woden Valley'],
  'Southern Ranges': ['Goulburn Mulwaree', 'Palerang', 'Queanbeyan', 'Upper Lachlan', 'Yass Valley'],
  'Central Ranges': ['Bathurst', 'Blayney', 'Cabonne', 'Cowra', 'Lithgow', 'Mid-Western', 'Oberon', 'Orange'],
  'New England': ['Armidale Dumaresq', 'Glen Innes Severn', 'Guyra', 'Tenterfield', 'Uralla', 'Walcha'],
  'Northern Slopes': ['Gunnedah', 'Gwydir', 'Inverell', 'Liverpool Plains', 'Tamworth'],
  'North Western': ['Moree Plains', 'Narrabri', 'Walgett', 'Warrumbungle'],
  'Upper Central West Plains': ['Bogan', 'Coonamble', 'Gilgandra', 'Warren'],
  'Lower Central West Plains': ['Bland', 'Dubbo', 'Forbes', 'Lachlan', 'Narromine', 'Parkes', 'Temora', 'Weddin', 'Wellington'],
  'Southern Slopes': ['Boorowa', 'Cootamundra', 'Gundagai', 'Harden', 'Tumbarumba', 'Tumut', 'Young'],
  'Eastern Riverina': ['Albury', 'Coolamon', 'Greater Hume', 'Junee', 'Lockhart', 'Wagga Wagga'],
  'Southern Riverina': ['Berrigan', 'Conargo', 'Corowa', 'Deniliquin', 'Jerilderie', 'Murray', 'Urana', 'Wakool'],
  'Northern Riverina': ['Carrathool', 'Griffith', 'Hay', 'Leeton', 'Murrumbidgee', 'Narrandera'],
  'South Western': ['Balranald', 'Wentworth'],
  'Far Western': ['Bourke', 'Brewarrina', 'Broken Hill', 'Central Darling', 'Cobar'],
};

const councilsVIC = {
  Mallee: ['Buloke', 'Gannawarra', 'Mildura', 'Swan Hill', 'Yarriambiack Shire North'],
  Wimmera: ['Hindmarsh Shire', 'Horsham Rural City', 'Northern Grampians Shire', 'West Wimmera Shire', 'Yarriambiack'],
  'South West': ['Ararat', 'Colac Otway', 'Corangamite', 'Glenelg', 'Moyne', 'Pyrenees', 'Southern Grampians', 'Warrnambool'],
  'Northern Country': ['Campaspe', 'Greater Bendigo', 'Greater Shepparton', 'Loddon', 'Moira', 'Strathbogie'],
  'North Central': ['Central Goldfields', 'Lake Mountain Alpine Resort (Unincorporated)', 'Mitchell', 'Mount Alexander', 'Murrindindi'],
  Central: ['Ballarat', 'Banyule', 'Bass Coast', 'Bayside', 'Boroondara', 'Brimbank', 'Cardinia', 'Casey', 'Darebin', 'Frankston',
    'French-Elizabeth-Sandstone Islands (Unincorporated)', 'Glen Eira', 'Golden Plains', 'Greater Dandenong', 'Greater Geelong',
    'Hepburn', 'Hobsons Bay', 'Hume', 'Kingston', 'Knox', 'Macedon Ranges', 'Manningham', 'Maribyrnong', 'Maroondah', 'Melbourne',
    'Melton', 'Monash', 'Moonee Valley', 'Moorabool', 'Moreland', 'Mornington Peninsula', 'Nillumbik', 'Port Phillip',
    'Queenscliffe', 'Stonnington', 'Surf Coast', 'Whitehorse', 'Whittlesea', 'Wyndham', 'Yarra', 'Yarra Ranges'],
  'North East': ['Alpine', 'Benalla', 'Falls Creek', 'Indigo', 'Mansfield', 'Mount Buller', 'Mount Hotham Alpine Resort (Unincorporated)',
    'Mount Stirling Alpine Resort (Unincorporated)', 'Towong', 'Wangaratta', 'Wodonga'],
  'East Gippsland': ['East Gippsland'],
  'West and South Gippsland': ['Baw Baw', 'Latrobe', 'Mount Baw Baw Alpine Resort (Unincorporated)', 'South Gippsland', 'Wellington'],
};

const councilsSA = {
  'Adelaide Metropolitan': ['Adelaide', 'Burnside', 'Campbelltown', 'Charles Sturt', 'Holdfast Bay', 'Marion', 'Norwood Payneham and St Peters',
    'Onkaparinga', 'Playford', 'Port Adelaide Enfield', 'Prospect', 'Salisbury', 'Tea Tree Gully', 'Unley', 'Walkerville', 'West Torrens'],
  'Mount Lofty Ranges': ['Adelaide Hills', 'Alexandrina', 'Barossa', 'Burnside', 'Campbelltown', 'Gawler', 'Mitcham', 'DC of Mount Barker', 'Onkaparinga',
    'Playford', 'Salisbury', 'Tea Tree Gully', 'Victor Harbor', 'DC of Yankalilla'],
  'Kangaroo Island': ['Kangaroo Island'],
  'Mid North': ['Clare and Gilbert Valleys', 'Goyder', 'Light', 'DC of Mallala', 'Northern Areas', 'Port Pirie', 'Wakefield'],
  'Yorke Peninsula': ['DC of Barunga West', 'DC of the Copper Coast', 'Yorke Peninsula'],
  Murraylands: ['Karoonda East Murray', 'Mid Murray', 'Murray Bridge', 'Renmark Paringa', 'Southern Mallee'],
  Riverland: ['Loxton Waikerie', 'Mid Murray', 'Renmark Paringa', 'Berri Barmera'],
  'Upper South East': ['Coorong', 'DC of Tatiara'],
  'Lower South East': ['Grant', 'Kingston', 'DC of Kingston', 'Mount Gambier', 'Naracoorte Lucindale', 'Robe', 'Wattle Range'],
  Flinders: ['Flinders Ranges', 'Mount Remarkable', 'Orroroo Carrieton', 'Peterborough', 'Port Augusta'],
  'North East Pastoral': ['Leigh Creek', 'Lyndhurst', 'Arkaroola', 'Moomba', 'Innamincka'],
  'Eastern Eyre Peninsula': ['Cleve', 'Franklin Harbour', 'Kimba', 'Whyalla'],
  'North West Pastoral': ['Coober Pedy', 'Roxby Downs', 'Woomera', 'Glendambo', 'Andamooka', 'Marla', 'Mintabie', 'Ernabella'],
  'Lower Eyre Peninsula': ['Lower Eyre Peninsula', 'Tumby Bay', 'City of Port Lincoln'],
  'West Coast': ['Ceduna', 'Elliston', 'Wudinna', 'Streaky Bay'],
};

// SA's awesome suburbs for which Google can't find a council
const fallbackSA = {
  'Roxby Downs': ['Marree', 'William Creek', 'Oodnadatta'],
  Wakefield: ['Balaklava', 'Blyth', 'Snowtown', 'Owen', 'Hamley Bridge', 'Brinkworth', 'Lochiel', 'Port Wakefield'],
  'DC of Barunga West': ['Alford', 'Bute', 'Tickera', 'Clements Gap'],
  'DC of the Copper Coast': ['Paskeville'],
  Goyder: ['Canowie Belt', 'Bower'],
};

export const fireDistricts = {
  NSW: ['Far North Coast', 'North Coast', 'Greater Hunter', 'Greater Sydney', 'Illawara/Shoalhaven', 'Far South Coast',
    'Monaro Alpine', /* 'ACT', */ 'Southern Ranges', 'Central Ranges', 'New England', 'Northern Slopes', 'North Western',
    'Upper Central West Plains', 'Lower Central West Plains', 'Southern Slopes', 'Eastern Riverina', 'Southern Riverina',
    'Northern Riverina', 'South Western', 'Far Western'],
  VIC: ['Mallee', 'Wimmera', 'South West', 'Northern Country', 'North Central',
    'Central', 'North East', 'East Gippsland', 'West and South Gippsland'],
  SA: ['Adelaide Metropolitan', 'Mount Lofty Ranges', 'Kangaroo Island', 'Mid North', 'Yorke Peninsula', 'Murraylands',
    'Riverland', 'Upper South East', 'Lower South East', 'Flinders', 'North East Pastoral', 'Eastern Eyre Peninsula',
    'North West Pastoral', 'Lower Eyre Peninsula', 'West Coast'],
};

export const councils = {
  NSW: councilsNSW,
  VIC: councilsVIC,
  SA: councilsSA,
};

export const fallbacks = {
  SA: fallbackSA,
};

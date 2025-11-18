
export async function GET(request:Request) {
let cities = [{
  state: "california",
  cities: [
  {
    featured: true,
  link: "los-angeles",
  display: "Los Angeles",
  description: "Los Angeles is a city in the United States.",
  
},{
    featured: true,
  link: "san-diego",
  display: "San Diego",
  description: "San Diego is a city in the United States."
  },{featured: false,
  link: "san-jose",
  display: "San Jose",
  description: "San Jose is a city in the United States."
  },{featured: false,
  link: "san-antonio",
  display: "San Antonio",
  description: "San Antonio is a city in the United States."
  },{featured: false,
  link: "fresno",
  display: "Fresno",
  description: "Fresno is a city in the United States."
  }
]
},{
  state: "new-york",
  cities: [
  {
    featured: true,
  link: "albany",
  display: "Albany",
  description: "Albany is a city in the United States."
},{featured: false,
  link: "rochester",
  display: "Roschester",
  description: "Rochester is a city in the United States."
},
{featured: false,
  link: "addison",
  display: "Addison",
  description: "Addison is a city in the United States."
},
{featured: true,
  link: "brooklyn",
  display: "Brooklyn",
  description: "Brooklyn is a city in the United States."
},
{featured: false,
  link: "syracuse",
  display: "Syracuse",
  description: "Syracuse is a city in the United States."
}]

},{
  state: "texas",
  cities: [
    {featured: false,
      link: "dallas",
    display: "Dallas",
    description: "Dallas is a city in united states."
},{featured: true,
    link: "austin",
    display: "Austin",
    description: "Austin is a city in united states."
},{featured: false,
      link: "houston",
    display: "Houston",
    description: "Houston is a city in united states."
},{featured: true,
      link: "arlington",
    display: "Arlington",
    description: "Arlington is a city in united states."
},{featured: false,
      link: "plano",
    display: "Plano",
    description: "Plano is a city in united states."
},
]
},{
  state: "alabama",
  cities: [
    {featured: true,
      link: "madison",
    display: "Madison",
    description: "Madison is a city in united states."
},{featured: false,
    link: "aniston",
    display: "Aniston",
    description: "Aniston is a city in united states."
},{featured: false,
      link: "dothan",
    display: "Dothan",
    description: "Dothan is a city in united states."
},{featured: false,
      link: "fairhope",
    display: "Fairhope",
    description: "Fairhope is a city in united states."
},{featured: true,
      link: "foley",
    display: "Foley",
    description: "Foley is a city in united states."
}
]

},{
  state: "alaska",
  cities: [
    {featured: false,
      link: "fairbanks",
    display: "Fairbanks",
    description: "Fairbanks is a city in united states."
},{featured: true,
    link: "homer",
    display: "Homer",
    description: "Homer is a city in united states."
},{featured: true,
      link: "wasilla",
    display: "Wasilla",
    description: "Wasilla is a city in united states."
},{featured: false,
      link: "nome",
    display: "Nome",
    description: "Nome is a city in united states."
},{featured: false,
      link: "bethel",
    display: "Bethel",
    description: "Bethel is a city in united states."
},{featured: true,
      link: "seldovia",
    display: "Seldovia",
    description: "Seldovia is a city in united states."
}]

},{
  state: "arizona",
  cities: [
    {featured: false,
      link: "sedona",
    display: "Sedona",
    description: "Sedona is a city in united states."
},{featured: false,
    link: "sun-city",
    display: "Sun City",
    description: "Sun City is a city in united states."
},{featured: true,
      link: "yuma",
    display: "Yuma",
    description: "Yuma is a city in united states."
},{featured: true,
      link: "phoenix",
    display: "Phoenix",
    description: "Phoenix is a city in united states."
},{featured: false,
      link: "mesa",
    display: "Mesa",
    description: "Mesa is a city in united states."
}]

},{
  state: "arkansas",
  cities: [
    {featured: false,
      link: "arkansas-city",
    display: "Arkansas City",
    description: "Arkansas City is a city in united states."
},{featured: true,
    link: "harrison",
    display: "Harrison",
    description: "Harrison is a city in united states."
},{featured: true,
      link: "rogers",
    display: "Rogers",
    description: "Rogers is a city in united states."
},{featured: false,
      link: "conway",
    display: "Conway",
    description: "Conway is a city in united states."
},{featured: false,
      link: "benton",
    display: "Benton",
    description: "Benton is a city in united states."
}]

},{
  state: "colorado",
  cities: [
    {featured: true,
      link: "denver",
    display: "Denver",
    description: "Denver is a city in united states."
},{featured: true,
    link: "loveland",
    display: "Loveland",
    description: "Loveland is a city in united states."
},{featured: false,
      link: "aurora",
    display: "Aurora",
    description: "Aurora is a city in united states."
},{featured: false,
      link: "aspen",
    display: "Aspen",
    description: "Aspen is a city in united states."
},{featured: false,
      link: "greeley",
    display: "Greeley",
    description: "Greeley is a city in united states."
}]

},{
  state: "connecticut",
  cities: [
    {featured: false,
      link: "stamford",
    display: "Stamford",
    description: "Stamford is a city in united states."
},{featured: false,
    link: "meriden",
    display: "Meriden",
    description: "Meriden is a city in united states."
},{featured: false,
      link: "shelton",
    display: "Shelton",
    description: "Shelton is a city in united states."
},{featured: false,
      link: "greenwich",
    display: "Greenwich",
    description: "Greenwich is a city in united states."
},{featured: false,
      link: "norwalk",
    display: "Norwalk",
    description: "Norwalk is a city in united states."
}]

},{
  state: "delaware",
  cities: [
    {featured: false,
      link: "delaware-city",
    display: "Delaware City",
    description: "Delaware City is a city in united states."
},{featured: false,
    link: "dover",
    display: "Dover",
    description: "Dover is a city in united states."
},{featured: false,
      link: "newark",
    display: "Newark",
    description: "newark is a city in united states."
},{featured: false,
      link: "lewes",
    display: "Lewes",
    description: "Lewes is a city in united states."
},{featured: false,
      link: "bear",
    display: "Bear",
    description: "Bear is a city in united states."
}]

},{
  state: "florida",
  cities: [
    {featured: false,
      link: "miami",
    display: "Miami",
    description: "Miami is a city in united states."
},{featured: false,
    link: "orlando",
    display: "Orlando",
    description: "Orlando is a city in united states."
},{featured: false,
      link: "tampa",
    display: "Tampa",
    description: "Tampa is a city in united states."
},{featured: false,
      link: "florida-city",
    display: "Florida City",
    description: "Florida City is a city in united states."
},{featured: false,
      link: "destin",
    display: "Destin",
    description: "Destin is a city in united states."
}]

},{
  state: "georgia",
  cities: [
    {featured: false,
      link: "atlanta",
    display: "Atlanta",
    description: "Atlanta is a city in united states."
},{featured: false,
    link: "alpharetta",
    display: "Alpharetta",
    description: "Alpharetta is a city in united states."
},{featured: false,
      link: "augusta",
    display: "Augusta",
    description: "Augusta is a city in united states."
},{featured: false,
      link: "macon",
    display: "Macon",
    description: "Macon is a city in united states."
},{featured: false,
      link: "helen",
    display: "Helen",
    description: "Helen is a city in united states."
}]

},{
  state: "hawaii",
  cities: [
    {featured: false,
      link: "volcano",
    display: "Volcano",
    description: "Volcano is a city in united states."
},{featured: false,
    link: "pearl-city",
    display: "Pearl City",
    description: "Pearl City is a city in united states."
},{featured: false,
      link: "hilo",
    display: "Hilo",
    description: "Hilo is a city in united states."
},{featured: false,
      link: "hawi",
    display: "Hawi",
    description: "Hawi is a city in united states."
},{featured: false,
      link: "lihue",
    display: "Lihue",
    description: "Lihue is a city in united states."
}]

},{
  state: "idaho",
  cities: [
    {featured: false,
      link: "sun-valley",
    display: "Sun Valley",
    description: "Sun Valley is a city in united states."
},{featured: false,
    link: "idaho-city",
    display: "Idaho City",
    description: "Idaho City is a city in united states."
},{featured: false,
      link: "moscow",
    display: "Moscow",
    description: "Moscow is a city in united states."
},{featured: false,
      link: "boise",
    display: "Boise",
    description: "Boise  is a city in united states."
},{featured: false,
      link: "nampa",
    display: "Nampa",
    description: "Nampa is a city in united states."
}]

},{
  state:"lllinois",
  cities: [
    {featured: false,
      link: "chicago",
    display: "Chicago",
    description: "Chicago is a city in united states."
},{featured: false,
    link: "galesburg",
    display: "Galesburg",
    description: "Galesburg is a city in united states."
},{featured: false,
      link: "lllinois-city",
    display: "Lllinois City",
    description: "Lllinois City is a city in united states."
},{featured: false,
      link: "peoria",
    display: "Peoria",
    description: "Peoria is a city in united states."
},{featured: false,
      link: "elgin",
    display: "Elgin",
    description: "Elgin is a city in united states."
}]

},{
  state: "indiana",
  cities: [
    {featured: false,
      link: "bloomington",
    display: "Bloomington",
    description: "Bloomington is a city in united states."
},{featured: false,
    link: "kokomo",
    display: "Kokomo",
    description: "Kokomo is a city in united states."
},{featured: false,
      link: "gary",
    display: "Gary",
    description: "Gary is a city in united states."
},{featured: false,
      link: "carmel",
    display: "Carmel",
    description: "Carmel is a city in united states."
},{featured: false,
      link: "muncie",
    display: "Muncie",
    description: "Muncie is a city in united states."
}]

},{
  state: "lowa",
  cities: [
    {featured: false,
      link: "lowa-city",
    display: "Lowa City",
    description: "Lowa City is a city in united states."
},{featured: false,
    link: "davenport",
    display: "Davenport",
    description: "Davenport is a city in united states."
},{featured: false,
      link: "ames",
    display: "Ames",
    description: "Ames is a city in united states."
},{featured: false,
      link: "ankeny",
    display: "Ankeny",
    description: "Ankeny is a city in united states."
},{featured: false,
      link: "decorah",
    display: "Decorah",
    description: "Decorah is a city in united states."
}]

},{
  state: "kansas",
  cities: [
    {featured: false,
      link: "kansas-city",
    display: "Kansas City",
    description: "Kansas City is a city in united states."
},{featured: false,
    link: "lawrence",
    display: "Lawrence",
    description: "Lawrence is a city in united states."
},{featured: false,
      link: "topeka",
    display: "Topeka",
    description: "Topeka is a city in united states."
},{featured: false,
      link: "wichita",
    display: "Wichita",
    description: "Wichita is a city in united states."
},{featured: false,
      link: "salina",
    display: "Salina",
    description: "Salina is a city in united states."
}]

},{
  state: "kentucky",
  cities: [
    {featured: false,
      link: "lexington",
    display: "Lexington",
    description: "Lexington is a city in united states."
},{featured: false,
    link: "frankfort",
    display: "Frankfort",
    description: "Frankfort is a city in united states."
},{featured: false,
      link: "richmond",
    display: "Richmond",
    description: "Richmond is a city in united states."
},{featured: false,
      link: "georgetown",
    display: "Georgetown",
    description: "Georgetown is a city in united states."
},{featured: false,
      link: "murray",
    display: "Murray",
    description: "Murray is a city in united states."
}]

},{
  state: "lousiana",
  cities: [
    {featured: false,
      link: "alexandria",
    display: "Alexandria",
    description: "Alexandria is a city in united states."
},{featured: false,
    link: "ruston",
    display: "Ruston",
    description: "Ruston is a city in united states."
},{featured: false,
      link: "houma",
    display: "Houma",
    description: "Houma is a city in united states."
},{featured: false,
      link: "slidell",
    display: "Slidell",
    description: "Slidell is a city in united states."
},{featured: false,
      link: "sulphur",
    display: "Sulphur",
    description: "Sulphur is a city in united states."
}]

},{
  state: "maine",
  cities: [
    {featured: false,
      link: "portland",
    display: "Portland",
    description: "Portland is a city in united states."
},{featured: false,
    link: "lewiston",
    display: "Lewiston",
    description: "Lewiston is a city in united states."
},{featured: false,
      link: "bangors",
    display: "Bangors",
    description: "Bangors is a city in united states."
},{featured: false,
      link: "camden",
    display: "Camden",
    description: "Camden is a city in united states."
},{featured: false,
      link: "wells",
    display: "Wells",
    description: "Wells is a city in united states."
}]

},{
  state: "maryland",
  cities: [
    {featured: false,
      link: "ocean-city",
    display: "Ocean City",
    description: "Ocean City is a city in united states."
},{featured: true,
    link: "silver-spring",
    display: "Silver Spring",
    description: "Silver Spring is a city in united states."
},{featured: true,
      link: "lawrel",
    display: "Lawrel",
    description: "Lawre is a city in united states."
},{featured: false,
      link: "towson",
    display: "Towson",
    description: "Towson is a city in united states."
},{featured: false,
      link: "bel-air",
    display: "Bel Air",
    description: "Bel Air is a city in united states."
}]

},{
  state: "massachusetts",
  cities: [
    {featured: false,
      link: "boston",
    display: "Boston",
    description: "Boston is a city in united states."
},{featured: true,
    link: "cambridge",
    display: "Cambridge",
    description: "Cambridge is a city in united states."
},{featured: false,
      link: "newton",
    display: "Newton",
    description: "Newton is a city in united states."
},{featured: true,
      link: "lynn",
    display: "Lynn",
    description: "Lynn is a city in united states."
},{featured: false,
      link: "salem",
    display: "Salem",
    description: "Salem is a city in united states."
}]

},{
  state: "michigan",
  cities: [
    {featured: true,
      link: "detroit",
    display: "Detroit",
    description: "Detroit is a city in united states."
},{featured: false,
    link: "lansing",
    display: "Lansing",
    description: "Lansing is a city in united states."
},{featured: false,
      link: "dearborn",
    display: "Dearborn",
    description: "Dearborn is a city in united states."
},{featured: true,
      link: "saginaw",
    display: "Saginaw",
    description: "Saginaw is a city in united states."
},{featured: false,
      link: "warren",
    display: "Warren",
    description: "Warren is a city in united states."
}]

},{
  state: "minnesota",
  cities: [
    {featured: false,
      link: "minnesota-city",
    display: "Minnesota City",
    description: "Minnesota City is a city in united states."
},{featured: false,
    link: "eagan",
    display: "Eagan",
    description: "Eagan is a city in united states."
},{featured: false,
      link: "edina",
    display: "Edina",
    description: "Edina is a city in united states."
},{featured: false,
      link: "mankato",
    display: "Mankato",
    description: "Mankato is a city in united states."
},{featured: false,
      link: "brainerd",
    display: "Brainerd",
    description: "Brainerd is a city in united states."
}]

},{
  state: "mississippi",
  cities: [
    {featured: false,
      link: "jackson",
    display: "Jackson",
    description: "Jackson is a city in united states."
},{featured: false,
    link: "oxford",
    display: "Oxford",
    description: "Oxford is a city in united states."
},{featured: false,
      link: "tupelo",
    display: "Tupelo",
    description: "Tupelo is a city in united states."
},{featured: false,
      link: "biloxi",
    display: "Biloxi",
    description: "Biloxi is a city in united states."
},{featured: false,
      link: "meridian",
    display: "Meridian",
    description: "Meridian is a city in united states."
}]

},{
  state: "missouri",
  cities: [
    {featured: false,
      link: "kansas-city",
    display: "Kansas City",
    description: "Kansas City is a city in united states."
},{featured: false,
    link: "ozark",
    display: "Ozark",
    description: "Ozark is a city in united states."
}]

},{
  state: "montana",
  cities: [
    {featured: false,
      link: "helena",
    display: "Helena",
    description: "Helena is a city in united states."
},{featured: true,
    link: "sidney",
    display: "Sidney",
    description: "Sidney is a city in united states."
}]

},{
  state: "nebraska",
  cities: [
    {featured: false,
      link: "nebraska-city",
    display: "Nebraska City",
    description: "Nebraska City is a city in united states."
},{featured: true,
    link: "lincoln",
    display: "Lincoln",
    description: "Lincoln is a city in united states."
}]

},{
  state: "nevada",
  cities: [
    {featured: false,
      link: "reno",
    display: "reno",
    description: "Reno is a city in united states."
},{featured: false,
    link: "carson-city",
    display: "Carson City",
    description: "Carson City is a city in united states."
}]

},{
  state: "new-hampshire",
  cities: [
    {featured: false,
      link: "hampton",
    display: "Hampton",
    description: "Hampton is a city in united states."
},{featured: true,
    link: "conway",
    display: "Conway",
    description: "Conway is a city in united states."
}]

},{
  state: "new-jersey",
  cities: [
    {featured: false,
      link: "jersey-city",
    display: "Jersey City",
    description: "Jersey City is a city in united states."
},{featured: false,
    link: "princeton",
    display: "Princeton",
    description: "Princeton is a city in united states."
}]

},{
  state: "new-mexico",
  cities: [
    {featured: false,
      link: "roswell",
    display: "Roswell",
    description: "Roswell is a city in united states."
},{featured: false,
    link: "silver-city",
    display: "Silver City",
    description: "Silver City is a city in united states."
}]

},{
  state: "north-carolina",
  cities: [
    {featured: false,
      link: "charlotte",
    display: "Charlotte",
    description: "Charlotte is a city in united states."
},{featured: false,
    link: "kinston",
    display: "Kinston",
    description: "Kinston is a city in united states."
}]

},{
  state: "north-dakota",
  cities: [
    {featured: false,
      link: "bismarck",
    display: "Bismarck",
    description: "Bismarck is a city in united states."
},{featured: false,
    link: "williston",
    display: "Williston",
    description: "Williston is a city in united states."
}]

},{
  state: "ohio",
  cities: [
    {featured: false,
      link: "cleveland",
    display: "Cleveland",
    description: "Cleveland is a city in united states."
},{featured: false,
    link: "Columbus",
    display: "Columbus",
    description: "Columbus is a city in united states."
}]

},{
  state: "oklahoma",
  cities: [
    {featured: false,
      link: "oklahoma-city",
    display: "Oklahoma City",
    description: "Oklahoma City is a city in united states."
},{featured: false,
    link: "norman",
    display: "Norman",
    description: "Norman is a city in united states."
}]

},{
  state: "oregon",
  cities: [
    {featured: false,
      link: "portland",
    display: "Portland",
    description: "Portland is a city in united states."
},{featured: false,
    link: "oregon-city",
    display: "Oregon City",
    description: "Oregon City is a city in united states."
}]

},{
  state: "pennsylvania",
  cities: [
    {featured: false,
      link: "allentown",
    display: "Allentown",
    description: "Allentown is a city in united states."
},{featured: false,
    link: "hershey",
    display: "Hershey",
    description: "Hershey is a city in united states."
}]

},{
  state: "rhode-island",
  cities: [
    {featured: false,
      link: "cranston",
    display: "Cranston",
    description: "Cranston is a city in united states."
},{featured: false,
    link: "warwick",
    display: "Warwick",
    description: "Warwick is a city in united states."
}]

},{
  state: "south-carolina",
  cities: [
    {featured: false,
      link: "charleston",
    display: "Charleston",
    description: "Charleston is a city in united states."
},{featured: false,
    link: "columbia",
    display: "Columbia",
    description: "Columbia is a city in united states."
}]

},{
  state: "south-dakota",
  cities: [
    {featured: false,
      link: "rapid-city",
    display: "Rapid City",
    description: "Rapid City is a city in united states."
},{featured: false,
    link: "madison",
    display: "Madison",
    description: "Madison is a city in united states."
}]

},{
  state: "tennessee",
  cities: [
    {featured: false,
      link: "franklin",
    display: "Franklin",
    description: "Franklin is a city in united states."
},{featured: false,
    link: "jackson",
    display: "Jackson",
    description: "Jackson is a city in united states."
}]

},{
  state: "utah",
  cities: [
    {featured: false,
      link: "salt-lake-city",
    display: "Salt Lake City",
    description: "Salt Lake City is a city in united states."
},{featured: false,
    link: "sandy",
    display: "Sandy",
    description: "Sandy is a city in united states."
}]

},{
  state: "vermont",
  cities: [
    {featured: false,
      link: "burlington",
    display: "Burlington",
    description: "Burlington is a city in united states."
},{featured: false,
    link: "woodstock",
    display: "Woodstock",
    description: "Woodstock is a city in united states."
}]

},{
  state: "virginia",
  cities: [
    {featured: false,
      link: "alexandria",
    display: "Alexandria",
    description: "Alexandria is a city in united states."
},{featured: false,
    link: "fairfax",
    display: "Fairfax",
    description: "Fairfax is a city in united states."
}]

},{
  state: "washington",
  cities: [
    {featured: false,
      link: "richland",
    display: "Richland",
    description: "Richland is a city in united states."
},{featured: false,
    link: "olympia",
    display: "Olympia",
    description: "Olympia is a city in united states."
}]

},{
  state: "west virginia",
  cities: [
    {featured: false,
      link: "charleston",
    display: "Charleston",
    description: "Charleston is a city in united states."
},{featured: false,
    link: "ravenswood",
    display: "Ravenswood",
    description: "Ravenswood is a city in united states."
}]

},{
  state: "wisconsin",
  cities: [
    {featured: false,
      link: "kenosha",
    display: "Kenosha",
    description: "Kenosha is a city in united states."
},{featured: false,
    link: "green-bay",
    display: "Green Bay",
    description: "Green Bay is a city in united states."
}]

},{
  state: "wyoming",
  cities: [
    {featured: false,
      link: "evanston",
    display: "Evanston",
    description: "Evanston is a city in united states."
},{featured: false,
    link: "casper",
    display: "Casper",
    description: "Casper is a city in united states."
}]

}]

    return new Response(JSON.stringify(cities),{
    status: 200,
    headers: {'content-type': 'application/json'}
})
    
}
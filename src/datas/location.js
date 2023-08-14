import { v4 as uuidv4 } from "uuid";

let locationType = [
  "Popular",
  "Arts & culture",
  "Outdoors",
  "Moutains",
  "Beach",
  "Unique stays",
  "Categories",
  "Things to do",
  "Airbnb-friendly apartments",
  "Cottage rental",
  "Villa rentals",
  "Mansion rentals",
];
const allLocations = [
  "Amsterdam",
  "Antananarivo",
  "Athens",
  "Auckland",
  "Baghdad",
  "Bangkok",
  "Barcelona",
  "Beijing",
  "Berlin",
  "Bogota",
  "Brasilia",
  "Brisbane",
  "Brussels",
  "Bucharest",
  "Budapest",
  "Cairo",
  "Cape Town",
  "Caracas",
  "Chicago",
  "Colombo",
  "Copenhagen",
  "Dakar",
  "Delhi",
  "Doha",
  "Dubai",
  "Dublin",
  "Edinburgh",
  "Frankfurt",
  "Hanoi",
  "Havana",
  "Helsinki",
  "Ho Chi Minh City",
  "Hong Kong",
  "Istanbul",
  "Jakarta",
  "Jerusalem",
  "Johannesburg",
  "Kiev",
  "Kuala Lumpur",
  "Lima",
  "Lisbon",
  "London",
  "Los Angeles",
  "Madrid",
  "Manila",
  "Melbourne",
  "Mexico City",
  "Miami",
  "Milan",
  "Montreal",
  "Moscow",
  "Mumbai",
  "Nairobi",
  "New Delhi",
  "New York",
  "Osaka",
  "Oslo",
  "Paris",
  "Prague",
  "Quito",
  "Riyadh",
  "Rome",
  "San Francisco",
  "Santiago",
  "Sao Paulo",
  "Seoul",
  "Shanghai",
  "Singapore",
  "Stockholm",
  "Sydney",
  "Taipei",
  "Tehran",
  "Tokyo",
  "Toronto",
  "Vancouver",
  "Venice",
  "Vienna",
  "Warsaw",
  "Washington D.C.",
  "Wellington",
  "Windhoek",
  "Yangon",
  "Zurich",
];
let homeType = [
  "Apartment rentals",
  "Vaction rentals",
  "Pet-friendly rentals",
  "House rentals",
  "Beach house rentals",
  "Condo rentals",
  "Villa rentals",
  "Beachfront rentals",
  "Cabin rentals",
  "Ski-in/ski-out rentals",
  "Beach house rentals",
  "Family-friendly rentals",
  "Mainsion rentals",
];

let kkk = [
  {
    locationType: locationType[0],
    list: [
      {
        location: "Rome",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Barcelona",
        homeType: "Condo rentals",
        src: "",
      },
      {
        location: "Tokyo",
        homeType: "Beach house rentals",
        src: "",
      },
      {
        location: "New York",
        homeType: "Cabin rentals",
        src: "",
      },
      {
        location: "Paris",
        homeType: "Ski-in/ski-out rentals",
        src: "",
      },
      {
        location: "Cape Town",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Dubai",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "London",
        homeType: "Pet-friendly rentals",
        src: "",
      },
      {
        location: "Rio de Janeiro",
        homeType: "Beach house rentals",
        src: "",
      },
      {
        location: "Sydney",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Rome",
        homeType: "Condo rentals",
        src: "",
      },
      {
        location: "London",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Barcelona",
        homeType: "Apartment rentals",
        src: "",
      },
      {
        location: "New York",
        homeType: "Family-friendly rentals",
        src: "",
      },
      {
        location: "Paris",
        homeType: "Ski-in/ski-out rentals",
        src: "",
      },
      {
        location: "Cape Town",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Dubai",
        homeType: "Pet-friendly rentals",
        src: "",
      },
      {
        location: "Tokyo",
        homeType: "Beachfront rentals",
        src: "",
      },
      {
        location: "Rio de Janeiro",
        homeType: "Beach house rentals",
        src: "",
      },
      {
        location: "Sydney",
        homeType: "House rentals",
        src: "",
      },
      {
        location: "Rome",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "London",
        homeType: "Cabin rentals",
        src: "",
      },
      {
        location: "Barcelona",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "New York",
        homeType: "Apartment rentals",
        src: "",
      },
      {
        location: "Paris",
        homeType: "Beach house rentals",
        src: "",
      },
      {
        location: "Cape Town",
        homeType: "House rentals",
        src: "",
      },
      {
        location: "Dubai",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Tokyo",
        homeType: "Mainsion rentals",
        src: "",
      },
      {
        location: "Rio de Janeiro",
        homeType: "Ski-in/ski-out rentals",
        src: "",
      },
      {
        location: "Sydney",
        homeType: "Apartment rentals",
        src: "",
      },
      {
        location: "Rome",
        homeType: "Beachfront rentals",
        src: "",
      },
      {
        location: "London",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Barcelona",
        homeType: "Pet-friendly rentals",
        src: "",
      },
      {
        location: "New York",
        homeType: "Beach house rentals",
        src: "",
      },
      {
        location: "Paris",
        homeType: "Condo rentals",
        src: "",
      },
      {
        location: "Cape Town",
        homeType: "Villa rentals",
        src: "",
      },
      {
        location: "Dubai",
        homeType: "Ski-in/ski-out rentals",
        src: "",
      },
      {
        location: "Tokyo",
        homeType: "Beach house rentals",
        src: "",
      },
      {
        location: "Rio de Janeiro",
        homeType: "Family-friendly rentals",
        src: "",
      },
      {
        location: "Sydney",
        homeType: "Pet-friendly rentals",
        src: "",
      },
    ],
  },
  {
    locationType: locationType[1],
    list: [
      {
        location: "Amsterdam",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Berlin",
        homeType: "Condo rentals",
        src: "",
      },
      {
        location: "Madrid",
        homeType: "Beach house rentals",
        src: "",
      },
      {
        location: "Vienna",
        homeType: "Cabin rentals",
        src: "",
      },
      {
        location: "Prague",
        homeType: "Ski-in/ski-out rentals",
        src: "",
      },
      {
        location: "Budapest",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Athens",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Venice",
        homeType: "Pet-friendly rentals",
        src: "",
      },
      {
        location: "Florence",
        homeType: "Beach house rentals",
        src: "",
      },
      {
        location: "Lisbon",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Dublin",
        homeType: "Condo rentals",
        src: "",
      },
      {
        location: "Edinburgh",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Stockholm",
        homeType: "Apartment rentals",
        src: "",
      },
      {
        location: "Oslo",
        homeType: "Family-friendly rentals",
        src: "",
      },
      {
        location: "Helsinki",
        homeType: "Ski-in/ski-out rentals",
        src: "",
      },
      {
        location: "Reykjavik",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Copenhagen",
        homeType: "Pet-friendly rentals",
        src: "",
      },
      {
        location: "Zurich",
        homeType: "Beachfront rentals",
        src: "",
      },
      {
        location: "Moscow",
        homeType: "Beach house rentals",
        src: "",
      },
      {
        location: "Warsaw",
        homeType: "House rentals",
        src: "",
      },
      {
        location: "Brussels",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Amsterdam",
        homeType: "Cabin rentals",
        src: "",
      },
      {
        location: "Berlin",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Madrid",
        homeType: "Apartment rentals",
        src: "",
      },
      {
        location: "Vienna",
        homeType: "Beach house rentals",
        src: "",
      },
      {
        location: "Prague",
        homeType: "House rentals",
        src: "",
      },
      {
        location: "Budapest",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Athens",
        homeType: "Ski-in/ski-out rentals",
        src: "",
      },
      {
        location: "Venice",
        homeType: "Beach house rentals",
        src: "",
      },
      {
        location: "Florence",
        homeType: "Family-friendly rentals",
        src: "",
      },
      {
        location: "Lisbon",
        homeType: "Pet-friendly rentals",
        src: "",
      },
      {
        location: "Dublin",
        homeType: "Beachfront rentals",
        src: "",
      },
      {
        location: "Edinburgh",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Stockholm",
        homeType: "Pet-friendly rentals",
        src: "",
      },
      {
        location: "Oslo",
        homeType: "Condo rentals",
        src: "",
      },
      {
        location: "Helsinki",
        homeType: "Vaction rentals",
        src: "",
      },
      {
        location: "Reykjavik",
        homeType: "Villa rentals",
        src: "",
      },
      {
        location: "Copenhagen",
        homeType: "Ski-in/ski-out rentals",
        src: "",
      },
      {
        location: "Zurich",
        homeType: "Beach house rentals",
        src: "",
      },
    ],
  },
];
let locationTypeArr = [];


function returnLocationList(index) {
  let locationlist = [];
  for (let j = 0; j < Math.floor(Math.random() * 20) + 30; j++) {
    locationlist.push({
      id: uuidv4(),
      location: allLocations[Math.floor(Math.random() * allLocations.length)],
      homeType: homeType[Math.floor(Math.random() * homeType.length)],
      src: "",
    });
  }
  return locationlist;
}

for (let i = 0; i < 9; i++) {
  locationTypeArr.push({
    id: uuidv4(),
    locationType: locationType[i],
    locationList: returnLocationList(i),
  });
}

export default locationTypeArr;


import {v4 as uuidv4} from 'uuid'
import { faker } from "@faker-js/faker";
import fakeData from './fake-data.js'
import avatarArr from './avatarArr.js';

let i = -1
let increaseAndGetI = ()=>{
  i= i+1
  return i
}
function getRandomBirthYear() {
  const minYear = 1960;
  const maxYear = 1995;
  return Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
}




const owners = [
  
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    {
      id: uuidv4(),
      name: faker.person.lastName(),
      property: [fakeData.homeIdArr[increaseAndGetI()]],
      avatar: avatarArr[i],
  
      more_info: {
        birth: getRandomBirthYear(),
        school: fakeData.getUni(),
        live_in: 'Italy',
        speak: ["english", "italian"],
        pet: "i love dogs, i have three",
        work: "Interior Designer",
        good_at: ["art", "design", "museums", "reading"],
        past_trips: [
          "Chademeni, Greece",
          "Lesina, Italy",
          "London, United Kingdom",
        ],
      },
  
      account: {
        hosting_years: "5",
        rating: "4",
        reviews: ["r1", "r3", "r9"],
        level:'Superhost'
  
      },
      identify: {
        identity: "4325_5654_7652_445",
        email: "valentina54k@gmail.com",
      },
    },
    
  
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'
    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  {
    id: uuidv4(),
    name: faker.person.lastName(),
    property: [fakeData.homeIdArr[increaseAndGetI()]],
    avatar: avatarArr[i],

    more_info: {
      birth: getRandomBirthYear(),
      school: fakeData.getUni(),
      live_in: 'Italy',
      speak: ["english", "italian"],
      pet: "i love dogs, i have three",
      work: "Interior Designer",
      good_at: ["art", "design", "museums", "reading"],
      past_trips: [
        "Chademeni, Greece",
        "Lesina, Italy",
        "London, United Kingdom",
      ],
    },

    account: {
      hosting_years: "5",
      rating: "4",
      reviews: ["r1", "r3", "r9"],
      level:'Superhost'

    },
    identify: {
      identity: "4325_5654_7652_445",
      email: "valentina54k@gmail.com",
    },
  },
  
];

export default owners;

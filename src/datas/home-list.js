import {v4 as uuidv4} from 'uuid'
import { faker } from '@faker-js/faker';
import fakeData from './fake-data'
import owners from './owners';
import homeImageArr from './home-images'

let getAddress = ()=>{
  return fakeData.addressArr[Math.floor(Math.random()*48)]
}
let i = -1
let increaseAndGetI = ()=>{
  i= i+1
  return i
}




const homeList = [
  {
    id: fakeData.homeIdArr[increaseAndGetI()],
    name: faker.person.lastName(),
    property_type: "Home",
    imgarr: homeImageArr[i],
    owner: owners[i].id,

    status: "avalable",
    price: "500",

    country:  faker.location.country(),
    city: faker.location.city(),
    address: getAddress(),

    guests: "",
    bedrooms: "2",
    beds: "4",
    bathrooms: "",
    bath: "",

    rules: {
      check_in_after: "",
      check_out_before: "",
      max_guests: "",
    },
    amenities: {
      essentials: {
        wifi: "0",
        kitchen: "0",
        washer: "0",
        dryer: "0",
        air_conditioning: "0",
        heating: "0",
        dedicated_workspace: "0",
        tv: "0",
        hair_dryer: "0",
        iron: "0",
      },
      features: {
        pool: "0",
        hot_tub: "0",
        free_parking: "0",
        ev_charger: "0",
        crib: "0",
        gym: "0",
        bbq_grill: "0",
        breakfast: "0",
        indoor_fireplace: "0",
        smoking_allowed: "0",
      },
      location: {
        beachfront: "0",
        waterfront: "0",
      },
      safety: {
        smoke_alarm: "0",
        carbon_monoxide_alarm: "0",
      },
    },
    booking_options: {
      instant_book: "0",
      self_check_in: "0",
    },
    accessibility_features: {
      guest_entrance_and_parking: {
        step_free_guest_entrance: "0",
        guest_entrance_wider_than_32_inches: "0",
        accessible_parking_spot: "0",
        step_free_path_to_the_guest_entrance: "0",
      },
      bedroom: {
        step_free_bedroom_access: "0",
        bedroom_entrance_wider_than_32_inches: "0",
      },

      bathroom: {
        step_free_bathroom_access: "0",
        bedroom_entrance_wider_than_32_inches: "0",
        shower_grab_bar: "0",
        toilet_grab_bar: "0",
        step_free_shower: "0",
        shower_on_bath_chair: "0",
      },
      adaptive_equipment: {
        ceiling_or_mobile_hoist: "0",
      },
    },
    top_tie_stays: {
      superhost: "0",
      airbnb_plus: "0",
    },
    host_language: {
      english: "0",
      french: "0",
      german: "0",
      japanese: "0",
      italian: "0",
      russian: "0",
      spanish: "0",
      chinese: "0",
      arabic: "0",
      hindi: "0",
      portuguese: "0",
      turkish: "0",
      indonesian: "0",
      dutch: "0",
      korean: "0",
      bengali: "0",
      thai: "0",
      punjabi: "0",
      greek: "0",
      sign: "0",
      hebrew: "0",
      polish: "0",
      malay: "0",
      tagalog: "0",
      danish: "0",
      swedish: "0",
      norwegian: "0",
      finnish: "0",
      crech: "0",
      hungarian: "0",
      ukrainian: "0",
    },
  },
  {
    id: fakeData.homeIdArr[increaseAndGetI()],
    name: faker.person.lastName(),
    property_type: "Home",
    imgarr: homeImageArr[i],
    owner: owners[i].id,

    status: "avalable",
    price: "500",

    country:  faker.location.country(),
    city: faker.location.city(),
    address: getAddress(),

    guests: "",
    bedrooms: "2",
    beds: "4",
    bathrooms: "",
    bath: "",

    rules: {
      check_in_after: "",
      check_out_before: "",
      max_guests: "",
    },
    amenities: {
      essentials: {
        wifi: "0",
        kitchen: "0",
        washer: "0",
        dryer: "0",
        air_conditioning: "0",
        heating: "0",
        dedicated_workspace: "0",
        tv: "0",
        hair_dryer: "0",
        iron: "0",
      },
      features: {
        pool: "0",
        hot_tub: "0",
        free_parking: "0",
        ev_charger: "0",
        crib: "0",
        gym: "0",
        bbq_grill: "0",
        breakfast: "0",
        indoor_fireplace: "0",
        smoking_allowed: "0",
      },
      location: {
        beachfront: "0",
        waterfront: "0",
      },
      safety: {
        smoke_alarm: "0",
        carbon_monoxide_alarm: "0",
      },
    },
    booking_options: {
      instant_book: "0",
      self_check_in: "0",
    },
    accessibility_features: {
      guest_entrance_and_parking: {
        step_free_guest_entrance: "0",
        guest_entrance_wider_than_32_inches: "0",
        accessible_parking_spot: "0",
        step_free_path_to_the_guest_entrance: "0",
      },
      bedroom: {
        step_free_bedroom_access: "0",
        bedroom_entrance_wider_than_32_inches: "0",
      },

      bathroom: {
        step_free_bathroom_access: "0",
        bedroom_entrance_wider_than_32_inches: "0",
        shower_grab_bar: "0",
        toilet_grab_bar: "0",
        step_free_shower: "0",
        shower_on_bath_chair: "0",
      },
      adaptive_equipment: {
        ceiling_or_mobile_hoist: "0",
      },
    },
    top_tie_stays: {
      superhost: "0",
      airbnb_plus: "0",
    },
    host_language: {
      english: "0",
      french: "0",
      german: "0",
      japanese: "0",
      italian: "0",
      russian: "0",
      spanish: "0",
      chinese: "0",
      arabic: "0",
      hindi: "0",
      portuguese: "0",
      turkish: "0",
      indonesian: "0",
      dutch: "0",
      korean: "0",
      bengali: "0",
      thai: "0",
      punjabi: "0",
      greek: "0",
      sign: "0",
      hebrew: "0",
      polish: "0",
      malay: "0",
      tagalog: "0",
      danish: "0",
      swedish: "0",
      norwegian: "0",
      finnish: "0",
      crech: "0",
      hungarian: "0",
      ukrainian: "0",
    },
  },
  {
    id: fakeData.homeIdArr[increaseAndGetI()],
    name: faker.person.lastName(),
    property_type: "Home",
    imgarr: homeImageArr[i],
    owner: owners[i].id,

    status: "avalable",
    price: "500",

    country:  faker.location.country(),
    city: faker.location.city(),
    address: getAddress(),

    guests: "",
    bedrooms: "2",
    beds: "4",
    bathrooms: "",
    bath: "",

    rules: {
      check_in_after: "",
      check_out_before: "",
      max_guests: "",
    },
    amenities: {
      essentials: {
        wifi: "0",
        kitchen: "0",
        washer: "0",
        dryer: "0",
        air_conditioning: "0",
        heating: "0",
        dedicated_workspace: "0",
        tv: "0",
        hair_dryer: "0",
        iron: "0",
      },
      features: {
        pool: "0",
        hot_tub: "0",
        free_parking: "0",
        ev_charger: "0",
        crib: "0",
        gym: "0",
        bbq_grill: "0",
        breakfast: "0",
        indoor_fireplace: "0",
        smoking_allowed: "0",
      },
      location: {
        beachfront: "0",
        waterfront: "0",
      },
      safety: {
        smoke_alarm: "0",
        carbon_monoxide_alarm: "0",
      },
    },
    booking_options: {
      instant_book: "0",
      self_check_in: "0",
    },
    accessibility_features: {
      guest_entrance_and_parking: {
        step_free_guest_entrance: "0",
        guest_entrance_wider_than_32_inches: "0",
        accessible_parking_spot: "0",
        step_free_path_to_the_guest_entrance: "0",
      },
      bedroom: {
        step_free_bedroom_access: "0",
        bedroom_entrance_wider_than_32_inches: "0",
      },

      bathroom: {
        step_free_bathroom_access: "0",
        bedroom_entrance_wider_than_32_inches: "0",
        shower_grab_bar: "0",
        toilet_grab_bar: "0",
        step_free_shower: "0",
        shower_on_bath_chair: "0",
      },
      adaptive_equipment: {
        ceiling_or_mobile_hoist: "0",
      },
    },
    top_tie_stays: {
      superhost: "0",
      airbnb_plus: "0",
    },
    host_language: {
      english: "0",
      french: "0",
      german: "0",
      japanese: "0",
      italian: "0",
      russian: "0",
      spanish: "0",
      chinese: "0",
      arabic: "0",
      hindi: "0",
      portuguese: "0",
      turkish: "0",
      indonesian: "0",
      dutch: "0",
      korean: "0",
      bengali: "0",
      thai: "0",
      punjabi: "0",
      greek: "0",
      sign: "0",
      hebrew: "0",
      polish: "0",
      malay: "0",
      tagalog: "0",
      danish: "0",
      swedish: "0",
      norwegian: "0",
      finnish: "0",
      crech: "0",
      hungarian: "0",
      ukrainian: "0",
    },
  },
  {
    id: fakeData.homeIdArr[increaseAndGetI()],
    name: faker.person.lastName(),
    property_type: "Home",
    imgarr: homeImageArr[i],
    owner: owners[i].id,

    status: "avalable",
    price: "500",

    country:  faker.location.country(),
    city: faker.location.city(),
    address: getAddress(),

    guests: "",
    bedrooms: "2",
    beds: "4",
    bathrooms: "",
    bath: "",

    rules: {
      check_in_after: "",
      check_out_before: "",
      max_guests: "",
    },
    amenities: {
      essentials: {
        wifi: "0",
        kitchen: "0",
        washer: "0",
        dryer: "0",
        air_conditioning: "0",
        heating: "0",
        dedicated_workspace: "0",
        tv: "0",
        hair_dryer: "0",
        iron: "0",
      },
      features: {
        pool: "0",
        hot_tub: "0",
        free_parking: "0",
        ev_charger: "0",
        crib: "0",
        gym: "0",
        bbq_grill: "0",
        breakfast: "0",
        indoor_fireplace: "0",
        smoking_allowed: "0",
      },
      location: {
        beachfront: "0",
        waterfront: "0",
      },
      safety: {
        smoke_alarm: "0",
        carbon_monoxide_alarm: "0",
      },
    },
    booking_options: {
      instant_book: "0",
      self_check_in: "0",
    },
    accessibility_features: {
      guest_entrance_and_parking: {
        step_free_guest_entrance: "0",
        guest_entrance_wider_than_32_inches: "0",
        accessible_parking_spot: "0",
        step_free_path_to_the_guest_entrance: "0",
      },
      bedroom: {
        step_free_bedroom_access: "0",
        bedroom_entrance_wider_than_32_inches: "0",
      },

      bathroom: {
        step_free_bathroom_access: "0",
        bedroom_entrance_wider_than_32_inches: "0",
        shower_grab_bar: "0",
        toilet_grab_bar: "0",
        step_free_shower: "0",
        shower_on_bath_chair: "0",
      },
      adaptive_equipment: {
        ceiling_or_mobile_hoist: "0",
      },
    },
    top_tie_stays: {
      superhost: "0",
      airbnb_plus: "0",
    },
    host_language: {
      english: "0",
      french: "0",
      german: "0",
      japanese: "0",
      italian: "0",
      russian: "0",
      spanish: "0",
      chinese: "0",
      arabic: "0",
      hindi: "0",
      portuguese: "0",
      turkish: "0",
      indonesian: "0",
      dutch: "0",
      korean: "0",
      bengali: "0",
      thai: "0",
      punjabi: "0",
      greek: "0",
      sign: "0",
      hebrew: "0",
      polish: "0",
      malay: "0",
      tagalog: "0",
      danish: "0",
      swedish: "0",
      norwegian: "0",
      finnish: "0",
      crech: "0",
      hungarian: "0",
      ukrainian: "0",
    },
  },
  
  
  
 
];

export default homeList;

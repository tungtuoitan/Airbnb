import {v4 as uuidv4} from 'uuid'
import { faker } from '@faker-js/faker';
import fakeData from './fake-data'
import owners from './owners';
import homeImageArr from './home-images'
import homeData from './homeData';

let getAddress = ()=>{
  return fakeData.addressArr[Math.floor(Math.random()*48)]
}
let i = -1
let increaseAndGetI = ()=>{
  i= i+1
  return i
}

let randomX =(x)=>{
  return x[Math.floor(Math.random()*(x.length))]
}





const makeHome = (i)=>{
  return ({
    id: i,
    name: randomX(homeData.name),
    property_type: randomX(homeData.propertyType),
    placeType:randomX(homeData.placeType),
    imgarr: randomX(homeImageArr),
    owner: randomX(owners),

    status: randomX(homeData.status),
    priceOneNight: randomX(homeData.priceOneNight),

    country:  faker.location.country(),
    city: faker.location.city(),
    address: getAddress(),

    guests: randomX(homeData.guests),
    bedrooms: randomX(homeData.bedrooms),
    beds: randomX(homeData.beds),
    bathrooms: randomX(homeData.bathrooms),
    bath: randomX(homeData.bath),

    rules: {
      check_in_after: randomX(homeData.checkInAfter),
      check_out_before: randomX(homeData.checkOutBefore),
    },
    amenities: {
      essentials: {
        wifi: randomX(homeData.trueFalse),
        kitchen: randomX(homeData.trueFalse),
        washer: randomX(homeData.trueFalse),
        dryer: randomX(homeData.trueFalse),
        air_conditioning: randomX(homeData.trueFalse),
        heating: randomX(homeData.trueFalse),
        dedicated_workspace: randomX(homeData.trueFalse),
        tv: randomX(homeData.trueFalse),
        hair_dryer: randomX(homeData.trueFalse),
        iron: randomX(homeData.trueFalse),
      },
      features: {
        pool: randomX(homeData.trueFalse),
        hot_tub: randomX(homeData.trueFalse),
        free_parking: randomX(homeData.trueFalse),
        ev_charger: randomX(homeData.trueFalse),
        crib: randomX(homeData.trueFalse),
        gym: randomX(homeData.trueFalse),
        bbq_grill: randomX(homeData.trueFalse),
        breakfast: randomX(homeData.trueFalse),
        indoor_fireplace: randomX(homeData.trueFalse),
        smoking_allowed: randomX(homeData.trueFalse),
      },
      location: {
        beachfront: randomX(homeData.trueFalse),
        waterfront: randomX(homeData.trueFalse),
      },
      safety: {
        smoke_alarm: randomX(homeData.trueFalse),
        carbon_monoxide_alarm: randomX(homeData.trueFalse),
      },
    },
    booking_options: {
      instant_book: randomX(homeData.trueFalse),
      self_check_in: randomX(homeData.trueFalse),
    },
    accessibility_features: {
      guest_entrance_and_parking: {
        step_free_guest_entrance: randomX(homeData.trueFalse),
        guest_entrance_wider_than_32_inches: randomX(homeData.trueFalse),
        accessible_parking_spot: randomX(homeData.trueFalse),
        step_free_path_to_the_guest_entrance: randomX(homeData.trueFalse),
      },
      bedroom: {
        step_free_bedroom_access: randomX(homeData.trueFalse),
        bedroom_entrance_wider_than_32_inches: randomX(homeData.trueFalse),
      },

      bathroom: {
        step_free_bathroom_access: randomX(homeData.trueFalse),
        bedroom_entrance_wider_than_32_inches: randomX(homeData.trueFalse),
        shower_grab_bar: randomX(homeData.trueFalse),
        toilet_grab_bar: randomX(homeData.trueFalse),
        step_free_shower: randomX(homeData.trueFalse),
        shower_on_bath_chair: randomX(homeData.trueFalse),
      },
      adaptive_equipment: {
        ceiling_or_mobile_hoist: randomX(homeData.trueFalse),
      },
    },
    top_tie_stays: {
      superhost: randomX(homeData.trueFalse),
      airbnb_plus: randomX(homeData.trueFalse),
    },
    host_language: {
      english: randomX(homeData.trueFalse),
      french: randomX(homeData.trueFalse),
      german: randomX(homeData.trueFalse),
      japanese: randomX(homeData.trueFalse),
      italian: randomX(homeData.trueFalse),
      russian: randomX(homeData.trueFalse),
      spanish: randomX(homeData.trueFalse),
      chinese: randomX(homeData.trueFalse),
      arabic: randomX(homeData.trueFalse),
      hindi: randomX(homeData.trueFalse),
      portuguese: randomX(homeData.trueFalse),
      turkish: randomX(homeData.trueFalse),
      indonesian: randomX(homeData.trueFalse),
      dutch: randomX(homeData.trueFalse),
      korean: randomX(homeData.trueFalse),
      bengali: randomX(homeData.trueFalse),
      thai: randomX(homeData.trueFalse),
      punjabi: randomX(homeData.trueFalse),
      greek: randomX(homeData.trueFalse),
      sign: randomX(homeData.trueFalse),
      hebrew: randomX(homeData.trueFalse),
      polish: randomX(homeData.trueFalse),
      malay: randomX(homeData.trueFalse),
      tagalog: randomX(homeData.trueFalse),
      danish: randomX(homeData.trueFalse),
      swedish: randomX(homeData.trueFalse),
      norwegian: randomX(homeData.trueFalse),
      finnish: randomX(homeData.trueFalse),
      crech: randomX(homeData.trueFalse),
      hungarian: randomX(homeData.trueFalse),
      ukrainian: randomX(homeData.trueFalse),
    },
  })}
  const homeList = [
    ]
for(let j=0;j<100;j++){
  homeList.push(makeHome(j))
}

  export default homeList
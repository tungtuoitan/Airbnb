import React from "react";
import GoodPrice from "../components/good-price";
import RoomInABarn from "../components/room-in-a-barn";
import homeFeatureIcons from '../components/home-feature-icons'
import HomeFeatures2 from "../components/home-features-2";
import MeetYourHost from "../components/meet-your-host";
import owners from "../datas/owners";
import WhatOffers from "../components/what-this-place-offers";
import AboutThisPlace from "../components/about-this-place";
import XNightsInX from "../components/x-nights-in-x";

class RoomPage extends React.Component {
  render() {
    return (
      <>
        <div className="px-6 h-16 flex items-center">
          <div className="flex justify-between items-center w-full ">
            <div className="flex justify-center items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-label="Back"
                role="img"
                focusable="false"
                className="left-arrow-icon"
              >
                <path
                  fill="none"
                  d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"
                ></path>
              </svg>

              <span className="">Homes</span>
            </div>
            <div className="flex justify-center gap-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="unknown-icon-2"
              >
                <g fill="none">
                  <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v23V3zM6 13l9.3-9.3a1 1 0 0 1 1.4 0L26 13"></path>
                </g>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="heart-icon-2"
              >
                <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
              </svg>
            </div>
          </div>
        </div>


        <div className='mb-6'>
          <div className="max-h-xs ">
            <img src="./images/homes/a1.jpg" />
          </div>
          <div className="px-6 pt-5">
            <h1 className="font-size26 font-semibold color222 text-left leading30">
              The Granary, Rustic Modern Barn Conversion
            </h1>

            <div className="mt-c12 text-c14">
              <div className="flex justify-start color222   ">
                <div className="flex justify-center items-center gap-2  ">
                  <div className="text-right flex justify-end manrope-700 gap-c4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      className="star-letter mt-c4 "
                    >
                      <path
                        fill-rule="evenodd"
                        d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                      ></path>
                    </svg>
                    <span className="font-normal">{5}</span>
                  </div>
                </div>

                <span className="mx-c6">.</span>
                <a>
                  <span className="mr-c2">316</span>
                  <span>reviews</span>
                </a>

                <span className="mx-c6">.</span>

                <span>
                  <div>
                    <div className="text-right flex justify-end manrope-700">
                      <span className="mr-c6">
                        <i class="fa-solid fa-medal fa-xs"></i>
                      </span>
                      <span className="font-normal">Super host</span>
                    </div>
                  </div>
                </span>
              </div>
              <div className="text-left">
                <a href="" className="underline ">
                  Lindfield,England,United Kingdom
                </a>
              </div>
            </div>
          </div>
        </div>

        <GoodPrice/>
        <RoomInABarn feature={homeFeatureIcons}/>
        <HomeFeatures2 feature={homeFeatureIcons}/>
        <MeetYourHost owner ={owners[2]}/>
        <AboutThisPlace/>
        <WhatOffers/>
        <XNightsInX/>
      </>
    );
  }
}

export default RoomPage;

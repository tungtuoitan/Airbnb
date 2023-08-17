import destinations from "../../datas/destinations";
import DestinationItem from './destination-item'


export default function WhereTo (){

    return(
        <div className="WHERE_TO  relative overflow-hidden w-full bg-white p-6 rounded-3xl box-shadow-whereto">
          <div className="font-size22 color222 font-bold text-left mb-c12">
            Where to?
          </div>
          <div className="w-6 h-full bg-white opacity-70 absolute right-0 z100"></div>

          <div
            className="INPUT_CONTAINER     border-1 border-gray-400 h-c60 rounded-xl  
          relative"
          >
            <span className="absolute  y-center left-c20 color222  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  fill: "none",
                  height: "16px",
                  width: "16px",
                  stroke: "currentcolor",
                  strokeWidth: "4",
                  overflow: "visible",
                }}
              >
                <path
                  fill="none"
                  d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
                ></path>
              </svg>
            </span>

            <input
              className="INPUT      w-full h-full pr-c20 pl-12 text-light placeholder:text-sm text-sm focus:outline-0
                placeholder:text-gray-600 font-medium rounded-3xl "
              placeholder="Search destinations"
            />
            <div className="DESTINATIONS    "></div>
          </div>
          <div className="DESTINATIONS_CONTAINER  ">
            <div
              className="CONTAINERR    relative left--24 w-plus48 scrollable-element  
            pt-c20 pb-c4 ml-6  px-8  overflow-auto  x-mandatory
            inline-flex gap-c20 "
            >
              {destinations.map((item, index) => {
                return (
                  <DestinationItem
                    imgSrc={item.imgSrc}
                    name={item.name}
                    key={item.id}
                  />
                );
              })}
            </div>
          </div>
          <div className="bg-white rounded-lg flex justify-between">
            <span>Where</span>
            <span>I'm flexible</span>
          </div>
        </div>
    )
}
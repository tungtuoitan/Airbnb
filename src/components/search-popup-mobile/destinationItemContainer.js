import { DestinationItemList } from "./destinationItemList";
export default function DestinationItemContainer() {
  return (
    <div className="DESTINATIONS_CONTAINER  ">
            <div
              className="CONTAINERR    relative left--24 w-plus48 scrollable-element  
            pt-c20 pb-c4 ml-6  px-8  overflow-auto  x-mandatory
            inline-flex gap-c20  "
            >
             
              <DestinationItemList/>
              <div className="opacity-0 border1 w-10 ml--u4">.</div>
            </div>
          </div>
  );
}

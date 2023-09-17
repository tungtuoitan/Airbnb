import destinations from "../../datas/destinations";
import DestinationItem from "./destination-item";
import DestinationItem2 from "./destinationItem2";

export function DestinationItemList2() {
  return (
    <>
      {destinations.map((item, index) => {
        return (
          <DestinationItem2
            imgSrc={item.imgSrc} 
            name={item.name}
            key={item.id}
          />
        );
      })}
    </>
  );
}

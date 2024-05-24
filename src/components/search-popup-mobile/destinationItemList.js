import destinations from "../../datas/destinations";
import DestinationItem from "./destination-item";

export function DestinationItemList() {
  return (
    <>
      {destinations.map((item, index) => {
        return (
          <DestinationItem
            imgSrc={item.imgSrc}
            name={item.name}
            key={item.id}
          />
        );
      })}
    </>
  );
}

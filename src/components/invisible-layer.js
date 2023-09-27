import HeartContainer from "./heartContainer";
import Book from "./book";
import EmtyDiv from "./emtyDiv";

export default function InvisibleLayer() {
  return (
    <div className="INVISIBLE_LAYER    pointer-events-none grid-in-item p-c14 
    box-border         w-full h-full flex-wrap absolute top-0  ">
      <EmtyDiv />
      <EmtyDiv />
      <HeartContainer  />

      <EmtyDiv />
      <EmtyDiv />
      <EmtyDiv />

      <Book />
      <EmtyDiv />
      <EmtyDiv />
    </div>
  );
}

import Div3 from "./div3";
import Div7 from "./div7";
import EmtyDiv from "./emtyDiv";

export default function InvisibleLayer() {
  return (
    <div className="INVISIBLE_LAYER       pointer-events-none grid-in-item p-c14 box-border         w-full h-full flex-wrap absolute top-0  ">
      <EmtyDiv />
      <EmtyDiv />
      <Div3  />

      <EmtyDiv />
      <EmtyDiv />
      <EmtyDiv />

      <Div7 />
      <EmtyDiv />
      <EmtyDiv />
    </div>
  );
}

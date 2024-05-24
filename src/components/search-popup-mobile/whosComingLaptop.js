import TitleWhoComing from "./titleWhoComing";
import AdultsComming from "./adultsComing";
import ChildrenComming from "./childrenComing";
import InfantsComing from "./infantsComing";
import PetsComing from "./petsComing";
import TitleOnFilter from "../titleOnFilter";
import TitleOnRoom from "../titleOnRoom";
import PetsComing2 from "./PetsComing2";
import { Link } from "react-scroll";

export default function WhosComingLaptop() {
  return (
    <div name='whosComing'
      className=" bg-white  overflow-hidden w-full
     pt-8 pb-10 mb-8  zmax4 border-b-c1 border-solid border-gray-300"
    >
      <TitleOnRoom title={`Who's coming?`} />
      <div>
        <div className="grid grid-cols-2 gap-10">
          <AdultsComming />
          <ChildrenComming />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <InfantsComing />
          <PetsComing2 />
        </div>
      </div>
    </div>
  );
}

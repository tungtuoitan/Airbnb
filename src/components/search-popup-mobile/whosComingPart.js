import TitleWhoComing from "./titleWhoComing";
import AdultsComming from "./adultsComing";
import ChildrenComming from "./childrenComing";
import InfantsComing from "./infantsComing";
import PetsComing from "./petsComing";
import TitleOnFilter from "../titleOnFilter";
import TitleOnRoom from "../titleOnRoom";

export default function WhosComingPart() {
  return (
    <div name='whosComing'
      className="11:hidden  bg-white  overflow-hidden w-full
     pt-6 pb-c20 mb-6  zmax4 border-b-c1 border-solid border-gray-300"
    >
      <TitleOnRoom title={`Who's coming?`} />
      <div>
        <AdultsComming />
        <ChildrenComming />
        <InfantsComing />
        <PetsComing />
      </div>
    </div>
  );
}

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
      className="11:hiddenx  bg-white  overflow-hidden w-full
     pt-6 11:pt-8 11:pb-10 pb-c20 mb-6 11:mb-8 zmax4 border-b-c1 border-solid border-gray-300"
    >
      <TitleOnRoom title={`Who's coming?`} />
      <div className="11:grid grid-cols-2 gap-x-10">
        <AdultsComming />
        <ChildrenComming />
        <InfantsComing />
        <PetsComing />
      </div>
    </div>
  );
}

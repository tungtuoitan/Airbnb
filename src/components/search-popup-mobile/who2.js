import TitleWhoComing from "./titleWhoComing";
import AdultsComming from "./adultsComing";
import ChildrenComming from "./childrenComing";
import InfantsComing from "./infantsComing";
import PetsComing from "./petsComing";

export default function Who2() {
  return (
    <div className="relative overflow-hidden w-full bg-white py-6 px-10  
    ">
        <AdultsComming />
        <ChildrenComming />
        <InfantsComing />
        <PetsComing />
    </div>
  );
}

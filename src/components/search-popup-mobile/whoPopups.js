import TitleWhoComing from "./titleWhoComing";
import AdultsComming from "./adultsComing";
import ChildrenComming from "./childrenComing";
import InfantsComing from "./infantsComing";
import PetsComing from "./petsComing";

export default function WhoPopUps() {
  return (
    <div className="WHO_COMING  relative overflow-hidden w-full bg-white p-6 pb-c10 rounded-3xl box-shadow-whereto">
      <TitleWhoComing />
      <div>
        <AdultsComming />
        <ChildrenComming />
        <InfantsComing />
        <PetsComing />
      </div>
    </div>
  );
}

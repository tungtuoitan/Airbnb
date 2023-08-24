import WhenYourTrip from "./search-popup-mobile/whens-your-trip";
import WhereTo from "./search-popup-mobile/where-to";
import WhosComing from "./search-popup-mobile/whos-coming";

export default function BodySearchPopUp() {
  const style = {
    container:
      "containerN      bg-fb px-c12 pt-c11  h-calc-133  overflow-y-scroll w-full     ",
    main: "flex justify-between items-center  flex flex-col gap-c12 pb-c16",
  };
  return (
    <div className={style.container}>
      <div className={style.main}>
        <WhereTo />
        <WhenYourTrip />
        <WhosComing />
      </div>
    </div>
  );
}

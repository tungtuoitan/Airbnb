import SingleBed from "./singleBed";
import TitleOnRoom from "./titleOnRoom";
import { whereYouSleepInfo } from "./whereYourSleepInfo";
import { useGetCurrentHome } from "../hooks/useGetCurrentHome";
import DoubleBed from "./DoubleBed";
export default function () {
  const currentHome = useGetCurrentHome();
  const totalBeds = currentHome.beds;
  return (
    <div className="pt-6  border-b-1 border-solid border-gray-300">
      <TitleOnRoom title={"Where you'll sleep"} />
      <div
        className=" pt-4 w-full flex justify-between gap-2 pb-8 
         "
      >
        {totalBeds <= 2 ? (
          <SingleBed />
        ) : totalBeds > 2 && totalBeds <= 4 ? (
          <DoubleBed />
        ) : (
          <>
            <SingleBed />
            <DoubleBed />
          </>
        )}
      </div>
    </div>
  );
}

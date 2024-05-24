import StarIcon from "./startIcon";
import { useGetCurrentHome } from "../hooks/useGetCurrentHome";

export default function TextRating() {
  const currentHome = useGetCurrentHome();
  return (
    <div className=" flex justify-center items-center gap-2  ">
      <div
        className="text-right flex justify-end items-center gap-c4 
      text-sm"
      >
        <div className="mt-c-4">
          <StarIcon />
        </div>
        <span className="7:font-semibold  ">
          {currentHome.owner.account.rating}
        </span>
      </div>
    </div>
  );
}

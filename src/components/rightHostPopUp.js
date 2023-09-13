import StarIcon from "./startIcon";
import { useGetCurrentHome } from "../hooks/useGetCurrentHome";

export default function RightHostPopUp() {
  const owner = useGetCurrentHome().owner;
  return (
    <div className="w-full text-left   ">
      <div className=" border-b-1 pb-c12 color222 border-solid border-gray-400">
        <p className="weight-800  font-size22 leading-7 ">
          {owner.account.reviews.length}
        </p>
        <p className="font-semibold font-size10 ">Reviews</p>
      </div>
      <div className=" border-b-1 pb-c12 pt-c7 color222 border-solid border-gray-400">
        <div className="weight-800  font-size22 leading-7 flex justify-start ">
          <span>{owner.account.rating}</span>
          <StarIcon />
        </div>
        <p className="font-semibold font-size10">Rating</p>
      </div>

      <div className="  pt-c7 color222 ">
        <p className="weight-800  font-size22 leading-7">
          {owner.account.hosting_years}
        </p>
        <p className="font-semibold font-size10">Year hoisting</p>
      </div>
    </div>
  );
}

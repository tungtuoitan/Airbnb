import SingleBedIcon from "./singleBedIcon";

export default function SingleBed() {
  return (
    <div
      className="flex w-full h-c106 justify-between flex-col gap-5 
      border-solid border-gray-300 border-1 rounded-xl p-4 textleft "
    >
      <SingleBedIcon />
      <p className="text-left font-size12 font-semibold">
        single bed
      </p>
    </div>
  );
}

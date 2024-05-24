import DateItem2 from "./dateItem2";
export default function DatesRow2({ fiveArrs, index1 }) {
  return (
    <tr className="flex justify-around   w-full ">
      {fiveArrs[index1].map((item, index) => {
        return <DateItem2 item={item}   available={true} key={index} />;
      })}
    </tr>
  );
}

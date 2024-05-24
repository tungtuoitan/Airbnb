export default function InfoItem({ item }) {
  return (
    <div className="flex gap-4 justify-start mb-4 flex-nowrap   ">
      <span className="pt-c4 ">{item[2]}</span>
      <div className="text-left ">
        <h3 className="text-base font-semibold color222 ">{item[0]}</h3>
        <p className="text-gray7 font-size14">{item[1]}</p>
      </div>
    </div>
  );
}

export default function DestinationItem({ imgSrc, name }) {
  return (
    <div className="inline-flex flex-col gap-2 items-start w-full h-full 
    flex-0-0-auto scroll-snap-align-start ">
      <img src={imgSrc} className="w-c122 h-c122 rounded-lg 
      border-1 border-solid border-gray-300" />
      <p className="text-sm font-light color222">{name}</p>
    </div>
  );
}

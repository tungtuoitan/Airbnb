import descImg from "../assets/youplace.jpg";

export default function AirbnbCard() {
  return (
    <div
      className="text-black222 || flex justify-between 
    || p-6 mt-6 rounded-xl box-shadow-u9 
    || border-c1 border-solid border-gray-300" 
    >
      <div>
        <h2
          className="text-c18 font-bold text-left leading-tight 
            || mb-2"
        >
          AirBnb your place
        </h2>
        <p className="text-c14 text-left leading-tight">
          It's simple to get set up and start earning
        </p>
      </div>
      <img src={descImg} className="object-none" />  
    </div>
  );
}

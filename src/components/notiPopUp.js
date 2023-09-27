import OkBtn from "./okBtn";

export default function NotiPopUp() {
  return (
    <div
    style={{maxWidth:'500px'}}
      className={`bg-white  overflow-auto  w-full
      7:absolute 7:bottom-0 7:relative 7:bottom-auto
    rounded-t-xl rounded-b-xl 7:rounded-xl p-6 text-center 
    11:pb-10 zmax4
    `}
    >
      <p className="font-bold text-base 7:text-c22 7:mt-10 mb-4 
      flex  flex-col-reverse justify-center items-center
      11:flex-row ">
        <span>Your booking request has been sent!</span>
        <img className="w-12 h-12 object-cover  ml-c-2
        11:mb-2" src='https://cdn.vectorstock.com/i/preview-1x/15/05/green-tick-checkmark-icon-vector-22691505.jpg'/>
      </p>
      <p>
        Your booking request has been sent. Please wait for the host's response.
        The host will respond within a maximum of 6 hours.
      </p>
      <OkBtn />
    </div>
    
  );
}

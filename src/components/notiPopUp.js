import OkBtn from "./okBtn";

export default function NotiPopUp() {
  return (
    <div
    style={{maxWidth:'500px',height:'300px'}}
      className="bg-white  overflow-hidden
      overscroll-contain  absolute bottom-0 7:relative 7:bottom-auto
      rounded-t-xl 7:rounded-xl p-6 text-center overscroll-contain
       "
    >
      <p className="font-bold text-c22 mt-10 mb-4 flex justify-center items-end">
        <span>Your booking request has been sent!</span>
        <img className="w-12 h-12 object-cover mb-c-4 ml-c-2" src='https://cdn.vectorstock.com/i/preview-1x/15/05/green-tick-checkmark-icon-vector-22691505.jpg'/>
      </p>
      <p>
        Your booking request has been sent. Please wait for the host's response.
        The host will respond within a maximum of 6 hours.
      </p>
      <OkBtn />
    </div>
  );
}

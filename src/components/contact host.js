


export default function ContinueBtn({isGray,handleOnClick}) {
    return (
      <div
        className={`BUTTON ||  w-full  py-c12 ||  flex justify-center items-center
        || weight-800 text-white || rounded-md  cursor-pointer
        ${isGray===true ? 'bg-lgrayd':'main-gradient'}`}
        onClick={handleOnClick}
      >
        Continue
      </div>
    );
  }
  
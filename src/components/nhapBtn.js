import { Divider } from "@mui/material";


export default function NhapBtn({isGray,handleOnClick}) {
    return (
      <div
        className={`BUTTON    w-full rounded-md  py-c12 flex justify-center items-center
        weight-800 text-white
        ${isGray===true ? 'bg-lgrayd':'main-gradient'}`}
        // onClick={handleOnClick}
      >
        Continue
      </div>
    );
  }
  
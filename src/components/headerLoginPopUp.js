import {useSelector} from 'react-redux'

export default function HeaderLoginPopUp() {
  return (
    <div className={`HEADER z100 sticky top-0 || flex justify-center items-center || 
    bg-white || h-16 || border-b-c1 border-solid border-lgray`}
    >
      <span className="text-base weight-800 color222 ">Login or sign up</span>
    </div>
  );
}

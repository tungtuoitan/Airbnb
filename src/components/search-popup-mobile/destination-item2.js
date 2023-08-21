import { useDispatch, useSelector } from "react-redux";
import { actionPickLocation,actionClickWhen } from "../../actions/action";

export default function DestinationItem2() {
  const fiveCitiesArr = useSelector((state) => state.root.fiveCitiesArr);
  const dispatch = useDispatch()
  const handleOnClick =(item)=>{
    dispatch(actionPickLocation(item))
    // dispatch(actionClickWhen())
  }
  return (
    <ul className="">
      {fiveCitiesArr.map((item, index) => {
        return (
          <li key={index} className="flex justify-start flex items-center gap-4 
          mb-4"
          onClick={()=>{handleOnClick(item)}}>
            <div className="bg-gray235 w-12 h-12 rounded-xl flex justify-center items-center
            ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{display: 'block', height: '22px', width: '22px', fill: 'currentcolor'}}
              >
                <path d="M16 0a12 12 0 0 1 12 12c0 6.34-3.81 12.75-11.35 19.26l-.65.56-1.08-.93C7.67 24.5 4 18.22 4 12 4 5.42 9.4 0 16 0zm0 2C10.5 2 6 6.53 6 12c0 5.44 3.25 11.12 9.83 17.02l.17.15.58-.52C22.75 23 25.87 17.55 26 12.33V12A10 10 0 0 0 16 2zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
              </svg>
            </div>
            <p className="text-left color222">{item}</p>
          </li>
        );
      })}
    </ul>
  );
}

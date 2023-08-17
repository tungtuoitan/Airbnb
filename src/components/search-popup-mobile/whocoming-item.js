export default function WhoComingItem({ personType, age, haveBottomLine }) {
  return (
    <div
      className={`WHOCOMING_ITEM    flex justify-between items-center py-c14 
         ${
           haveBottomLine === true
             ? "border-b-1 border-solid border-gray-200"
             : ""
         }`}
    >
      <div className="LEFT   ">
        <p className="text-base color222 font-bold text-left">{personType}</p>
        <p className="text-sm color-gray7 font-medium text-left mt-c2">{age}</p>
      </div>
      <div className="RIGHT   flex items-center gap-c14">
        <button
          className="border-1 border-solid border-gray-400 w-8 h-8 rounded-full 
            flex justify-center items-center opacity-30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "12px",
              width: "12px",
              stroke: "gray",
              strokeWidth: " 5.33333",
              overflow: "visible",
            }}
          >
            <path d="M2 16h28"></path>
          </svg>
        </button>
        <span>0</span>
        <button
          className="border-1 border-solid border-gray-400 w-8 h-8 rounded-full 
            flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "12px",
              width: "12px",
              stroke: "gray",
              strokeWidth: " 5.33333",
              overflow: "visible",
            }}
          >
            <path d="M2 16h28M16 2v28"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

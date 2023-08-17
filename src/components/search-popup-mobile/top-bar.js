

export default function TopBar (){

    return(
        <div className="TOP_BAR      w-full h-c60 flex justify-center relative pt-c18 pb-2 pl-c12">
        <div
          className="ICON     w-8 h-8 rounded-full border-1 border-solid border-gray-400
        flex justify-center items-center absolute left-c20"
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
              stroke: "currentcolor",
              strokeWidth: "5.33333",
              overflow: "visible",
            }}
          >
            <path d="m6 6 20 20M26 6 6 26"></path>
          </svg>
        </div>
        <div className="2_OPTIONS     flex items-center gap-4 font-base font-bold color222">
          <div className=" pb-c2 border-b-2 border-solid border-black">
            Stays
          </div>
          <div>Experiences</div>
        </div>
      </div>
    )
}
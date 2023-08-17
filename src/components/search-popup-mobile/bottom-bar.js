

export default function(){

    return(
        <div
        className="BOTTOM_BAR   absolute bottom-0 w-full   bg-gray-80 
         border-top-05px border-solid border-gray-200
         px-6 py-c12 flex justify-between items-center"
      >
        <button className=" font-base color222 underline font-bold h-full ">
          Clear all
        </button>
        <button
          className=" main-gradient w-32 h-12 rounded-lg border1 flex justify-center 
          items-center"
        >
          <div className="flex justify-center items-center gap-c10">
            <div className="mt-c2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "16px",
                  width: "16px",
                  fill: "white",
                }}
              >
                <path d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"></path>
              </svg>
            </div>
            <span className="text-white font-bold ">Search</span>
          </div>
        </button>
      </div>
    )
}
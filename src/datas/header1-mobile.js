export default function Header1Mobile() {
  const handleOnClick = ()=>{

  }
  return (
    <div className="HEADER_1_MOBILE    flex 7:hidden w-min-285   justify-center">
      <div className="search_bar          flex justify-between items-center  w-calc-48 h-14 mt-c14 rounded-full border-gray-200 border-1  shadow-searchbox-smartf text-sm font-semibold color222">
        <div className="w-max--48  "
        onClick={handleOnClick}
        >
          <div className=" flex items-center">
            <div className=" w-8 h-8 rounded-2xl flex justify-center align items-center m-c7   ">
              <i class="fa-solid fa-magnifying-glass fa-md color222"></i>
            </div>
            <div className=" pb-1   ">
              <div className=" w-28 text-left   ">Anywhere</div>
              <div className=" text-xs">
                <span className=" w-28  font-light color71     ">Any week</span>

                <span className="list-disc w-28  pl-3 font-light color71 ">
                  <span>•</span> Add guests
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-9 h-9 rounded-full  flex justify-center align items-center mr-c12 border-1   ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="icon-unknown"
          >
            <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

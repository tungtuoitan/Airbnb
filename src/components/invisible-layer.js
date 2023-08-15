
export default function InvisibleLayer ({owner}){

    return(
        <div className="INVISIBLE_LAYER       pointer-events-none grid-in-item p-c14 box-border         w-full h-full flex-wrap absolute top-0  ">
            <div className="opacity-0">1</div>
            <div className="opacity-0">2</div>
            <div className="flex justify-self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="heart-gray-icon"
              >
                <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
              </svg>
            </div>

            
            <div className="opacity-0">4</div>
            <div className="opacity-0">5</div>
            <div className="opacity-0">6</div>

            <div className="flex items-end">
              <div className=" relative ">
                <div className=" w-16         h-c72 bg-gray-EA   rounded-book-icon book-shadow   "></div>
                <div className=" w-16 flex  absolute top-0 left-0 border-r-1 border-solid border-gray-300  border-b-1        h-c72 bg-gray-EA   rounded-book-icon ">
                  <div className="w-c6 h-full border-r-2 border-solid border-gray-300 border-l-1   "></div>
                  <div className="flex items-center justify-center w-full  ">
                    <div className="w-10 h-10   shadow-md first-letter:border-1 border-solid border-gray-400 rounded-full overflow-hidden ">
                      <img src={owner.avatar} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="opacity-0">8</div>

            <div className="opacity-0">9</div>
          </div>
    )
}


export default function MoreInfo(){
    return(
        <div className=" mt-c12 text-c14">
        <div className="flex justify-start color222   ">
          <div className="flex justify-center items-center gap-2  ">
            <div className="text-right flex justify-end manrope-700 gap-c4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="star-letter mt-c4 "
              >
                <path
                  fillRule="evenodd"
                  d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                ></path>
              </svg>
              <span className="font-normal">{5}</span>
            </div>
          </div>

          <span className="mx-c6">.</span>
          <a>
            <span className="mr-c2">316</span>
            <span>reviews</span>
          </a>

          <span className="mx-c6">.</span>

          <span>
            <div>
              <div className="text-right flex justify-end manrope-700">
                <span className="mr-c6">
                  <i className="fa-solid fa-medal fa-xs"></i>
                </span>
                <span className="font-normal">Super host</span>
              </div>
            </div>
          </span>
        </div>
        <div className="text-left">
          <a href="" className="underline ">
            Lindfield,England,United Kingdom
          </a>
        </div>
      </div>
    )
}
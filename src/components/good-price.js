import React from "react";

class GoodPrice extends React.Component {
  render() {
    return (
      <div className="px-6">
        <div className="py-5 border-y-1 flex justify-center text-left leading-5">
          <div>
            <span className="font-bold">Good price. </span>
            <span>
              Your dates are $31 less than the avg. nightly rate over the last 3
              months.
            </span>
          </div>
          <div className="w-8 ml-4">

          <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="good-price-icon"
          >
            <g stroke="none">
              <path d="M25.55 1a5 5 0 0 1 3.344 1.282l.192.182 17.207 17.208a3 3 0 0 1 .135 4.098l-.135.144-18.379 18.379a3.001 3.001 0 0 1-3.32.63l-6.42 3.81c-1.296.768-2.948.452-3.894-.736l-.115-.153-.118-.186L2.094 25.046a5 5 0 0 1-.53-3.7l3.435-14.01L5 6a5 5 0 0 1 4.783-4.995L10 1h15.55zM5 15.733l-1.494 6.09a3 3 0 0 0 .219 2.034l.1.186 11.93 20.574.07.112a1 1 0 0 0 1.328.283l5.797-3.441L6.464 25.086a5 5 0 0 1-1.457-3.272L5 21.55v-5.817zM25.55 3H10a3 3 0 0 0-2.995 2.824L7 6v15.55a3 3 0 0 0 .743 1.977l.136.144L25.086 40.88a1 1 0 0 0 1.32.083l.094-.083L44.88 22.5a1 1 0 0 0 .083-1.32l-.083-.094L27.67 3.879A3 3 0 0 0 25.55 3zM14 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
              <path
                d="M25.556 5H10a1 1 0 0 0-.993.883L9 6v15.556a1 1 0 0 0 .206.608l.087.1 16.505 16.505 16.971-16.971L26.263 5.293a1 1 0 0 0-.575-.284L25.556 5z"
                fillOpacity=".2"
              ></path>
            </g>
          </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default GoodPrice;

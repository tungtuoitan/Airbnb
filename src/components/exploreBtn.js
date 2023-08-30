import { Link } from "react-router-dom";
export default function ExploreBtn() {
  const path = window.location.pathname;

  return (
    <Link to="/" className=" flex items-center flex-col gap-c3 mt-c12 mt-2 w-1/5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        className={`icon-explore 
        ${path==='/' ? 'stroke-main':'stroke-current opacity-60'}`}
      >
        <path
          fill="none"
          d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
        ></path>
      </svg>
      <span className={`${path==='/'? 'text-black222 font-semibold':''}`}>Explore</span>
    </Link>
  );
}

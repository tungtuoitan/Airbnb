export default function ExploreBtn() {
  return (
    <div className=" flex items-center flex-col gap-c5 my-c10 w-1/5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        className="icon-explore opacity-60"
      >
        <path
          fill="none"
          d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
        ></path>
      </svg>
      <span>Explore</span>
    </div>
  );
}

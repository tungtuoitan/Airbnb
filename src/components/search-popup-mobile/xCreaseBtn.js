export const dPathDecreaseIcon = 'M2 16h28'
export const dPathIncreaseIcon = 'M2 16h28M16 2v28'

export default function XCreaseBtn({onClick,dPath,cantClick}) {
  return (
    <button
      className={`border-1 border-solid border-gray-400 w-8 h-8 rounded-full 
      flex justify-center items-center
      ${cantClick===true ? 'opacity-30': ''}`}
      onClick={onClick}
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
        <path d={dPath}></path>
      </svg>
    </button>
  );
}

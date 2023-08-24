import { useSelector } from "react-redux"


export default function RightArrowBtn() {
    const rightArrowDisplay = useSelector(state=>state.header2Nav.rightArrowDisplay)
  const handleOnClickRight = () => {
    $(".hometypebar-container").animate({ scrollLeft: "+=700" }, "slow");
  };

  return (
    <div
      onClick={handleOnClickRight}
      className={`bg-white color222 border-1 pt-1px border-gray-400 w-7 h-7 rounded-full bg-white ${
        rightArrowDisplay === true
          ? "pointer-events-auto"
          : "pointer-events-none"
      }`}
    >
      <i class="fa-solid fa-angle-right fa-sm"></i>
    </div>
  );
}

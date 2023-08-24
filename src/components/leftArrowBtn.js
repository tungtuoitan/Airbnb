import { useSelector } from "react-redux";

export default function LeftArrowBtn() {
  const leftArrowDisplay = useSelector(
    (state) => state.header2Nav.leftArrowDisplay
  );
  const handleOnClickLeft = () => {
    $(".hometypebar-container").animate({ scrollLeft: "-=700" }, "slow");
  };

  return (
    <div
      onClick={handleOnClickLeft}
      className={`border-1 border-gray-400 w-7 h-7 pt-1px pr-1px rounded-full bg-white ${
        leftArrowDisplay === true
          ? "pointer-events-auto"
          : "pointer-events-none"
      }`}
    >
      <i className="fa-solid fa-angle-left fa-sm"></i>
    </div>
  );
}

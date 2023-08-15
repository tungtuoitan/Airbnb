function NextButton({ onClick, isHovering,isNextBtnDisplay }) {
  return (
    <button
      className={`NEXT_BTN absolute  bg-white-u1 w-8 h-8 hover:bg-white  rounded-full  right-c8 y-center box-shadow-u2  z100
      ${isNextBtnDisplay === true ? "" : "hidden"}
     ${isHovering === true ? "" : "hidden"}`}
      onClick={onClick}
    >
      <i
        class="fa-solid fa-angle-right fa-sm"
        style={{ color: "#222222", marginLeft: "0px" }}
      ></i>
    </button>
  );
}

export default NextButton;

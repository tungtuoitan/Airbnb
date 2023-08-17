import React, { createRef } from "react";
import { v4 as uuidv4 } from "uuid";

class DateItem extends React.Component {
  state = {
    focus: "bg-white text-black",
  };
  xRef = createRef();
  onMouseEnter = () => {};

  pickDate = () => {
    let { focus } = this.state;
    let focusCopy;
    if (focus === "bg-black text-white hover:border-white ") {
      focusCopy = "bg-white text-black ";
      this.setState({ focus: focusCopy });
    } else {
      focusCopy = "bg-black text-white hover:border-white ";
      this.setState({ focus: focusCopy });
    }
  };
  render() {
    const { item, available } = this.props;
    const { pickDate, onMouseEnter } = this;
    const { focus } = this.state;

    return (
      <>
        {item !== "" ? (
          <td
            onClick={(item) => pickDate()}
            ref={this.xRef}
            onMouseEnter={() => onMouseEnter()}
            className={
              available === true
                ? `w-c63 h-c63 date      rounded-full border-1 hover:border-black border-white     ${focus}     font-size14 font-medium  flex justify-center items-center box-border`
                : `w-c63 h-c63 date                                                        colorb0   font-size14 font-medium  flex justify-center items-center`
            }
            key={uuidv4()}
          >
            {item}
          </td>
        ) : (
          <td className=" w-c63 h-c63 " key={uuidv4()}></td>
        )}
      </>
    );
  }
}

export default DateItem;

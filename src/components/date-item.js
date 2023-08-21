import React, { createRef, useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import {useSelector,useDispatch} from 'react-redux'
import { actionPickDate } from "../actions/action";

// class DateItem extends React.Component {

//   state = {
//     focus: "bg-white text-black",
//     heightDataItem: 0,
//   };
//   xRef = createRef();
//   onMouseEnter = () => {};

//   pickDate = () => {
//     let { focus } = this.state;
//     let focusCopy;
//     if (focus === "bg-black text-white hover:border-white ") {
//       focusCopy = "bg-white text-black ";
//       this.setState({ focus: focusCopy });
//     } else {
//       focusCopy = "bg-black text-white hover:border-white ";
//       this.setState({ focus: focusCopy });
//     }
//   };
//   componentDidMount() {
//       const x = this.xRef.current
//       let computedStyle = window.getComputedStyle(this.xRef.current);
//       let widthDataItem = computedStyle.getPropertyValue("width"); //đang ở string
//       console.log('runned: ',x.offsetWidth )
//       widthDataItem = Number(widthDataItem.slice(0, widthDataItem.length - 2));

//       this.setState({ heightDataItem: x.offsetWidth });
//   }
//   render() {
//     const { item, available } = this.props;
//     const { pickDate, onMouseEnter } = this;
//     const { focus, heightDataItem } = this.state;

//     return (
//       <>
//         {item !== "." ? (
//           <td
//             onClick={(item) => pickDate()}
//             ref={this.xRef}
//             onMouseEnter={() => onMouseEnter()}
//             className={
//               available === true
//                 ? `ITEM      w-full  gap-c4      rounded-full border-1 hover:border-black border-white     ${focus}     font-size14 font-medium  flex justify-center items-center box-border`
//                 : `ITEM      w-full  gap-c4                                                        colorb0   font-size14 font-medium  flex justify-center items-center`
//             }
//             style={{ height: `${heightDataItem}px` }}
//             key={uuidv4()}
//           >
//             {item}
//           </td>
//         ) : (
//           <td
//             className=" w-full  gap-c4 h-calc-w opacity-0  "
//             ref={this.xRef}
//             style={{ height: `${heightDataItem}px` }}
//             key={uuidv4()}
//           >
//             .
//           </td>
//         )}
//       </>
//     );
//   }
// }

function DateItem({ item, available }) {
  let isSearchPopUpOpen = useSelector(state => state.isSearchPopUpOpen )
  const [focus, setFocus] = useState("bg-white text-black");
  const [heightDataItem, setHeightDataItem] = useState(0);
  const xRef = useRef(null);
  const onMouseEnter = () => {};
  const dispatch =useDispatch()

  const pickDate = () => {
    let focusCopy;
    if (focus === "bg-black text-white hover:border-white ") {
      focusCopy = "bg-white text-black ";
      setFocus(focusCopy);
    } else {
      focusCopy = "bg-black text-white hover:border-white ";
      setFocus(focusCopy);
    }
  };
  const handleOnClick = (item)=>{
    pickDate()
    dispatch(actionPickDate(item))
    



  }
  useEffect(() => {
    const x = xRef.current;
    console.log("runned: ", x.offsetWidth);

    setHeightDataItem(x.offsetWidth)
  }, [isSearchPopUpOpen]);

  return (
    <>
      {item !== "." ? (
        <td
          onClick={(item) => handleOnClick(item)}
          ref={xRef}
          onMouseEnter={() => onMouseEnter()}
          className={
            available === true
              ? `ITEM      w-full  gap-c4      rounded-full border-1 hover:border-black border-white     ${focus}     font-size14 font-medium  flex justify-center items-center box-border`
              : `ITEM      w-full  gap-c4                                                        colorb0   font-size14 font-medium  flex justify-center items-center`
          }
          style={{ height: `${heightDataItem}px` }}
          key={uuidv4()}
        >
          {item}
        </td>
      ) : (
        <td
          className=" w-full  gap-c4 h-calc-w opacity-0  "
          ref={xRef}
          style={{ height: `${heightDataItem}px` }}
          key={uuidv4()}
        >
          .
        </td>
      )}
    </>
  );
}

export default DateItem;

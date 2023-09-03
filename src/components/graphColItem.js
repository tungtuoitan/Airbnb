import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

export default function GraphCol({ height }) {
  const graphWidth = useSelector((state) => state.filterSlice.graphWidth);
  const leftSliderValue = useSelector(
    (state) => state.filterSlice.leftSliderValue
  );
  const rightSliderValue = useSelector(
    (state) => state.filterSlice.rightSliderValue
  );

  const homeAmountByPrice = useSelector(
    (state) => state.filterSlice.homeAmountByPrice
  );
  return (
    <>
      {homeAmountByPrice.map((item, index) => {
        const width0 = (graphWidth - 32) / homeAmountByPrice.length;
        const isBlack = width0 * index > leftSliderValue &&
        width0 * (index + 1) < rightSliderValue
        const width = `calc( 100% / ${homeAmountByPrice.length} )`;
        const top = `${(item / 80) * height}px`;
        const style = {
          width: width,
          background: "#222",
          opacity: `${
            isBlack
              ? "1"
              : "0.2"
          }`,
          height: "100%",
          position: "relative",
          top: top,
          borderTopLeftRadius: "2px",
          borderTopRightRadius: "2px",
        };
        return <li key={index} style={style} className="9:mr-c1"></li>;
      })}
    </>
  );
}

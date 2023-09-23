import { useDispatch, useSelector } from "react-redux";
import useCreateHomeAmount from "../hooks/useCreateHomeAmount";
import useCreateBiggestAmount from "../hooks/useCreateBiggestAmount";

export default function GraphCol({ height }) {
  const graphWidth = useSelector((state) => state.filterSlice.graphWidth);
  const graphFake = useSelector((state) => state.filterSlice.graphFake);
  const placeType = useSelector((state) => state.filterSlice.filter.placeType);

  const biggestAmount = useCreateBiggestAmount();
  const leftSliderValue = useSelector(
    (state) => state.filterSlice.leftSliderValue
  );
  const rightSliderValue = useSelector(
    (state) => state.filterSlice.rightSliderValue
  );

  const homeAmountByPrice = useCreateHomeAmount();
  return (
    <>
      {homeAmountByPrice.map((item, index) => {
        const width0 = (graphWidth - 32) / homeAmountByPrice.length; // là width của 1 col
        const indexOfLeftCol = (leftSliderValue / width0).toFixed(0);
        const indexOfRightCol = (rightSliderValue / width0).toFixed(0);

        let isBlack = index >= indexOfLeftCol && index < indexOfRightCol -2; // 2 là số từ trên trời rơi xuống, để điều chỉnh UI 

        const width = `calc( 100% / ${homeAmountByPrice.length} )`;
        //#
        // let top = `${height - (height / biggestAmount) * item}px`;  // codeline này dùng cho real data
        let top = `${height - height*graphFake[placeType][index]/20}px`

        const style = {
          width: width,
          background: "#222",
          opacity: `${isBlack ? "1" : "0.2"}`,
          height: "100%",
          position: "relative",
          top: top,
          borderTopLeftRadius: "2px",
          borderTopRightRadius: "2px",
          transition: "top 0.2s linear",
        };
        return (
          <li key={index} style={style} className="9:mr-c2 transition-all"></li>
        );
      })}
    </>
  );
}

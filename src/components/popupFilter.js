import HeaderFilter from "./HeaderFilter";
import FilterBottomBar from "./search-popup-mobile/filterBottomBar";
import HeaderPopUp from "./headerPopUp";
import FilterBody from "./filterBody";
import{useDispatch,useSelector} from 'react-redux'
import useCreateList from "../hooks/useCreateList";

export default function PopUpFilter() {
  const widthScreen = useSelector(s=>s.header2Nav.widthScreen)
  const isFilterOn = useSelector(s=>s.filterSlice.isFilterOn)
  const currentHomeList = useCreateList().currentHomeList;
  if(currentHomeList.length<12 && currentHomeList.length>3 ){
    console.log('Vì data mẫu có hạn, xin vui lòng không filter nhiều')
  }

  return (
    <div
      className={`bg-white w-full h-calc-u2 w-calc-u2  max-w-c780
      ||  absolute  7:relative 7:bottom-autox 
      || rounded-t-xl 7:rounded-xl overflow-hidden trans-pop
      ${isFilterOn && widthScreen <745 ?'bottom-0 '
      :!isFilterOn && widthScreen<745? 'f1':''}
      ${isFilterOn && widthScreen>=745 ?'xy-center '
      :!isFilterOn && widthScreen>=745 ?'f2':''}`}
    >
      <div
        className="w-full  h-calc-u2 
            overflow-auto overscroll-contain relative "
      >
        <HeaderFilter title="Filters" />
        <FilterBody />
      </div>
      <FilterBottomBar />
    </div>
  );
}

import SearchIcon2 from "../icons/search2-icon";
import {style} from '../styles/searchBoxLaptop-style'

export default function SearchBoxLaptop() {
  
  return (
    <div className={style.container}>
      <div className={style.div1}>
        <span className={style.anyWhere}>Anywhere</span>
        <span className={style.anyWeek}>Any week</span>
        <span className={style.anyGuests}>Add guests</span>
      </div>
      <div className={style.div2}>
        <SearchIcon2 />
      </div>
    </div>
  );
}

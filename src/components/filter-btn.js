import FilterIcon from "../icons/filter-icon"

export default function FilterBtn (){
    return <button className="FILTER bg-white  flex justify-center items-center gap-2 p-4 pr-c18 w-22 h-12 border-1 rounded-xl        ">
    <FilterIcon/>
    <span className="font-size12 font-bold color222">Filters</span>
  </button>
}
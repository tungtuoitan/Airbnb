import SearchIcon2 from "../icons/search2-icon";



export default function InnerSearchSmall(){
    return(
        <>
        <div className={`ml-2`}>
          <span className={`w-28 border-r-1 px-4 border-gray-300`}>
            Anywhere
          </span>
          <span className={`w-28 border-r-1 px-4 border-gray-300`}>
            Any week
          </span>
          <span className={`w-28 px-4 pl-4 font-light color71`}>
            Add guests
          </span>
        </div>
        <div
          className={`bg-main-color w-8 h-8 rounded-2xl 
      text-white flex justify-center align items-center m-c7 `}
        >
          <SearchIcon2 />
        </div>
        </>
    )
}
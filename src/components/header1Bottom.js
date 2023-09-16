import GrayScreen from "./grayScreen";
import SearchBig from "./searchBig";



export default function Header1Bottom(){
    return(
        <div className="flex justify-center relative zmax">
          <SearchBig/>
          <GrayScreen />
        </div>
    )
}
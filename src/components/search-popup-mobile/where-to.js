import destinations from "../../datas/destinations";
import DestinationItem from './destination-item'
import {useSelector,useDispatch} from 'react-redux'
import { actionSearchPopUp,whereToInputChange } from "../../actions/action";
import SmallPanel from "./small-panel";
import { actionClickWhen,actionClickWho,actionClickWhere } from "../../actions/action";
import TypingSearchPopup from "./typing-search-popup";
import InputWhereTo from "./input-where-to";


export default function WhereTo (){
  const whereToInput = useSelector((state) => state.root.whereToInput);
  const dispatch = useDispatch()
  const handleOnChange = (e)=>{
    dispatch(whereToInputChange(e.target.value))

  }
  const where = useSelector(state=>state.root.where)
  const isWhereToOpen = useSelector(state=>state.root.isWhereToOpen)
  const handleOnClick = ()=>{
    dispatch(actionClickWhere())
    
  }


    return(isWhereToOpen ? 

        (<div className="WHERE_TO  relative overflow-hidden w-full bg-white p-6 rounded-3xl box-shadow-whereto">
          <div className="font-size22 color222 font-bold text-left mb-c12">
            Where to?
          </div>
          <div className="w-6 h-full bg-white  absolute right-0 z100"></div>

          
            <InputWhereTo handleOnChange={handleOnChange}/>
          <div className="DESTINATIONS_CONTAINER  ">
            <div
              className="CONTAINERR    relative left--24 w-plus48 scrollable-element  
            pt-c20 pb-c4 ml-6  px-8  overflow-auto  x-mandatory
            inline-flex gap-c20  "
            >
              {destinations.map((item, index) => {
                return (
                  <DestinationItem
                    imgSrc={item.imgSrc}
                    name={item.name}
                    key={item.id}
                  />
                );
              })}
              <div className="opacity-0 border1 w-10 ml--u4">.</div>
            </div>
          </div>

          <TypingSearchPopup/>
        
        </div>)
        :
        (<SmallPanel content={'where'} value={where} handleOnClick={handleOnClick}/>)
    )
}
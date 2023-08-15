import React,{useState} from 'react'
import TotalPrice from "../components/total-price";
import Item from "../components/item";
import homeList from "../datas/home-list.js";
import owners from "../datas/owners";

function Body (){
  const [displayItemsNumber,setDisplayItemNumber] = useState(20)
  const handleOnClickShowMore =()=>{
    if(displayItemsNumber<= 40){
      setDisplayItemNumber(displayItemsNumber + 20)
    }
  }
    return( 
        <div className="   px-6 pb-10 7:px-10 14:px-20    h-full mt-6  7:mt-c20       ">
          <div className="GRID-CONTAINER      grid-homepage   w-full   h-auto   7:grid-cols-2  overflow-x-hidden       ">
            <div className="total-price-container  grid 11:grid-cols-4 gap-x-6    ">
              <TotalPrice />
            </div>
            {homeList.slice(0,displayItemsNumber).map((item, index) => {
              let owner = owners.find((x) => x.id === item.owner);

              return (
                <div className="ITEM_CONTAINERR  max-w-full  " key={item.id} >
                  <Item path={item.imgarr[0]} owner={owner} home={item} />
                </div>
              );
            })}
          </div>
          <div className="CONTINUE  color222  pt-14">
            <p className="font-bold font-size18 mb-4 text-center ">
              Continue exploring design homes
            </p>
            <button 
            onClick={handleOnClickShowMore}
            
            className="border-1 bg-222 text-white px-c24 py-c12 border-black rounded-md font-semibold text-base hover:bg-black ">
              Show more
            </button>
          </div>
        </div>

    )
}

export default Body
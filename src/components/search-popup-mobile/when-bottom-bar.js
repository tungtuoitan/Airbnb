

export default function WhenBottomBar (){

    return(
        <div
        className="BOTTOM_BAR        absolute left-0 bottom-0 w-full  
         border-top-05px border-solid border-gray-200 px-6
          py-c12 flex justify-between items-center"
      >
        <button className=" font-base color222 underline font-bold h-full ">
          Reset
        </button>
        <button
          className=" bg-222 px-6 h-12 rounded-lg  flex justify-center 
          items-center"
        >
          <div className="flex justify-center items-center gap-c10">
            <span className="text-white font-bold ">Next</span>
          </div>
        </button>
      </div>
    )
}
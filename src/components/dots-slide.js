import React from 'react'

function DotsSlide ({imgArr,currentIndex}){

    return(
        <div className="DOTS_CONTAINTER        dots-container absolute bottom-c13 x-center flex flex-col justify-end z100">
        <div className={`flex gap-c6   justify-center `}>
          {imgArr.map((item, index) => {
            return (
              <div key={index}
                className={`w-c6 h-c6  rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-white/70"
                } `}
              ></div>
            );
          })}
        </div>
      </div>

    )
}

export default React.memo(DotsSlide)
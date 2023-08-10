import React from "react";

class ShowMoreBtn extends React.Component{
    render(){
        return(
            <button className=" flex items-center justify-center gap-c5 ">
              <span className="font-4 underline font-bold">Show more</span>
              <i class="fa-solid fa-angle-right fa-xs mt-c2 fa-"></i>
            </button>

        )
    }
}

export default ShowMoreBtn
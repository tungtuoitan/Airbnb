import React from "react";

class HomeFeatures2 extends React.Component{
    render(){
        const {feature} = this.props
        return(
             <div className="px-6 pt-6 pb-6 ">
                <div className="flex gap-4 justify-start mb-4 ">
                    <div className="pt-c4">
                        {feature.one_double_bed[1]}
                    </div>
                    <div className="text-left">
                        <h3 className="text-base font-semibold color222 ">Room in a barn</h3>
                        <p className="text-gray7 font-size14">Your own room in a home, plus access to shared spaces</p>
                    </div>
                </div>
                <div className="flex gap-4 justify-start mb-4">
                    <div className="pt-c4">
                        {feature.one_double_bed[1]}
                    </div>
                    <div className="text-left">
                        <h3 className="text-base font-semibold color222 ">Room in a barn</h3>
                        <p className="text-gray7 font-size14">Your own room in a home, plus access to shared spaces</p>
                    </div>
                </div>
                <div className="flex gap-4 justify-start ">
                    <div className="pt-c4">
                        {feature.one_double_bed[1]}
                    </div>
                    <div className="text-left">
                        <h3 className="text-base font-semibold color222 ">Room in a barn</h3>
                        <p className="text-gray7 font-size14">Your own room in a home, plus access to shared spaces</p>
                    </div>
                </div>




                
             </div>

        )
    }
}

export default HomeFeatures2
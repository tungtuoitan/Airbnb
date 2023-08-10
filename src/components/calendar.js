import React, { state, useState } from "react";
import DateItem from "./date-item";

// let changeFocusedDate = 
// {
//   blackCircle:0,
//   increase: ()=>{
//     if(this.blackCircle>1){
//       return
//     }else{
//       this.blackCircle+=1
//       console.log('blackCircle: ',this.blackCircle)
//     }

//   },
//   decrease: ()=>{
//     this.blackCircle-=1
//     console.log('blackCircle: ',this.blackCircle)
//   },
// }  



// calendar Object
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth();

var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getWeekOfDay1(year, month) {
  const date = new Date(year, month , 1).getDay();
  return date;
}

let get5ArrOfMonth = (y, m) => {
  let dateOfMonth = Array.from({ length: 42 }, () => "");
  let Day1Index = getWeekOfDay1(y, m, 1);
  dateOfMonth[Day1Index] = 1;
  for (let i = Day1Index; i < 42; i++) {
    dateOfMonth[i] = i - (Day1Index - 1);
    if (dateOfMonth[i] > 31) {
      dateOfMonth[i] = "";
    }
  }

  return [
    dateOfMonth.slice(0, 7),
    dateOfMonth.slice(7, 14),
    dateOfMonth.slice(14, 21),
    dateOfMonth.slice(21, 28),
    dateOfMonth.slice(28, 35),
    dateOfMonth.slice(35, 42),

  ];
};





class Calendar extends React.Component {
  state = { month: month, year: year };

  prev = () => {
    let month = this.state.month;
    let year = this.state.year;

    let monthCopy;
    let yearCopy;
    if(month===0){
      monthCopy=11
      yearCopy = year - 1

    }else{
      monthCopy = month - 1;
      yearCopy = year
    }
    this.setState({year:yearCopy})
    this.setState({ month: monthCopy });
    
  };
  next = () => {
    let month = this.state.month;
    let year = this.state.year;

    let monthCopy;
    let yearCopy;
    if(month===11){
      monthCopy=0
      yearCopy = year +1

    }else{
      monthCopy = month + 1;
      yearCopy = year
    }
    this.setState({year:yearCopy})
    this.setState({ month: monthCopy });
  };

  render() {
    const {prev, next} = this;
    const { month, year } = this.state;
    const fiveArrs = get5ArrOfMonth(year, month);

    return (
      <div>

        <div className="mt-8">
          <div className="flex justify-between mb-4 ">
            <button onClick={() => prev()}>
              <i class="fa-solid fa-angle-right fa-rotate-180"></i>
            </button>
            <div className="font-base font-bold color222">
              <span>{monthNames[month]}</span>
              <span> {year}</span>
            </div>
            <button onClick={()=>{next()}}>
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>

          <div className="">
            <div className=" font-size12 text-gray7 font-medium ">
              <tr className="flex justify-around gap-c4">
                <td className="w-calc-7 h-c24 flex justify-center">Su</td>
                <td className="w-calc-7 h-c24 flex justify-center">Mo</td>
                <td className="w-calc-7 h-c24 flex justify-center">Tu</td>
                <td className="w-calc-7 h-c24 flex justify-center">We</td>
                <td className="w-calc-7 h-c24 flex justify-center">Th</td>
                <td className="w-calc-7 h-c24 flex justify-center">Fr</td>
                <td className="w-calc-7 h-c24 flex justify-center">Sa</td>
              </tr>
            </div>


            <table className="w-full">
              <tbody className="w-full">

                <tr className="flex justify-around   w-full">
                  {fiveArrs[0].map((item, index) => {
                    return (
                      <DateItem item={item} available={true}  />
                    );
                  })}
                </tr>



                <tr className="flex justify-around   w-full">
                  {fiveArrs[1].map((item, index) => {
                    
                    return (
                      <DateItem item={item} available={true}  />
                    );
                  })}
                </tr>
                <tr className="flex justify-around   w-full">
                  {fiveArrs[2].map((item, index) => {
                    
                    return (
                      <DateItem item={item} available={false}  />
                    );
                  })}
                </tr>
                <tr className="flex justify-around   w-full">
                  {fiveArrs[3].map((item, index) => {
                    
                    return (
                      <DateItem item={item} available={false}  />
                    );
                  })}
                </tr>
                <tr className="flex justify-around   w-full">
                  {fiveArrs[4].map((item, index) => {
                    
                    return (
                      <DateItem item={item} available={false}  />
                    );
                  })}
                </tr>
                {
                    fiveArrs[5][0]!=='' ? (
                    <tr className="flex justify-around   w-full ">
                  {fiveArrs[5].map((item, index) => {
                    return (
                      <DateItem item={item}/>
                    );

                  })}
                </tr>
                )
                : 
                (<></>) 
                }


              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;

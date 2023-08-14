import React,{createRef} from "react";
import { useState } from "react";
import locationTypeArr from "../datas/location.js";

class LocationGrid extends React.Component {
  state = {
    displayingIndex: 0,
    isShortList: true,
    numberOnShortList:0
  };
  onClickLocationType = (index) => {
    this.setState({
      displayingIndex: index,
    });
  };
  onClickShowMore = () => {
    this.setState({ isShortList: !this.state.isShortList });
  };
  componentDidMount(){
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  };
   componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize)
  };
  handleResize = ()=>{
    let numberOnShortListNow; 
    if(window.innerWidth < 745 ){
      numberOnShortListNow = 7
    }else {
      numberOnShortListNow = 11
    } 
    this.setState({numberOnShortList:numberOnShortListNow})
  }

  render() {
    const { displayingIndex, isShortList, numberOnShortList } = this.state;
    const onClickShowMore = this.onClickShowMore;
    const onClickLocationType = this.onClickLocationType;

    

    return (
      <>
        {
          <div className="GRID_LOCATION_TYPE">
            <div>
              <h2 className="font-size22 leading-6 color222 font-bold text-left bg-f7 pb-c14">
                Inspiration for future getaways
              </h2>
              <div className="NAVBAR-CONTAINER     w-full relative   ">
                <div className="LEFT    absolute w-10  gradient-gray pb-c10  hidden     h-full left--24 flex pl-c13 items-center  color-gray7 ">
                  <i class="fa-solid fa-angle-left"></i>
                </div>

                <div className="NAVBAR overflow-auto border-b-1 border-gray-200 pb-c10        scrollable-element    overflow-y-hidden     ">
                  <ul className=" inline-flex  relative       font-size14 text-gray7 w-auto font-semibold ">
                    {locationTypeArr.map((item, index) => {
                      return (
                        <li
                          onClick={() => {
                            onClickLocationType(index);
                          }}
                          className={`flex pr-6 py-c7 whitespace-nowrap         relative ${
                            index === displayingIndex ? "color222     after-w-calc  after:h-c2 after:absolute bg222-after after:top-c43  " : ""
                          } ` }
                        >
                          {item.locationType}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="RIGHT       absolute w-10  gradient-gray-toleft pb-c10      flex justify-center items-center   top-0 h-full right--24 color-gray7  ">
                  <i class="fa-solid fa-angle-right"></i>
                </div>
              </div>

              <ul ref={this.myRef} className="ITEM-CONTAINER      grid grid-cols-2 9:grid-cols-3 11:grid-cols-6 gap-x-2 gap-y-6 pt-8 border-b-1 border-gray-200 pb-12">
                {isShortList === true
                  ? locationTypeArr[displayingIndex].locationList
                      .slice(0,numberOnShortList )
                      .map((item, index) => {
                        return (
                          <li className="text-left font-size14 ">
                            <p className="color222  font-semibold leading-unknown">
                              {item.location}
                            </p>
                            <p className="text-gray-600 font-light">
                              {item.homeType}
                            </p>
                          </li>
                        );
                      })
                  : locationTypeArr[displayingIndex].locationList.map(
                      (item, index) => {
                        return (
                          <li className="text-left font-size14 ">
                            <p className="color222  font-semibold leading-unknown">
                              {item.location}
                            </p>
                            <p className="text-gray-600 font-light">
                              {item.homeType}
                            </p>
                          </li>
                        );
                      }
                    )}
                {/* button SHOW MORE */}
                {isShortList === true ? (
                  <li className="text-left font-size14 ">
                    <button
                      className="color222  font-semibold leading-unknown flex gap-c4 "
                      onClick={() => {
                        onClickShowMore();
                      }}
                    >
                      <span>Show more</span>
                      <span className="mt-c2 ">
                        <i class="fa-solid fa-angle-down"></i>
                      </span>
                    </button>
                  </li>
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
        }
      </>
    );
  }
}

export default LocationGrid;

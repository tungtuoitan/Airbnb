import React, { createRef, useState } from "react";
import locationTypeArr from "../datas/location.js";
import LocationItem from "./location-item.js";
import ShowMoreBtn from "./showmore-btn.js";
import PrevBtnOnFooter from "./prev-btn-onfooter.js";
import NextBtnOnFooter from "./next-btn-onfooter.js";

class LocationGrid extends React.Component {
  constructor(props) {
    super(props);
    this.navBarRef = createRef();
    this.contentRef = createRef();
  }
  state = {
    displayingIndex: 0,
    isShortList: true,
    numberOnShortList: 0,
    isLeftArrowDisplay: false,
    isRightArrowDisplay: true,
  };
  onClickLocationType = (index) => {
    this.setState({
      displayingIndex: index,
    });
  };
  onClickShowMore = () => {
    this.setState({ isShortList: !this.state.isShortList });
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();

    this.navBarRef.current.addEventListener("scroll", () => {
      let contentWidth = this.contentRef.current.offsetWidth;
      let containerWidth = this.navBarRef.current.clientWidth;
      if (this.navBarRef.current.scrollLeft === 0) {
        this.setState({ isLeftArrowDisplay: false });
      } else {
        this.setState({ isLeftArrowDisplay: true });
      }
      if (this.navBarRef.current.scrollLeft === contentWidth - containerWidth) {
        this.setState({ isRightArrowDisplay: false });
      } else {
        this.setState({ isRightArrowDisplay: true });
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = () => {
    let numberOnShortListNow;
    if (window.innerWidth < 745) {
      numberOnShortListNow = 7;
    } else {
      numberOnShortListNow = 11;
    }
    this.setState({ numberOnShortList: numberOnShortListNow });
  };

  render() {
    const {
      displayingIndex,
      isShortList,
      numberOnShortList,
      isLeftArrowDisplay,
      isRightArrowDisplay,
    } = this.state;
    const onClickShowMore = this.onClickShowMore;
    const onClickLocationType = this.onClickLocationType;

    return (
      <>
        {
          <div className="INSPIRATION_FOR_FUTURE_GETAWAYS">
            <div>
              <h2 className="font-size22 leading-6 color222 font-bold text-left bg-f7 pb-c14">
                Inspiration for future getaways
              </h2>
              <div className="NAVBAR-CONTAINER     w-full relative  9: ">
                <PrevBtnOnFooter isLeftArrowDisplay={isLeftArrowDisplay} />

                <div
                  id="navbar"
                  ref={this.navBarRef}
                  className="NAVBAR        overflow-auto border-b-1 border-gray-200 pb-c10        scrollable-element    overflow-y-hidden  9:flex    "
                >
                  <ul
                    ref={this.contentRef}
                    className=" inline-flex  relative       font-size14 text-gray7 w-auto font-semibold 9:flex-start "
                  >
                    {locationTypeArr.map((item, index) => {
                      return (
                        <li
                          onClick={() => {
                            onClickLocationType(index);
                          }}
                          className={`flex pr-6 py-c7 whitespace-nowrap         relative ${
                            index === displayingIndex
                              ? "color222     after-w-calc  after:h-c2 after:absolute bg222-after after:top-c43  "
                              : ""
                          } `}
                        >
                          {item.locationType}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <NextBtnOnFooter isRightArrowDisplay={isRightArrowDisplay} />
              </div>

              <ul className="ITEMS-GRID      grid grid-cols-2 9:grid-cols-3 11:grid-cols-6 gap-x-2 gap-y-6 pt-8 border-b-1 border-gray-200 pb-12">
                {isShortList === true
                  ? locationTypeArr[displayingIndex].locationList
                      .slice(0, numberOnShortList)
                      .map((item, index) => {
                        return <LocationItem item={item} />;
                      })
                  : locationTypeArr[displayingIndex].locationList.map(
                      (item, index) => {
                        return <LocationItem item={item} />;
                      }
                    )}
                {/* button SHOW MORE */}
                {isShortList === true ? (
                  <ShowMoreBtn onClickShowMore={onClickShowMore} />
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

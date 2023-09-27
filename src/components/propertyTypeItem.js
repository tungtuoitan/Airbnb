import { setPropertyType } from "../reducer/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import PropertyTypeItemUI from "./propertyTypeItemUI";

export default function PropertyTypeItem({ icon, name }) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const currentPropertyType = useSelector(
    (s) => s.filterSlice.filter.propertyType
  );
  const dispatch = useDispatch();

  const handleOnClick = () => {
    if (name === currentPropertyType) {
      dispatch(setPropertyType(""));
    } else {
      dispatch(setPropertyType(name));
    }
  };
  const handleOnMouseDown = () => {
    setIsMouseDown(true);
  };
  const handleOnMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <PropertyTypeItemUI
      handleOnMouseDown={handleOnMouseDown}
      handleOnMouseUp={handleOnMouseUp}
      handleOnClick={handleOnClick}
      isMouseDown={isMouseDown}
      icon={icon}
      name={name}
    />
  );
}

import CheckContainer from "./checkContainer";
import TextIDont from "./textIDont";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsCheckedReceive } from "../reducer/loginSlice";
import { useEffect } from "react";

export default function IsReceiveLabel() {
 
  return (
    <label className="c-template grid gap-c14 cursor-pointer   ">
      <CheckContainer />
      <TextIDont />
    </label>
  );
}

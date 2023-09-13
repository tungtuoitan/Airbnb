import SuperHostIcon from "./superHostIcon";
import { useGetCurrentHome } from "../hooks/useGetCurrentHome";

export default function AvtA (){
  const owner = useGetCurrentHome().owner
    return(
        <div className="  relative w-12 h-12 7:w-c56 7:h-c56  " >
              <div className=" w-12 h-12 7:w-c56 7:h-c56 rounded-full object-cover overflow-hidden ">
                <img src={owner.avatar}></img>
              </div>
              <SuperHostIcon/>
            </div>
    )
}
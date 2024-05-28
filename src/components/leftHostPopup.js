import TickShieldIcon from "./tickShieldIcon";
import { useGetCurrentHome } from "../hooks/useGetCurrentHome";


export default function LeftHostPopUp(){
    const owner = useGetCurrentHome().owner
    return(
        <div className="flex   flex-col w-c106 mr-10">
          <div className="relative">
            <div className="w-8 h-8 absolute top-16 left-c75 flex 
            justify-center items-center color-pink-main border-1 rounded-full">
              <TickShieldIcon/>
            </div>
            <div className="square-104 rounded-full overflow-hidden  ">
              <img className="max" src={owner.avatar.replace("Airbnb/","")} />
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-size22 color222 font-bold mt-2">
              {owner.name}
            </h3>
            <p className="font-size14 color222 font-semibold mt--5">
              {owner.account.level}
            </p>
          </div>
        </div>
    )
}
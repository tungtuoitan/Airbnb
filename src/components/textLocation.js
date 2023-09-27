import { current } from "@reduxjs/toolkit"
import { useGetCurrentHome } from "../hooks/useGetCurrentHome"


export default function TextLocation(){
  const currentHome = useGetCurrentHome()
    return(
        <div className="text-left">
        <a  className="7:font-semibold ">
          {currentHome.address}
        </a>
      </div>
    )
}
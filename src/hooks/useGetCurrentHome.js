import { useSelector } from "react-redux"
import useCreateList from "./useCreateList"

export const  useGetCurrentHome = ()=>{
    const currentHomeId = useSelector(s=>s.roomSlice.currentHomeId)
    const currentHomeList = useCreateList().currentHomeList
    return currentHomeList[currentHomeId]
}
import { useSelector } from "react-redux"

export const  useGetCurrentHome = ()=>{
    const currentHomeId = useSelector(s=>s.roomSlice.currentHomeId)
    const currentHomeList = useSelector((s) => s.bodySlice.currentList)
    return currentHomeList[currentHomeId]
}
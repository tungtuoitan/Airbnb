import PhotoAlbum from "react-photo-album";
import { useDispatch, useSelector } from "react-redux";
import { useGetImageInfo } from "../hooks/useGetImageInfo";
import { setCurrentSliceIndexByIndex, setIsDisplay1By1 } from "../reducer/roomsSlice";

export default function Gallery() {
  const dispatch = useDispatch()
  const handleOnClick = ({index})=>{
    dispatch(setIsDisplay1By1())
    dispatch(setCurrentSliceIndexByIndex(index+1))
  }
    let photos =[]
    const currentHomeId = useSelector(s=>s.roomSlice.currentHomeId)
    const currentHomeList = useSelector((s) => s.bodySlice.currentList)
    const curHome = currentHomeList[currentHomeId]
    for(let i = 1;i< curHome.imgarr.length;i++){
        const info = useGetImageInfo(curHome.imgarr[i])
        photos.push(info)
    }
  return (
    <PhotoAlbum
      layout="columns"
      spacing={8}
      targetRowHeight={100}
      columns={2}
      photos={photos}
      onClick={handleOnClick}
      className='filter-hover'
    />
  );
}

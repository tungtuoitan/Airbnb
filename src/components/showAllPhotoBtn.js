import NineDotsIcon from "./nineDotsIcon";



export default function ShowAllPhotoBtn(){
    return(
        <div
          className="absolute right-6 bottom-6 py-c6 px-c15
         bg-gray-200 border-c1 border-solid border-gray-500 cursor-pointer
          rounded-lg flex items-center gap-2 text-sm box-shadow-u2 "
        >
          <NineDotsIcon />
          <span>Show all photos</span>
        </div>
    )
}



export default function PropertyTypeItem ({icon,name}){
    return(
        <div className="p-4 rounded-xl border-c1 border-gray-300 border-solid 
        || flex flex-col gap-2 7:gap-4   ">
            {icon}
            <span className="text-left text-black222 font-bold">{name}</span>
        </div>
    )
}
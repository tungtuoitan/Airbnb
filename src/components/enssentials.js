import CheckItem from "./checkItem";



export default function Enssentials (){
    return(
        <div>
            <p className="text-base font-bold text-black222 text-left
            || mt-c28 mb-c16   ">Enssentials</p>
            <div className="grid grid-cols-1 7:grid-cols-2">
                <CheckItem content='Wifi'/>
                <CheckItem content='Wifi'/>
                <CheckItem content='Wifi'/>
                <CheckItem content='Wifi'/>
            </div>
            <a className="text-base  text-black222 underline font-bold text-left
            || pt-c6 pb-2 flex justify-start">Show more</a>
        </div>
    )
}
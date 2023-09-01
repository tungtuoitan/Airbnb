

export default function PriceBox ({title,}){
    return(
        <div className="w-full h-c56 border-c1 border-solid border-gray-400 
      || rounded-lg px-4 py-c6">
        <p className="text-c12 text-gray-500 text-left">{title}</p>
        <div className='text-left flex gap-2 text-black222 mt-c-2'>
            <span>$</span>
            <span>50</span>
        </div>
      </div>
    )
}
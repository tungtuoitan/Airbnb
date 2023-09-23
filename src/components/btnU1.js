import {Link} from 'react-router-dom'
export default function BtnU1({name}) {
  const handleOnClick = ()=>{
    window.scrollTo(0,0)
  }
  return (
    <Link
    onClick={handleOnClick}
      to="/"
      className="flex justify-center items-center 
|| rounded-lg border-black222 border-solid border-c1 
|| font-bold text-black text-base
|| w-c160 px-c23 py-c11
|| whitespace-nowrap"
    >
      {name}
    </Link>
  );
}

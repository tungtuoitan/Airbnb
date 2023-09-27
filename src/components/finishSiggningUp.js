import Form2 from "./form2";
import {toggleIsFinishOpen} from '../reducer/loginSlice'
import HeaderPopUp from "./headerPopUp";
import {useSelector,useDispatch} from 'react-redux'

export default function FinishSigningUp() {
  

  const isFinishOpen = useSelector(state=>state.loginSlice.isFinishOpen  )
  const usedispatch = useDispatch()
  const handleOnClick = ()=>{
    usedispatch(toggleIsFinishOpen())

  }
  const runConsole = ()=>{
    console.clear()
    console.log('FIRSTNAME/LASTNAME: bất kì kí tự a-z')
    console.log('BIRTHDATE_________: 9/9/9999')
    console.log('EMAIL_____________: abc@gmail.com')


  }

  return (
    <div className={` || w-full h-full  ||  bg-black/50 || fixed  zmax3 ||
     justify-center items-center || 
    ${isFinishOpen ? 'flex':'hidden'}`}>
      {isFinishOpen ? runConsole():true}
      <div
        className=" w-full 7:w-c568  || zmax3 fixed bottom-0  7:static 7 ||
      bg-white || rounded-t-2xl 7:rounded-2xl box-shadow-u7 || overflow-hidden "
      >
        <HeaderPopUp title={"Finish signing up"} handleOnClick={handleOnClick} />
        <Form2 />
      </div>
    </div>
  );
}

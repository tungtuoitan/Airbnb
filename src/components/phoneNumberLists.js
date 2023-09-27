import fakeData from '../datas/fake-data' 
import {useSelector,useDispatch} from 'react-redux'
import { setValueSelected } from '../reducer/loginSlice'

export default function PhoneNumberLists() {
  const valueSelected = useSelector(state=>state.loginSlice.valueSelected)
  const dispatch = useDispatch()
  const handleOnChange = (e)=>{
    dispatch(setValueSelected(e.target.value))
  }
  return (
    <select className="absolute left-0 top-0  || w-full h-c56 || opacity-0 cursor-pointer "
    value = {valueSelected}
    onChange={(e)=>{handleOnChange(e)}}
    >
      {fakeData.threePhoneNumber.map((item,index)=>{
     return (<option key={index} value={`${item[0]} (${item[1]})`}>{`${item[0]} (${item[1]})`}</option>)

      })}
   
    </select>
  );
}

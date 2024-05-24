import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { setLogInFrom } from '../reducer/accSlice';

export default function LogInBtn() {
  const dispatch = useDispatch()
  const path = window.location.pathname
  const isLogged = useSelector(state=>state.accSlice.isLogged)
  const handleOnClick = ()=>{
    dispatch(setLogInFrom('/'))
  }
  return (
    <Link className=" flex items-center flex-col gap-c3  mt-c12 mb-2 w-1/5" 
    to={isLogged ? '/account-settings':'/sign-up'}
    onClick={handleOnClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        className={`icon-log-in  
        ${path==='/sign-up' || path==='/account-settings' ? 'fill-main':'fill-current opacity-60'}`}
      >
        <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 8a5 5 0 0 0-2 9.58v2.1l-.15.03a11 11 0 0 0-6.94 4.59C9.26 27.59 12.46 29 16 29s6.74-1.41 9.09-3.7a11 11 0 0 0-6.93-4.59l-.16-.03v-2.1a5 5 0 0 0 3-4.35V14a5 5 0 0 0-5-5zm0-6A13 13 0 0 0 5.56 23.75a13.02 13.02 0 0 1 5.54-4.3l.35-.13-.02-.02A7 7 0 0 1 9 14.27L9 14a7 7 0 1 1 11.78 5.12l-.23.2.04.02c2.33.88 4.36 2.41 5.85 4.4A13 13 0 0 0 16 3z"></path>
      </svg>
      <span className={`${path==='/sign-up' || path==='/account-settings' ? 'text-black222 font-semibold':''}`}>{isLogged ? 'Profile':'Log in'}</span>
    </Link>
  );
}

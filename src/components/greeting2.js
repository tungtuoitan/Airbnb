import { useDispatch, useSelector } from "react-redux";

export default function GreetingText2() {
  const firstName = useSelector((s) => s.loginSlice.userInfo.firstName);
  const isLogged = useSelector((s) => s.accSlice.isLogged);

  return (
    <>
     
      <div
        className=" absolute right-c100 whitespace-nowrap
       text-sm text-gray-500 font-bold"
      >
        {isLogged ? `Welcome to Airbnb, ${firstName}!` : "Welcome to Airbnb!"}
      </div>
    </>
  );
}

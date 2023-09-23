import { useDispatch, useSelector } from "react-redux";
export default function GreetingText() {
  const firstName = useSelector((s) => s.loginSlice.userInfo.firstName);
  const isLogged = useSelector((s) => s.accSlice.isLogged);

  return (
    <>
      <div
        className=" absolute right-c100 whitespace-nowrap hidden 9:block 11:hidden
         text-sm text-gray-500 font-bold"
      >
        "Welcome to Airbnb!"
      </div>
      <div
        className=" absolute right-c100 whitespace-nowrap hidden 11:block
       text-sm text-gray-500 font-bold"
      >
        {isLogged ? `Welcome to Airbnb, ${firstName}!` : "Welcome to Airbnb!"}
      </div>
    </>
  );
}

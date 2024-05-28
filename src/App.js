import { useSelector } from "react-redux";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import RoomPage from "./pages/roomspage";
import Login from "./pages/login";
import Wishlists from "./pages/wishlists";
import NoMatch from "./components/noMatch";
import Trips from "./pages/trips";
import Inbox from "./pages/inbox";
import AccountSettings from "./pages/accountSettings";
import SignUp from "./pages/signUp";

function App() {
  const isConfirmOpen = useSelector((state) => state.loginSlice.isConfirmOpen);
  const isFinishOpen = useSelector((state) => state.loginSlice.isFinishOpen);

  return (
    <div
      className={`App   ${
        isConfirmOpen || isFinishOpen ? "overflow-hidden" : ""
      }`}
    >
      <Routes>
        <Route path="/Airbnb/" index element={<HomePage />} />
        <Route path="/Airbnb/sign-up" element={<SignUp />} />
        <Route path="/Airbnb/login" element={<Login />} />

        <Route path="/Airbnb/trips" element={<Trips />} />
        <Route path="/Airbnb/wishlists" element={<Wishlists />} />
        <Route path="/Airbnb/inbox" element={<Inbox />} />
        <Route path="/Airbnb/account-settings" element={<AccountSettings />} />

        <Route path="/Airbnb/rooms" element={<RoomPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;

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
        <Route path="/" index element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      <Route path="/trips" element={<Trips />} />
        <Route path="/wishlists" element={<Wishlists />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/account-settings" element={<AccountSettings />} />

        <Route path="/rooms" element={<RoomPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;

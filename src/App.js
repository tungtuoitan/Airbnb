import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import RoomPage from "./pages/roomspage";
import Login from "./pages/login";
import Wishlists from "./components/wishlists";
import WishPage from "./components/wishPage";
import NoMatch from "./components/noMatch";
import Confirm from "./components/confirm";
import { useSelector } from "react-redux";
import Trips from "./components/trips";

function App() {
  const isConfirmOpen = useSelector((state) => state.loginSlice.isConfirmOpen);
  const isFinishOpen = useSelector((state) => state.loginSlice.isFinishOpen);

  return (
    <div
      className={`App ${
        isConfirmOpen || isFinishOpen ? "overflow-hidden" : ""
      }`}
    >
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/wishlists" element={<Wishlists />} />
        <Route path="/inbox" element={<Wishlists />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path='/rooms' element={<RoomPage/>}/> */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;

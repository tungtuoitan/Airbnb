import { useDispatch, useSelector } from "react-redux";
import { useGetCurrentHome } from "../hooks/useGetCurrentHome";

export default function RoomTitle() {
  const currentHome = useGetCurrentHome();
  return (
    <h1 className="font-size26 font-semibold color222 text-left leading30">
      The {currentHome.name}
    </h1>
  );
}

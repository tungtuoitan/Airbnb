import { useGetCurrentHome } from "../hooks/useGetCurrentHome";
export default function TextHost() {
  const currentHome = useGetCurrentHome()
  return (
    <div className=" text-right flex justify-end">
      <span className="mr-c6">
        <i className="fa-solid fa-medal fa-xs"></i>
      </span>
      <span className=" 7:font-semibold ">{currentHome.owner.account.level}</span>
    </div>
  );
}

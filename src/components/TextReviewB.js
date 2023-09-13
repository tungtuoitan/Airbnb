import { useGetCurrentHome } from "../hooks/useGetCurrentHome";

export default function TextReviewB() {
  const currentHome = useGetCurrentHome()
  return (
    <a className=" text-sm text-gray-500 mt-c2">
      <span className="mr-c2 font-light">0{currentHome.owner.account.reviews}</span>
      <span className="font-light  ">reviews</span>
    </a>
  );
}

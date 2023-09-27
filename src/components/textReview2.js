


import { useGetCurrentHome } from "../hooks/useGetCurrentHome";

export default function TextReview2() {
  const currentHome = useGetCurrentHome()
  return (
    <a className="">
      <span className="mr-c2 7:font-semibold">{currentHome.owner.account.reviews}</span>
      <span className="7:font-semibold text-gray-400">reviews</span>
    </a>
  );
}

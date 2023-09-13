import DotB from "./dotB";
import { useGetCurrentHome } from "../hooks/useGetCurrentHome";
export default function TextAboutBeds() {
  const currentHome = useGetCurrentHome();
  return (
    <p className="w-full flex text-base text-black222 ">
      <span className="whitespace-nowrap">{currentHome.beds} beds</span>
      <DotB />
      <span className="whitespace-nowrap">{currentHome.bedrooms} bedrooms</span>
      <DotB />
      <span className="whitespace-nowrap hidden 5:block">{currentHome.bathrooms} bathrooms</span>
    </p>
  );
}

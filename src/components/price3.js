
import { useGetCurrentHome } from "../hooks/useGetCurrentHome";
export default function Price3() {
  const priceOneNight = useGetCurrentHome().priceOneNight
  return (
    <p className="text-black222 text-left">
      <span className="text-sm font-semibold">${priceOneNight}</span>{" "}
      <span className="text-light text-sm">/ night</span>
    </p>
  );
}

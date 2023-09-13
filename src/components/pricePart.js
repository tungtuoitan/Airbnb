
import { useGetCurrentHome } from "../hooks/useGetCurrentHome";
export default function Price() {
  const priceOneNight = useGetCurrentHome().priceOneNight
  return (
    <p className="text-black222 text-left">
      <span className="text-c22 font-semibold">$ {priceOneNight}</span>{" "}
      <span className="text-light text-base"> nights</span>
    </p>
  );
}

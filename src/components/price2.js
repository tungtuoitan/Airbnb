
import { useGetCurrentHome } from "../hooks/useGetCurrentHome";
export default function Price2() {
  const priceOneNight = useGetCurrentHome().priceOneNight
  return (
    <p className="text-black222 text-left whitespace-nowrap ">
      <span className="text-base font-semibold">$ {priceOneNight}</span>{" "}
      <span className="text-light text-sm"> night</span>
    </p>
  );
}

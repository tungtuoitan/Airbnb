import ItemOnHost from "./itemOnHost";
import { hostInfoArr } from "../datas/hostInfoArr";
export default function HostInfo() {
  return (
    <div className="hidden 5:flex text-left   flex-col flex-center
      ">
      {hostInfoArr.map((item, index) => {
        return <ItemOnHost key={index} icon={item[0]} title={item[1]} />;
      })}
    </div>
  );
}

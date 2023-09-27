import TitleOnRoom from "./titleOnRoom";
import { TextAboutArr } from "./TextAboutArr";
import TextA from "./textA";


export default function DescBody() {
  
  return (
    <div  className=" px-6 pt-6 pb-10 text-left text-base text-black222 ">
      <TitleOnRoom title="About this place" />
      <p className="pt-6 ">{TextAboutArr[0][0]}</p>
      <p className="font-bold pt-6">The space</p>
      <p className="pt-c4 ">{TextAboutArr[0][1]}</p>
      <p className="font-bold pt-6">Other things to note</p>
      <p className="pt-c4 ">{TextAboutArr[0][2]}</p>
    </div>
  );
}

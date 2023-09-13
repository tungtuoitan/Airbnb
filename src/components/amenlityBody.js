import TitleOnRoom from "./titleOnRoom";
import ItemAGroup from "./itemAGroup";
import { amenlities } from "../datas/amenlityArr";
import GroupB from "./groupB";

export default function AmenlityBody() {
  return (
    <div className="px-6 pt-6 pb-10 text-left text-base text-black222">
      <TitleOnRoom title="What this place offers" />
      <GroupB title='Scenic views' arr={amenlities.scenicViews}/>
      <GroupB title='Bathroom' arr={amenlities.bathRoom}/>
      <GroupB title='Bedroom and Laundry' arr={amenlities.bedroomAndLaundry}/>
      <GroupB title='Entertainment' arr={amenlities.entertainment}/>
      <GroupB title='Family' arr={amenlities.family}/>
      <GroupB title='Heating and Cooling' arr={amenlities.heatingAndCooling}/>
      <GroupB title='Internet and Office' arr={amenlities.internetAndOffice}/>
      <GroupB title='Kitchen and Dining' arr={amenlities.kitchenAndDining}/>
      <GroupB title='Outdoor' arr={amenlities.outdoor}/>



      
    </div>
  );
}

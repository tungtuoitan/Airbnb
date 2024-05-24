import { amenlities } from "../datas/amenlityArr";
import AmenlityItem from "./amenlityItem";



export default function AmenlitiesGroup(){
    return(
        <div className="mb-4 mt-c20 grid 5:grid-cols-2">
          <AmenlityItem item={amenlities.scenicViews[0]} />
          <AmenlityItem item={amenlities.scenicViews[1]} />
          <AmenlityItem item={amenlities.bathRoom[0]} />
          <AmenlityItem item={amenlities.bathRoom[1]} />
          <AmenlityItem item={amenlities.bathRoom[2]} />
          <AmenlityItem item={amenlities.bedroomAndLaundry[0]} />
          <AmenlityItem item={amenlities.bedroomAndLaundry[1]} />
        </div>
    )
}
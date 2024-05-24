import FbIcon from "./fbIcon";
import { openNewTab } from "../function/openNewTab";
import {useSelector} from 'react-redux'
export default function FbBtn() {
  
  return (
    <a
      className="border-c1 border-solid border-black222 || w-full h-12 || relative ||
     text-c14 font-semibold || rounded-lg || flex justify-center items-center
     || "
      href="https://www.facebook.com/login.php?skip_api_login=1&api_key=138566025676&kid_directed_site=0&app_id=138566025676&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fdisplay%3Dpopup%26response_type%3Dcode%26client_id%3D138566025676%26state%3DCAQFKKQDAQPZTGVCHZWICQJIYCPTXK%26scope%3Demail%2Buser_birthday%26redirect_uri%3Dhttps%253A%252F%252Fwww.airbnb.com%252Foauth_callback%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D33d62313-dfec-4eab-ba3b-8a5a9cef97a6%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.airbnb.com%2Foauth_callback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DCAQFKKQDAQPZTGVCHZWICQJIYCPTXK%23_%3D_&display=popup&locale=en_GB&pl_dbl=0"
      target="_blank"
      onClick={(e) => {
        openNewTab(e);
      }}
    >
      <span className="absolute left-4 5:left-6  rounded-sm overflow-hidden">

        <FbIcon />
      </span>
      Continue with Facebook
    </a>
  );
}

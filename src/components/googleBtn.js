import { openNewTab } from "../function/openNewTab";
import GoolgeIcon from "./googleIcon";
export default function GoogleBtn() {
  return (
    <a className="border-c1 border-solid border-black222 || w-full h-12 ||
     relative || text-c14 font-semibold || rounded-lg 
     || flex justify-center items-center"
     href="https://www.airbnb.com/oauth/popup_form?url=%2Foauth_connect%3Ffrom%3Dgoogle_login%26service%3Dgoogle%26oauth_popup%3Dtrue%26raven_session_id%3Daf2caaae-82db-4cc0-9336-215ce49140f3"
      target="_blank"
      onClick={(e) => {
        openNewTab(e);
      }}
     >
      
      <span className="absolute left-4 5:left-6">
        <GoolgeIcon />
      </span>
      Continue with Google
    </a>
  );
}

import ReportIcon from "./ReportIcon";
import AirBnbIcon from "./airIcon";
import GetHelpIcon from "./getHelpIcon";
import { ItemProfile } from "./personalInfo";
import QuestionIcon from "./questionIcon";

export default function Support() {
  return (
    <div className="pb-4 || border-b-c1 border-solid border-gray-300">
      <div className="text-c22 font-bold text-black222 text-left || my-6 pt-4 ">
        Support
      </div>
      <ItemProfile
        title="Visit the Help Center"
        icon={<QuestionIcon />}
        href="https://www.airbnb.com/help/"
      />
      <ItemProfile
        title="Get help with a safty issue"
        icon={<GetHelpIcon />}
        href="https://www.airbnb.com/guest/inbox/1588092830"
      />
      <ItemProfile
        title="Report a neighborhood concern"
        icon={<ReportIcon />}
        href="https://www.airbnb.com/help/article/3290"
      />
      <ItemProfile
        title="How Airbnb works"
        icon={<AirBnbIcon />}
        href="https://www.airbnb.com/e/howairbnbworks"
      />
    </div>
  );
}

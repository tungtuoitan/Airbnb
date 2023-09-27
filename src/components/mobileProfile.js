import Account from "./account";
import AccountIcon from "./accountIcon";
import AirbnbCard from "./airbnbCard";
import PersonalIcon from "./personalIcon";
import { ItemProfile, PersonalInfo } from "./personalInfo";
import ProfileFooter from "./profileFooter";
import ProfileHeader from "./profileHeader";
import ProfileTitle from "./profileTitle";
import Support from "./support";
import YourPlace from "./yourplace";

export default function MobileProfile() {
  return (
    <div className="CONTAINER || px-6 7:hidden">
      <ProfileTitle />
      <ProfileHeader />
      <YourPlace />
      <Support />
      <ProfileFooter/>

    </div>
  );
}

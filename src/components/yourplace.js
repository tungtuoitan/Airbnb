import Account from "./account";
import AccountIcon from "./accountIcon";
import AirbnbCard from "./airbnbCard";
import PersonalIcon from "./personalIcon";
import { ItemProfile, PersonalInfo } from "./personalInfo";

export default function YourPlace() {
  return (
    <div>
      <AirbnbCard />
      <div className="py-4 || border-b-c1 border-solid border-gray-300">
        <ItemProfile title="Personal info" icon={<PersonalIcon />} />
        <ItemProfile title="Account" icon={<AccountIcon />} />
      </div>
    </div>
  );
}

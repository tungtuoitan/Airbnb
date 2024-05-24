import { openNewTab } from "../function/openNewTab";
import MailIcon from "./mailIcon";
export default function EmailBtn() {
  return (
    <a
      className="border-c1 border-solid border-black222 || w-full h-12 || relative ||
    text-c14 font-semibold || rounded-lg || flex justify-center items-center"
      href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser"
      target="_blank"
      onClick={(e) => {
        openNewTab(e);
      }}
    >
      <span className="absolute left-4 5:left-6">
        <MailIcon />
      </span>
      Continue with email
    </a>
  );
}

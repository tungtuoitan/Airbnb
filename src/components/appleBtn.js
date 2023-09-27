import AppleIcon from "./appleIcon";
import { openNewTab } from "../function/openNewTab";
export default function AppleBtn() {
  return (
    <a
      className="border-c1 border-solid border-black222 || w-full h-12 || relative ||
    text-c14 font-semibold || rounded-lg || flex justify-center items-center"
      href="https://appleid.apple.com/auth/authorize?response_type=code&response_mode=form_post&client_id=com.airbnb.web&state=WZRWECMJZAVVEFBKXTGFHANRNZNYLE&scope=name+email&redirect_uri=https%3A%2F%2Fwww.airbnb.com%2Foauth_callback"
      target="_blank"
      onClick={(e) => {
        openNewTab(e);
      }}
    >
      <span
        className="absolute left-4 5:left-6"
      >
        <AppleIcon />
      </span>
      Continue with Apple
    </a>
  );
}

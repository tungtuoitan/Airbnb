import AppleBtn from "./appleBtn";
import EmailBtn from "./emailBtn";
import FbBtn from "./fbBtn";
import GoogleBtn from "./googleBtn";

export default function FourBtnsContainer() {
  return (
    <div className="BUTTONs    grid gap-4 py-4">
      <FbBtn />
      <GoogleBtn />
      <AppleBtn />
      <EmailBtn />
    </div>
  );
}

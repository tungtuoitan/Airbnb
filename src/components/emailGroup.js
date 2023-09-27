import EmailInput from "./emailInput";
import ItemInFinishForm from "./itemInFinishForm";

export function EmailGroup() {
  return (
    <div>
      <div className="w-full mt-6 cursor-pointer ">
        <EmailInput/>
      </div>
      <p className="text-c12 text-gray-500 text-left leading-c16 -- mt-c6 ">
        We'll email you trip confirmations and receipts.
      </p>
    </div>
  );
}

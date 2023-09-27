import BirthdateInput from "./birthdateInput";
export default function BirthGroup() {
  return (
    <div>
      <div className="w-full mt-6 cursor-pointer  ">
        <BirthdateInput />
      </div>
      <p className="text-c12 text-gray-500 text-left leading-c16 -- mt-c6 ">
        To sign up, you need to be at least 18. Your birthday won’t be shared
        with other people who use Airbnb.
      </p>
    </div>
  );
}

import BlueText from "./blueText";

export default function AgreeText() {
  return (
    <div className="text-c12 text-black222 text-left font-medium leading-c16 ||
     mt-c20 ">
      By selecting <b>Agree and continue</b>, I agree to Airbnb’s{" "}
      {<BlueText content={'Terms of Service'}/>}, {<BlueText content={'Payments Terms of Service'}/>}, and{" "}
      <BlueText content={'Nondiscrimination Policy'}/> and acknowledge the {<BlueText content={'Privacy Policy.'}/>}
    </div>
  );
}

import ProtectIcon from "./protectIcon";

export default function RightInfo() {
  return (
    <div className="text-left pt-10">
      <div className="mb-c10">National Tourism Registry number: 109870</div>
      <div className="mb-c10">Response rate: 100%</div>
      <div className="mb-c10">Response time: within an hour</div>
      <div className="mb-c10 flex gap-4 pt-2 justify-start items-center text-c12 ">
        <div className="w-6 h-6">
          <ProtectIcon />
        </div>
        <div>
          To protect your payment, never transfer money or communicate outside
          of the Airbnb website or app.
        </div>
      </div>
    </div>
  );
}

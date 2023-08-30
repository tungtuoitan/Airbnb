import FooterSection from "./footerSection";

function MiddleFooter() {
  return (
    <div className="MIDDLE grid grid-cols-1 9:grid-cols-3 gap-x-c10">
      <FooterSection type={"support"} />
      <FooterSection type={"hosting"} />
      <FooterSection type={"airbnb"} />
    </div>
  );
}

export default MiddleFooter;

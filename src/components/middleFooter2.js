import FooterSection2 from "./footSection2";

function MiddleFooter2() {
  return (
    <div className="MIDDLE   11:grid 11:grid-cols-4 ">
      <FooterSection2 type={"support"} />
      <FooterSection2 type={"community"} />
      <FooterSection2 type={"hosting"} />
      <FooterSection2 type={"airbnb"} />
    </div>
  );
}

export default MiddleFooter2;

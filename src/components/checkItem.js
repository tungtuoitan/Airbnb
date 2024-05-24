import CheckContainer2 from "./checkContainer2";
import CheckContent from "./checkContent";

export default function CheckItem({ content, index,type }) {

  return (
      <label className="c-template2 grid gap-c14 cursor-pointer || py-c10   ">
        <CheckContainer2 index={index} type={type} />
        <CheckContent content={content}/>
      </label>
  );
}

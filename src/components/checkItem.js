import CheckContainer from "./checkContainer";

export default function CheckItem({ content }) {
  return (
    <label className="c-template grid gap-c14 cursor-pointer || py-c10   ">
      <CheckContainer />
      <div className="flex items-center pb-c2 justify-start 
      || text-base text-black222 || pb-c2">
        {content}
      </div>
    </label>
  );
}

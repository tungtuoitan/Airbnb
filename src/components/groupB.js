import ItemAGroup from "./itemAGroup";

export default function GroupB({title,arr}) {
  return (
    <div>
      <p className="font-bold pt-6">{title}</p>
      <ItemAGroup arr={arr} />
    </div>
  );
}

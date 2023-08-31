import ArrowRightBtn from "./arrowRightIcon";
import PersonalIcon from "./personalIcon";

export function ItemProfile({ title, icon,href }) {
  return (
    <a className="flex justify-between items-center || py-4"
    href={href} target='_blank'>
      <div className="flex gap-4 items-center justify-start">
        {icon}

        <span className="text-base text-black222 text-left">{title}</span>
      </div>
      <ArrowRightBtn />
    </a>
  );
}

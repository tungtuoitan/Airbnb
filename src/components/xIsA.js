import { useGetCurrentHome } from "../hooks/useGetCurrentHome";

export default function XIsA() {
  const owner = useGetCurrentHome().owner;
  return (
    <div className="mb-4">
      <div className="text-left">
        <p className="text-base font-bold text-black222 mb-2 ">
          {owner.name} is a {owner.account.level}
        </p>
        <p className="text-base  ">
          {owner.account.level === "Host"
            ? "Hosts are new in Airbnb, they have a lot of new things for you."
            : "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests."}
        </p>
      </div>
    </div>
  );
}

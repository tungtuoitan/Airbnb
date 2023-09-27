export default function ItemOnHost({ icon, title }) {
  return (
    <div className="flex gap-2 h-full items-center ">
      <div className="w-6 h-6 flex justify-center items-center">{icon}</div>
      <span className="text-c12">{title}</span>
    </div>
  );
}

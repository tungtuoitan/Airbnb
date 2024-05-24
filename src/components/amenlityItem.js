export default function AmenlityItem({item}) {
  return (
    <div className="flex items-center justify-start gap-4 mb-4 color222
    ">
      {item[0]}
      <span>{item[1]}</span>
    </div>
  );
}

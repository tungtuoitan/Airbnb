
export default function SmallPanel ({content,value,handleOnClick}) {
  
  return (
    <div className="flex justify-between bg-white box-shadow-u4 
    w-full px-c20 py-c16 rounded-2xl"
    onClick={handleOnClick}>
      <span className="text-sm text-bold color-gray7">{content}</span>
      <span className="text-sm manrope-700 color222">{value}</span>
    </div>
  );
}

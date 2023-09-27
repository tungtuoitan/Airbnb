export default function ItemA({item}) {
    return (
      <div className="flex items-center justify-start gap-4 mb-4 color222 
      border-b-1 border-solid border-gray-200 pb-4
      ">
        {item[0]}
        <span>{item[1]}</span>
      </div>
    );
  }
  
import titleAndLink from "../datas/in-footer";

export default function FooterSection2({ type }) {
  const handleOnClick = () => {
    alert("Xin lỗi, tính năng này đang được bảo chì, vui lòng thử lại sau!");
  };
  return (
    <section className="text-left border-b-c1 border-solid border-lgrayd py-6  ">
      <h3 className="font-size14 font-semibold color222 mb-c13">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </h3>
      <ul className="grid gap-y-c12 9:grid-cols-3  11:block">
        {titleAndLink[type].map((item, index) => {
          return (
            <li
              className="font-size14 color222 text-left cursor-pointer "
              onClick={handleOnClick}
              key={index}
            >
              <a>{item[0]} </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

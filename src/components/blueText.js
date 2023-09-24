export default function BlueText({ content }) {
  const handleOnClick = () => {
    alert("Xin lỗi, tính năng này đang được bảo chì, vui lòng thử lại sau!");
  };
  return (
    <a className="text-blue-700 underline text-extrabold || cursor-pointer"
    onClick={handleOnClick}>
      {content}
    </a>
  );
}

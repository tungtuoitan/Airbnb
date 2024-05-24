import MenuItemUI from "./menuItemUI";

export default function MenuItem({ content }) {
  const path =
    content === "Sign up"
      ? "/sign-up"
      : content === "Log in"
      ? "/login"
      : "https://www.airbnb.com/help";
  const target = content === "Help Center" ? "_blank" : "";
  return (
    <MenuItemUI
      content={content}
      path={path}
      target={target}
    />
  );
}

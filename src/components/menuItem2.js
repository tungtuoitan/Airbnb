import MenuItemUI2 from "./menuItemUI2";
export default function MenuItem2({ content }) {
  const path =
    content === "Messages"
      ? "/inbox"
      : content === "Trips"
      ? "/trips"
      : content === 'Wishlists' 
      ? '/wishlists'
      : content ==='Account'
      ? '/account-settings'
      : content ==='Help Center'
      ? 'https://www.airbnb.com/help?audience=guest'
      : '/'
      
  const target = content === "Help Center" ? "_blank" : "";
  return (
    <MenuItemUI2
      content={content}
      path={path}
      target={target}
    />
  );
}



export const openNewTab = (event) => {
    event.preventDefault();
    const url = event.target.href;
    window.open(url, "_blank", `width=${"400px"}, height=${"400px"}`);
  };
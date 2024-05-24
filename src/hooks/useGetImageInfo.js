import React, { useEffect, useState } from "react";

export const useGetImageInfo = (imagePath) => {
  const [imageWidth, setImageWidth] = useState(null);
  const [imageHeight, setImageHeight] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = imagePath;
    image.onload = () => {
      setImageWidth(image.width);
      setImageHeight(image.height);
    };
  }, [imagePath]);

  return { src: imagePath, width: imageWidth, height: imageHeight };
};

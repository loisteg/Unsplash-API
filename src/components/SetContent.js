import { useParams } from "react-router-dom";
import { useEffect } from "react";
import UnsplashAPIService from "../services/UnsplashAPIService";

import { useDispatch, useSelector } from "react-redux";
import { imagesFetching } from "../actions";

const SetContent = ({ Component, dataType }) => {
  const { id } = useParams();

  const images = useSelector((state) => state.images);
  const clickedImageNow = useSelector((state) => state.clickedImage);
  const clickedImage = localStorage.getItem("clickedImage")
    ? localStorage.getItem("clickedImage")
    : clickedImageNow;
  const dispatch = useDispatch();

  useEffect(() => {
    const { getImages } = UnsplashAPIService();

    dispatch(imagesFetching(getImages));
  }, []);

  switch (dataType) {
    case "list":
      return <Component list={images} />;
    case "image":
      if (!clickedImage) {
        const [image] = images.filter((image) => image.id === id);
        return <Component src={image.src_full} />;
      }
      return <Component src={clickedImage} />;
  }
};

export default SetContent;

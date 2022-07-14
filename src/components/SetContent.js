import { useEffect } from "react";
import UnsplashAPIService from "../services/UnsplashAPIService";

import { useDispatch, useSelector } from "react-redux";
import { imagesFetching, handlerClick } from "../actions";

const SetContent = ({ Component, dataType }) => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  const clickedImageNow = useSelector((state) => state.clickedImage);
  const clickedImage = clickedImageNow
    ? clickedImageNow
    : dispatch(handlerClick(localStorage.getItem("clickedImage")));

  useEffect(() => {
    const { getImages } = UnsplashAPIService();

    dispatch(imagesFetching(getImages));
  }, []);

  switch (dataType) {
    case "list":
      return <Component list={images} />;
    case "image":
      return <Component src={clickedImage} />;
  }
};

export default SetContent;

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import UnsplashAPIService from "../services/UnsplashAPIService";

import { useDispatch, useSelector } from "react-redux";
import { imagesFetching } from "../actions";

const SetContent = ({ Component, dataType }) => {
  const { id } = useParams();

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const { getImages } = UnsplashAPIService();

    dispatch(imagesFetching(getImages));
  }, []);

  switch (dataType) {
    case "list":
      return <Component list={data} />;
    case "image":
      const [image] = data.filter((image) => image.id === id);
      return <Component image={image} />;
  }
};

export default SetContent;

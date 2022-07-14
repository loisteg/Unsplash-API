export const imagesFetching = (request) => (dispatch) => {
  request().then((res) => {
    dispatch(imagesFetched(res));
  });
};

const imagesFetched = (data) => ({
  type: "IMAGES_FETCHED",
  payload: data,
});

export const handlerClick = (data) => (dispatch) => {
  localStorage.setItem("clickedImage", data);
  dispatch(clickedImage(data));
};

const clickedImage = (data) => {
  return { type: "CLICKED_IMAGE", payload: data };
};

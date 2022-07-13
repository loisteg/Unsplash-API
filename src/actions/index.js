export const imagesFetching = (request) => (dispatch) => {
  request().then((res) => {
    dispatch(imagesFetched(res));
  });
};

const imagesFetched = (data) => ({
  type: "IMAGES_FETCHED",
  payload: data,
});

export const clickedImage = (data) => {
  localStorage.setItem("clickedImage", data);
  return { type: "CLICKED_IMAGE", payload: data };
};

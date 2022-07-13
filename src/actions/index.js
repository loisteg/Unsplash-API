export const imagesFetching = (request) => (dispatch) => {
  request().then((res) => dispatch(imagesFetched(res)));
};

const imagesFetched = (data) => ({
  type: "IMAGES_FETCHED",
  payload: data,
});

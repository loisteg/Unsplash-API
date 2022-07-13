const reducer = (state = [], action) => {
  switch (action.type) {
    case "IMAGES_FETCHED":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;

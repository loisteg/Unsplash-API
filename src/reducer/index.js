const initialState = {
  images: [],
  clickedImage: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "IMAGES_FETCHED":
      return { ...state, images: [...state.images, ...action.payload] };
    case "CLICKED_IMAGE":
      return { ...state, clickedImage: action.payload };
    default:
      return state;
  }
};

export default reducer;

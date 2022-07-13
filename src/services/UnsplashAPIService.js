const UnsplashAPIService = () => {
  const getImages = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    ).then((res) => res.json());

    return response.map(_transformImage);
  };

  const _transformImage = (image) => {
    return {
      id: image.id,
      created: image.created_at,
      user: image.user.name,
      username: `@${image.user.username}`,
      src_full: image.urls.full,
      src_small: image.urls.small,
      user_image: image.user.profile_image.small,
    };
  };

  return {
    getImages,
  };
};

export default UnsplashAPIService;

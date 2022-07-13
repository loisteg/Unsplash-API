const SingleImage = ({ image }) => {
  return (
    <div style={{ width: "100%" }}>
      <img
        src={image.src_full}
        alt={image.username}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default SingleImage;

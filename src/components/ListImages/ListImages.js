import { Link } from "react-router-dom";

import "./ListImages.scss";

const ListImages = ({ list }) => {
  return (
    <div className="container">
      {list.map((image) => {
        return (
          <Link to={`/${image.id}`} className="card" key={image.id}>
            <div
              className="card-img"
              style={{
                background: `url(${image.src_small}) center center / cover no-repeat`,
              }}
            ></div>

            <ul className="card-information">
              {image.user}
              <li>{image.username}</li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
};

export default ListImages;

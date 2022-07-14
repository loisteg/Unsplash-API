import { Link } from "react-router-dom";
import { handlerClick } from "../../actions";
import { useDispatch } from "react-redux";

import "./ListImages.scss";

const ListImages = ({ list }) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      {list.map((image) => {
        return (
          <Link
            to={`/${image.id}`}
            className="card"
            key={image.id}
            onClick={() => dispatch(handlerClick(image.src_full))}
          >
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

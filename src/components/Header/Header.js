import { Link } from "react-router-dom";
import logoUnsplash from "../../assets/Unsplash_logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logoUnsplash} alt="Unsplash" style={{ width: "220px" }} />
      </Link>
    </header>
  );
};

export default Header;

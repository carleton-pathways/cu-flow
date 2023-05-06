import SearchBar from "../searchBar/SearchBar";
import "../header/header.css";
import logo from "../header/image.png";

const header = () => {
  return (
    <div className="headerBar">
      <img src={logo} alt="alt" />
      <SearchBar />
    </div>
  );
};

export default header;

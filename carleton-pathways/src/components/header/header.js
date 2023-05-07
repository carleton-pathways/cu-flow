import SearchBar from "../searchBar/SearchBar";
import logo from "../header/image.png";

const header = () => {
  return (
    <div class="flex">
      <img class="" src={logo} alt="alt" />
      <SearchBar />
    </div>
  );
};

export default header;

import SearchBar from "../searchBar/SearchBar";
import logo from "./image.png";

export default function Header() {
  return (
    <div class="flex">
      <div class=" border-cyan-600 border-4">
        <img src={logo} alt="alt" />
      </div>
      <SearchBar/>
    </div>
  );
};
import SearchBar from "../searchBar/SearchBar";
import Logo from "../logo/logo";

export default function Header() {
  return (
    <div class="flex m-4">
      <Logo/>
      <SearchBar/>
    </div>
  );
};
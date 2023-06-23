import SearchBar from "../searchBar/SearchBar";
import Logo from "../logo/logo";

export default function Header( {handleCoursesChange} ) {
  return (
    <div class="flex m-4">
      <Logo/>
      <SearchBar onCoursesChange = {handleCoursesChange}/>
    </div>
  );
};
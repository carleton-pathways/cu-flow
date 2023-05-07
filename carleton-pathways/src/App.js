import "./App.css";
import HomePage from "./screens/homePage/HomePage";
import Header from "./components/header/header";
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage></HomePage>
    </div>
  );
}

export default App;

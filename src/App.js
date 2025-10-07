import Menu from "./components/Menu";
import data from "./data/recipes.json";

function App() {
  return (
   <>
    <Menu recipes={data} />
   </>
  );
}

export default App;

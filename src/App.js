import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

// https://getbootstrap.com/docs/5.1/getting-started/webpack/#importing-javascript

function App() {
  const title = "Titulo de Tienda";
  const data = {
    title: title,
    amount: 4,
    greeting: "¡Saludo desde data!",
  };
  return (
    <>
      <NavBar data={data} />
      <ItemListContainer greeting={data.greeting} />
    </>
  );
}

export default App;

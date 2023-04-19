import './App.css';
import ItemListaContainer from './container/ItemListContainer';
import { NavBar } from './components/NavBar';




function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListaContainer titulo={"Los mejores libros, a los mejores precios. Bienvenid@"} />
    </div>
  );
}


export default App;

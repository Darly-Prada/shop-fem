import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css";

function App() {
  return (
    <div className="container-app">
      <BrowserRouter> 
          <NavBar/>
          <Routes>
            <Route path="/" element={ <ItemListContainer saludo={"Bienvenid@s a ShopFem"}/>} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer saludo={"Bienvenid@s a ShopFem"}/>} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer/> }/>
            <Route path="*" element={<div>Error 404 - Página no Encontrada.</div>}/>
          </Routes>
          
      </BrowserRouter>             
    </div>
  )
}
export default App;

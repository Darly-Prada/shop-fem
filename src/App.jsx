import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/checkout"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
 

function App() {
  return (
    <div className="container-app">
      <BrowserRouter> 
      <CartProvider>
        <NavBar/>

        <ToastContainer 
              position="top-center"
              theme="dark"
               
          />
          <Routes>
            <Route path="/" element={ <ItemListContainer saludo={"Bienvenid@s a ShopFem"}/>} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer saludo={"Bienvenid@s a ShopFem"}/>} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer/> }/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} /> 
            
              <Route path="*" element={<div>Error 404 - Página no Encontrada. </div>}/>

          </Routes> 
        </CartProvider>
      </BrowserRouter>             
    </div>
  )
}
export default App;

import { useContext, useState,useEffect  } from "react";
import { CartContext } from "../../context/CartContext";
import Counter from "../Contador/Counter";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; 

import "./itemdetail.css";

  const ItemDetail = ({ product }) => {
  const [mostrarCounter, setMostrarCounter] = useState(true);
  const { cart, addProduct } = useContext(CartContext);
  const addProductInCart = (counter) => {

    // validacion si producto ya existe en el carrito
    const productoExiste = cart.findIndex((item) => item.id === product.id);
    if (productoExiste !== -1) {
      const updatedCart = [...cart];  
      const producto = updatedCart[productoExiste];

      if (!producto.quantity) {
        producto.quantity = 0;
      }
      producto.quantity += counter;  
      
      addProduct(updatedCart);
      toast.success("se han agregado mas productos del mismo.");
    } else {
    // añadimos producto carrito
    const productCart = { ...product, quantity: counter };
    addProduct(productCart);
    toast.success("Producto agregado al carrito.");
    }
    setMostrarCounter(false);
    
  };

  if (!product) {
    return <div> Loading! ...</div>;
  }
  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="secondary-images"></div>
        <div className="main-image">
          <img src={product.imagen} alt="Cargando imagen..." />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.nombre}</h2>
        <p className="text-detail">{product.descripcion}</p>
        <p className="text-detail">Precio:$ {product.precio}</p>

        {mostrarCounter === true ? (
          <Counter stock={product.stock} addProductInCart={addProductInCart} />
        ) : (
          <Link to="/cart" className="btn-compra">
            {" "}
            Comprar{" "}
          </Link>
        )}
      </div>
    </div>
  );
};
export default ItemDetail;

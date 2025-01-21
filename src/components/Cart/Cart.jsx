import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cart, totalPrecio, deleteProductById, deleteCart } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h2>Upppsss...el carrito está vacio 🤦‍♀️ </h2>
        <Link to="/">Ver los Productos</Link>
      </div>
    );
  }
  return (
    <div className="cart">
      <h1 className="title-cart">Productos en el carrito</h1>
      {cart.map((productCart) => (
        <div className="item-cart" key={productCart.id}>
          <img
            className="img-item-cart"
            src={productCart.imagen}
            width={100}
            alt=""
          />
          <p className="text-item-cart">{productCart.nombre}</p>
          <p className="text-item-cart">Precio c/u: ${productCart.precio}</p>
          <p className="text-item-cart"> Cantidad: {productCart.quantity}</p>
          <p className="text-item-cart">
            {" "}
            Subtotal: ${productCart.precio * productCart.quantity}{" "}
          </p>
          <button
            onClick={() => deleteProductById(productCart.id)}
            className="btn-delete"
          >
            {" "}
            eliminar
          </button>
        </div>
      ))}

      <div className="info-cart">
        <p className="text-info-cart">Precio total: ${totalPrecio()}</p>
        <Link className="btn-check" to="/checkout">
          Seguir Comprando
        </Link>
        <button onClick={deleteCart} className="vaciar-carro">
          {" "}
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};
export default Cart;

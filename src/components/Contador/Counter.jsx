import { useEffect, useState } from "react";
import "./counter.css";

const Counter = ({ stock, addProductInCart }) => {
  const [counter, setCounter] = useState(1);

  const handleClickRemove = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleClickAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  const handleAddToCart = () => {
    if (!isNaN(counter) && counter > 0 && counter <= stock) {
      addProductInCart(counter);
    } else {
      alert("Cantidad inválida o fuera de stock.");
    }
  };
  };
  return (
    <div className="btn-counter">
      <button onClick={handleClickRemove} className="btn-count">
        -
      </button>
      <p className="btn-num">{counter}</p> {}
      <button onClick={handleClickAdd} className="btn-count">
        +
      </button>
      <button onClick={() => addProductInCart(counter)} className="btn-count">
        Agregar Producto
      </button>
    </div>
  );
};

export default Counter;

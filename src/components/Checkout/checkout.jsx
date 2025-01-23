import { useState, useContext } from "react";
import FormCheckout from "./FormCheckout";
import { CartContext } from "../../context/CartContext";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import db from "../../db/db.js";
import validateForm from "../../utils/validateForm.js";
import { toast } from "react-toastify";
import "./checkout.css";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    mobile: "",
    email: "",
    email2: "", 
  });

  const [ordenId, setOrdenId] = useState(null);

  const { cart, totalPrecio, deleteCart  } = useContext(CartContext);

  const handleChangeForm = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };
  const handleSubmitForm = async (event) => {
    event.preventDefault();

    // Verificar que los 2 correos coincidan
        if (dataForm.email !== dataForm.email2) {
          toast.warning("Los correos no coinciden. Por favor, verifique.");
          return;
        }

    const orden = {
      comprador: { ...dataForm },
      productos: [...cart],
      total: totalPrecio(),
      fecha: Timestamp.fromDate(new Date()),
    };

    // validacion datos del formulario
    const response = await validateForm(dataForm);
    if (response.status === "success") {
      await subirOrden(orden);
    } else {
      // console.log(response.message)
      toast.warning(response.message);
    }
  };
  const subirOrden = async (nuevaOrden) => {
    try {
      const ordenesRef = collection(db, "ordenes");

      const respuesta = await addDoc(ordenesRef, nuevaOrden);
      setOrdenId(respuesta.id);

            // Vaciar el carrito después de que la orden se suba exitosamente
            deleteCart();  // Llamar a la función que vacía el carrito
          } catch (error) {
            
      // console.log(error);
      toast.error(response.message);

    }
  };
  return (
    <div>
      {ordenId ? (
        <div className="orden">
          <h2>
            Su Orden subió bien!. Este es su Código para el seguimiento a su
            pedido!.
          </h2>
          <h3 className="text"> #: {ordenId}</h3>
        </div>
      ) : (
        <FormCheckout
          dataForm={dataForm}
          handleChangeForm={handleChangeForm}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default Checkout;

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
  });

  const [ordenId, setOrdenId] = useState(null);

  const { cart, totalPrecio } = useContext(CartContext);

  const handleChangeForm = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };
  const handleSubmitForm = async (event) => {
    event.preventDefault();

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
    } catch (error) {
      console.log(error);
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

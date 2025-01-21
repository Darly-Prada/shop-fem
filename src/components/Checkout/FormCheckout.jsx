const FormCheckout = ({ dataForm, handleChangeForm, handleSubmitForm }) => {
  return (
    <form onSubmit={handleSubmitForm} className="form">
  
      <label>Nombre Completo</label>
      <input
        type="text"
        value={dataForm.fullname}
        name="fullname"
        onChange={handleChangeForm}
        placeholder="Ingrese su Nombre completo"
        className="input"
      />
      <label>Celular</label>
      <input
        type="number"
        value={dataForm.mobile}
        name="mobile"
        onChange={handleChangeForm}
        placeholder="Ingrese su Número celular"
        className="input"
      />
      <label>Correo electrónico</label>
      <input
        type="email"
        value={dataForm.email}
        name="email"
        onChange={handleChangeForm}
        placeholder="Ingrese su Correo electrónico"
        className="input"
      />

      <button type="submit" className="btn-form">
        Enviar Datos
      </button>
    </form>
  );
};
export default FormCheckout;

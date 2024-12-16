
const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <div className="img-detail-container">
        <div className="secondary-img"></div>
        <div className="main-img">
          <img className="img.detail" src={product.imagen} alt="Cargando imagen..."  />
        </div>
      </div>
      <div className="text-detail-container">
        <h2 className="title-detail">{product.nombre}</h2>
        <p className="text-detail">{product.descripcion}</p>
        <p className="text-detail-precio">Precio: ${product.precio}</p>
      </div>
    </div>
  );
};

export default ItemDetail;

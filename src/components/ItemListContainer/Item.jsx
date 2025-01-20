import { Link } from "react-router-dom"

const Item = ({product}) => {
  return ( 
    
      <div className="item">
        <img src={product.imagen} className='img-item'alt='imagen Producto'width={100}/>
        <p className='text-item'>{product.nombre}</p>
        <p className='text-item'>{"Precio: $ "+ product.precio}</p>  
      <Link to={"/detail/"+ product.id } className="detail">Ver detalles</Link>  
        </div>
  )
}
export default Item


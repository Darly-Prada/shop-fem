import { Link } from "react-router-dom"

const item = ({product}) => {
  return (
    <div className='item'>
        <img src={product.imagen} className='img-item' alt='imagen de Producto'width={85}/>
        <p className='text-item'>{product.nombre}</p>
        <p className='text-item'>{"Precio: $ "+ product.precio}</p>  

        <Link to={ "/detail/"+ product.id }>Ver detalle</Link>  

        </div>
  )
}

export default item


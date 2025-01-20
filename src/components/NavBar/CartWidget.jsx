import { CartContext } from "../../context/CartContext"
import { CgShoppingCart } from "react-icons/cg"
import { Link } from "react-router-dom"
import { useContext } from "react"

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  let quantity = totalQuantity()

  return (
    <Link to="/cart" className="cartwidget">
       <CgShoppingCart className="icon-widget"/>
      <p className="number-widget"> { quantity !== 0 && quantity } </p>
    </Link>
  )
}
export default CartWidget

      
 

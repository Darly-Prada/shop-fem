import logoShop from "../assets/loguito.jpg"
import CartWidget from "./CartWidget"
import "./navbar.css"


const NavBar = () => {
  return (
    <nav className="navbar">
     <div className="brand">
        <img src={logoShop} alt="logotipo" className="logo" />
        <p className="name">ShopFem</p>
     </div>
    <ul className="categories">
        <li>Ropa</li>
        <li>zapatos</li>
        <li>Accesorios</li>
    </ul>

    <CartWidget/>

    </nav>
  )
}
export default NavBar


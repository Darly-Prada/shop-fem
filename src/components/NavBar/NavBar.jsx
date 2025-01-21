import logoShop from "../../assets/loguito.jpg";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img src={logoShop} alt="Logo de ShopFem" className="logo" />
        <p className="name">ShopFem</p>
      </Link>

      <ul className="categorias">
        <NavLink
          to="/categoria/ropa"
          className={({ isActive }) =>
            isActive ? "categoria-active" : "categoria"
          }
        >
          Ropa
        </NavLink>
        <NavLink
          to="/categoria/zapatos"
          className={({ isActive }) =>
            isActive ? "categoria-active" : "categoria"
          }
        >
          Calzado
        </NavLink>
        <NavLink
          to="/categoria/accesorios"
          className={({ isActive }) =>
            isActive ? "categoria-active" : "categoria"
          }
        >
          Accesorios
        </NavLink>
      </ul>

      <CartWidget />
    </nav>
  );
};
export default NavBar;

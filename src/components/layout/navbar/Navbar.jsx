import CartWidget from "../../common/Cartwidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
      <>
        <div className="containerNavbar">
          <Link to="/" style={{ color: "beige" }}>
            <img src="https://res.cloudinary.com/dbxindkgw/image/upload/v1717501017/Icono-galeria_dfzv6g.jpg" alt="" className="containerimgNavbar"/>
          </Link>
          <ul className="categories">
            <Link to="/">Todo</Link>
            <Link to="/category/otros">Otros</Link>
            <Link to="/category/brownies">Brownies</Link>
            <Link to="/category/galletas">Galletas</Link>
          </ul>
          <CartWidget />  

        </div>
      </>
    </div>
  );
};

import CartWidget from "../../common/Cartwidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
      <>
        <div className="containerNavbar">
          <Link to="/" style={{ color: "beige" }}>
            Little Brownie Box BA
          </Link>
          <ul className="categories">
            <Link to="/">Todo</Link>
            <Link to="/category/otros">Otros</Link>
            <Link to="/category/brownies">Brownies</Link>
          </ul>
          <CartWidget />

        </div>
      </>
    </div>
  );
};

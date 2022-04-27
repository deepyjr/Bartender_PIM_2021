import React from "react";
import "./Header.css";
import { BrowserRouter as Link } from "react-router-dom";
import { Name } from "../../Environnement";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <div className="left-part">
        <h1>{Name}</h1>
      </div>
      <div className="right-part">
        <ul>
          <li>
            <Link to="/">
              <p>Boissons</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <p>Mes informations</p>
            </Link>
          </li>
          <li>
            <Link to="/cart-content">
              <ShoppingCartIcon
                size="lg"
                className="shopping-cart-icon"
              ></ShoppingCartIcon>
            </Link>
          </li>
        </ul>

        {/* <Button link="/test" text="Commander un cocktail" ></Button> */}
      </div>
    </div>
  );
}

export default Header;

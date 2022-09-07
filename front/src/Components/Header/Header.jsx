import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
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
            <NavLink className="nav-item" to="/">Boissons</NavLink>
          </li>
          <li>
              <NavLink className="nav-item" to="/my-drinks">Boissons commandées</NavLink>
          </li>
          <li> 
          <NavLink to="/cart-content" style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
              };
            }}>
              <ShoppingCartIcon 
                sx={{ color: "white" }}
                size="lg"
                className="shopping-cart-icon"
              ></ShoppingCartIcon>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

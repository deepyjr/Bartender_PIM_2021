import React from "react";
import './Header.css';
import { Link} from "react-router-dom";
import {Name} from "../../Environnement"
import Button from "../Button/Button";

function Header() {
  return (
    <div className="header">
       <h1>{Name}</h1>
       <div className="right-part">
          <Button link="/test" text="Commander un cocktail" ></Button>
       </div>
    </div>
  );
}

export default Header;

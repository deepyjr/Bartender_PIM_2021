import React from 'react';
import './cartItem.css';
import Button from "../Button/Button";

function cardItem() {
  return (
    <div className="container-cart-item">
       <img src={process.env.PUBLIC_URL + '/whisky.jpg'} alt="" />
       <div className="informations-container">
          <div>Name : </div>
          <div>249€</div>
          <div>Quantity : </div>
       </div>
       <div className="container-button-item">
        <Button className="btn-delete" action="delete" link={"/acheter"} text={"Retirer du panier"}/>
       </div>
      
    </div>
  )
}

export default cardItem
import React from 'react';
import './cartItem.css';
import Button from "../Button/Button";
import { CartContext } from "../../Store/CartContext";

function CardItem(props) {
  const { cartState, cartDispatch } = React.useContext(CartContext);

  function deleteFunction(index) {
    console.log(" test")
    cartDispatch({
      type:"deleteOne",
      payload:index
    })
  }

  return (
    <div className="container-cart-item">
       <img src={process.env.PUBLIC_URL + '/whisky.jpg'} alt="" />
       <div className="informations-container">
          <div>Name : {props.name}</div>
          <div>{props.price}€</div>
          <div>Quantity : {props.quantity}</div>
       </div>
       <div className="container-button-item">
        <button onClick={()=>{deleteFunction(props.id)}} className="custom-button delete">Supprimer du panier</button>
       </div>
      
    </div>
  )
}

export default CardItem
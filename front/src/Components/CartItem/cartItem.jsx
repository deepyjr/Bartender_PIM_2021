import React from 'react';
import './cartItem.css';
import { CartContext } from "../../Store/CartContext";

function CardItem(props) {
  const { cartDispatch } = React.useContext(CartContext);

  function deleteFunction(index) {
    cartDispatch({
      type:"deleteOne",
      payload:index
    })
    window.location.reload()
  }

  return (
    <div className="container-cart-item">
       <img src={process.env.PUBLIC_URL + '/whisky.jpg'} alt="" />
       <div className="informations-container">
          <p>Name : {props.name}</p>
          <p>Price : {props.price}€</p>
          <p>Quantity : {props.quantity}</p>
       </div>
       <div className="container-button-item">
        <button onClick={()=>{deleteFunction(props.id)}} className="custom-button delete">Supprimer du panier</button>
       </div>
      
    </div>
  )
}

export default CardItem
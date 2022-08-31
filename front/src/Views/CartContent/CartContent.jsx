import React from 'react';
import './CartContent.css';
import {CartContext} from '../../Store/CartContext'
import axios from "axios";
import CartItem from "../../Components/CartItem/CartItem";
import Button from "../../Components/Button/Button";
import {BackAddress} from "../../Environnement";

function CartContent() {
  const [lineItems, setLineItems] = React.useState();
  const [refreshComponent, setRefreshComponent] = React.useState(true);
  const { cartState, cartDispatch } = React.useContext(CartContext);

    const sendDataToTheBack = () => {
      axios
        .post(BackAddress + "/cart", cartState.userCart)
        .then(function (response) {
          // handle success
          console.log(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };

    const orderCocktail = () => {
      axios
        .get(BackAddress + "/rasp/order-cocktail")
        .then(function (response) {
          // handle success
          console.log(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };


  return (
    <div className="cart-content">

    <h2>Mon panier</h2>
      <div className="container-cart">
        { cartState.userCart.map((cartItem,index) =>{
            return(<CartItem key={index} name={cartItem.name} price={cartItem.price} quantity={cartItem.quantity} id={index}></CartItem>)
         })}
      </div>
      <button className="custom-button" onClick={()=>{
        sendDataToTheBack();
      }}>Finaliser ma commande</button>
    </div>
  )
}

export default CartContent
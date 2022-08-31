import React from "react";
import OrderedItem from "../../Components/OrderedItem/OrderedItem";
import {CartContext} from '../../Store/CartContext'
import axios from "axios";
import CartItem from "../../Components/CartItem/CartItem";
import Button from "../../Components/Button/Button";
import {BackAddress} from "../../Environnement";

function MyDrinks() {
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
  return (
    <>
      <div className="cart-content">
        <div>MyDrinks</div>
        <div className="container-cart">
        { cartState.userCart.map((cartItem,index) =>{
            return(<OrderedItem key={index} name={cartItem.name} price={cartItem.price} quantity={cartItem.quantity} id={index}></OrderedItem>)
         })}
      </div>
      <button className="custom-button" onClick={()=>{sendDataToTheBack()}}>Finaliser ma commande</button>
      </div>
    </>
  );
}

export default MyDrinks;

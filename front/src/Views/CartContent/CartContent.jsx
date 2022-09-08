import React from "react";
import "./CartContent.css";
import { CartContext } from "../../Store/CartContext";
import axios from "axios";
import CartItem from "../../Components/CartItem/CartItem";
import { BackAddress } from "../../Environnement";

function CartContent() {
  const [lineItems, setLineItems] = React.useState([]);
  const { cartState, cartDispatch } = React.useContext(CartContext);
  const [refreshComponent, setRefreshComponent] = React.useState(true);

  React.useEffect(() => {
    const getData = () => {
      let itemsToShow = []
      cartState.userCart.forEach((item, index) => {
        itemsToShow.push(
          <CartItem
            key={index}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            id={index}
            refresh={setRefreshComponent}
          ></CartItem>
        );
      });

      setLineItems(itemsToShow);
    };
    if (refreshComponent) {
      getData();
      setRefreshComponent(false);
    }
  }, [refreshComponent]);

  const sendDataToTheBack = () => {
    axios
      .post(BackAddress + "/cart", cartState.userCart)
      .then(function (response) {
        // handle success
        console.log(response.data);
        axios
          .get(BackAddress + "/rasp/order-cocktail")
          .then(function (response) {
            // handle success
            console.log(response.data);
            cartDispatch({
              type: "resetAll",
            });
            window.location.reload();
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div className="cart-content">
      <h2>Mon panier</h2>
      <div className="container-cart">{lineItems}</div>
      <button
        className="custom-button"
        onClick={() => {
          sendDataToTheBack();
        }}
      >
        Finaliser ma commande
      </button>
    </div>
  );
}

export default CartContent;

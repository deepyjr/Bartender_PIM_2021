import React from 'react';
import './CartContent.css';
import {CartContext} from '../../Store/CartContext'
import axios from "axios";
import CartItem from "../../Components/CartItem/cartItem";

function CartContent() {
  const [lineItems, setLineItems] = React.useState();
  const [refreshComponent, setRefreshComponent] = React.useState(true);
  const { cartState, cartDispatch } = React.useContext(CartContext);


  React.useEffect(() => {
    const callApi = () => {
      setRefreshComponent(true);
         console.log(cartState.userCart)
      // axios
      //   .post(baseUrl + "/folderDetail", { path: pathState.path })
      //   .then(function (response) {
      //     // handle success
      //     setRefreshComponent(true);
      //     setLineItems(
      //       response.data.map((file, index) => {
      //         return (
      //           <div>test</div>
      //         );
      //       })
      //     );
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error);
      //   });
    };

    if (refreshComponent) {
      callApi();
      setRefreshComponent(false);
    }
  }, refreshComponent);

  return (
    <div className="cart-content">

    <h2>Mon panier</h2>
      <div className="container-cart">
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        {lineItems}
      </div>
    </div>
  )
}

export default CartContent
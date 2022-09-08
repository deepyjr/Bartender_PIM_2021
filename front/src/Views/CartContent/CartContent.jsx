import React from "react";
import "./CartContent.css";
import { CartContext } from "../../Store/CartContext";
import axios from "axios";
import CartItem from "../../Components/CartItem/CartItem";
import { BackAddress } from "../../Environnement";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function CartContent() {
  const [lineItems, setLineItems] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const { cartState, cartDispatch } = React.useContext(CartContext);
  const [refreshComponent, setRefreshComponent] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <div style={{backgroundColor: "green"}}>
      <IconButton
        size="large"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
        
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </div>
  );

  React.useEffect(() => {
    const getData = () => {
      let itemsToShow = [];
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
            setRefreshComponent(true)
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
      <div className="container-cart">
        {lineItems.length > 0 ? (
          lineItems
        ) : (
          <h1 style={{color:"#537594"}}>Votre verre est vide... Votre commande aussi</h1>
        )}
      </div>
      <button
      disabled={lineItems.length > 0 ? false : true}
        className="custom-button"
        onClick={() => {
          setOpen(true)
          sendDataToTheBack();
        }}
      >
        Finaliser ma commande
      </button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={"Votre commande est à présent en cours de préparation"}
        action={action}
        anchorOrigin={ {vertical: 'top', horizontal: 'right'} }
      />
    </div>
  );
}

export default CartContent;

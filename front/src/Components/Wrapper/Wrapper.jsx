import React from "react";
import "./Wrapper.css";
import { CartContext } from "../../Store/CartContext";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function Wrapper(props) {
  const { cartDispatch } = React.useContext(CartContext);
  const [open, setOpen] = React.useState(false);
  const [itemAdded, setItemAdded] = React.useState("");

  const handleClick = (item) => {
    setItemAdded(item);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment className="notif">
      <IconButton
        size="large"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
        
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="container-wrapper">
      <div
        className="img-container"
        style={{
          margin: "0",
          height: "224px",
          backgroundImage: `url(${props.img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          textAlign: "center",
          borderRadius: "5px",
        }}
      >
        <div className="title-wrapper-main-container">
          <div className="cover">
            <h2 className="title-cover">{props.title}</h2>
          </div>
        </div>
      </div>
      <div className="contanier-items-suggestion">
        {props.items.map((item, index) => {
          return (
            <div
              className="items-suggestion"
              key={index}
              onClick={() => {
                cartDispatch({
                  type: "addToCart",
                  payload: {
                    name: item.name,
                    description: item.description,
                    price: item.prix,
                    quantity: 1,
                    nametag: item.nametag
                  },
                });
                handleClick(item.name);
              }}
            >
              <div className="left-part-suggestion">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div className="right-part-suggestion">
                <h3>{item.prix}€</h3>
              </div>
            </div>
          );
        })}
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={itemAdded + " ajouté à la commande"}
        action={action}
      />
    </div>
  );
}

export default Wrapper;

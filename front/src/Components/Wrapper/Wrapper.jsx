import React from "react";
import "./Wrapper.css";
import { CartContext } from "../../Store/CartContext";

function Wrapper(props) {

  const { cartState, cartDispatch } = React.useContext(CartContext);

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
            <div className="items-suggestion" key={index} onClick={()=>{
              cartDispatch({
                type:"addToCart",
                payload:{
                  name: item.name,
                  description: item.description,
                  price: item.prix,
                  quantity: 1
                }
              })
            }}>
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
    </div>
  );
}

export default Wrapper;

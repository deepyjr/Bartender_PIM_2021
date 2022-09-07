import React from "react";
import OrderedItem from "../../Components/OrderedItem/OrderedItem";
import {CartContext} from '../../Store/CartContext'
import axios from "axios";
import CartItem from "../../Components/CartItem/CartItem";
import Button from "../../Components/Button/Button";
import {BackAddress} from "../../Environnement";

function MyDrinks() {
  const [refreshComponent, setRefreshComponent] = React.useState(true);
  const [content, setContent] = React.useState(<div></div>);

    React.useEffect(()=>{
      const getData = () => {
        axios
        .get(BackAddress + "/cart")
        .then(function (response) {
          // handle success
          let temp = []
          response.data.map((item, index)=>{
            if(item.status !== "terminé"){
              temp.push(<OrderedItem key={index} name={item.drink} price={item.price} quantity={item.quantity} id={index} status={item.status} dateOrdered={item.dateOrdered}  ></OrderedItem>)
            }
          })
          setContent(temp)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      }
      if(refreshComponent){
        getData()
        setRefreshComponent(false);
      }
    },[])

  return (
    <>
      <div className="cart-content">
        <div className="container-cart">
          {content}
        </div>
      </div>
    </>
  );
}

export default MyDrinks;

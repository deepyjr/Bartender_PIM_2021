import React from 'react';
import './OrderedItem.css';
import Button from "../Button/Button";
import { CartContext } from "../../Store/CartContext";
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import {BackAddress} from "../../Environnement";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}



function OrderedItem(props) {
  const { cartState, cartDispatch } = React.useContext(CartContext);
  const [progress, setProgress] = React.useState(10);


  return (
    <div className="container-cart-item">
       <img src={process.env.PUBLIC_URL + '/whisky.jpg'} alt="" />
       <div className="informations-container">
          <p>Name : {props.name}<br/></p>

          <p>Price :{props.price}€</p>
          <p>Quantity : {props.quantity}</p>
          <p>Date : {props.dateOrdered}</p>
       </div>
       <div className="container-button-item">
       <Box sx={{ width: '100%' }}>
        <p>Status : {props.status}</p>
        <LinearProgressWithLabel value={props.status == "en cours"? 50:0} />
        </Box>
       </div>
      
    </div>
  )
}

export default OrderedItem
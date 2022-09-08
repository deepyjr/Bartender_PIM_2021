import React from "react";

const CartContext = React.createContext();
const localState = JSON.parse(localStorage.getItem("cartState"));

const initialState = {
  userCart: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "addToCart": {
        let checkIfExist = state.userCart.findIndex(e => e.name === action.payload.name)
        if (checkIfExist === -1) {
            return {
                ...state,
                userCart: [...state.userCart, action.payload],
              };
        } else {
            let temp = state.userCart.map((e) => {
                if (e.name === action.payload.name) {
                    e.quantity += 1
                }
                return e
            })
            return {
                ...state,
                userCart: temp
            }
        }
      
    }
    case "deleteOne": {
      const temp = state.userCart.map((e) => {
        console.log(e)
        if (e.name === action.payload) {
            if (e.quantity === 1) {
                return
            }
            e.quantity -= 1
        }
        return e

      });
      
      return {
        ...state,
        userCart: temp.filter(n => n),
      };
    }
    case "resetAll": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

function CartProvider({ children }) {
  const [cartState, cartDispatch] = React.useReducer(
    cartReducer,
    localState || initialState
  );

  React.useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(cartState));
  }, [cartState]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };

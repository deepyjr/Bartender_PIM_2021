import React from 'react'

const CartContext = React.createContext();
const localState = JSON.parse(localStorage.getItem('cartState'));

const initialState = {
    userCart: []
}

function cartReducer(state, action) {
    switch (action.type) {
        case 'addToCart': {
            return {
                ...state,
                userCart: [...state.userCart,action.payload]
            }
        }
        case 'deleteOne': {
            const myIndex = action.payload;
            const tempArray = state.userCart;
            tempArray.pop();
            return {
                ...state,
                userCart: tempArray
            }
        }
        case 'resetAll': {
            return initialState
        }
        default: {
            return state;
        }
    }
}

function CartProvider({ children }) {
    const [cartState, cartDispatch] = React.useReducer(cartReducer, localState || initialState)

    React.useEffect(() => {
        localStorage.setItem('cartState', JSON.stringify(cartState))
    }, [cartState])

    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }
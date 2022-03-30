import React from 'react'

const KebabContext = React.createContext();
const localState = JSON.parse(localStorage.getItem('kebabState'));

const initialState = {
    currentKebab: {
        pain: null,
        viande: null,
        garnitures: [],
        sauces: []
    },
    kebabCart: []
}

function kebabReducer(state, action) {
    switch (action.type) {
        case 'ajouterPain': {
            return {
                ...state,
                currentKebab: {...state.currentKebab, pain: action.payload}
            }
        }
        case 'ajouterViande': {
            return {
                ...state,
                currentKebab: {...state.currentKebab, viande: action.payload}
            }
        }
        case 'ajouterGarnitures': {
            let temp = state.currentKebab.garnitures
            temp.push(action.payload)
            return {
                ...state,
                currentKebab: {...state.currentKebab, garnitures: [...new Set(temp)]}
            }
        }
        case 'ajouterSauces': {
            let temp = state.currentKebab.sauces
            temp.push(action.payload)
            return {
                ...state,
                currentKebab: {...state.currentKebab, sauces: [...new Set(temp)]}
            }
        }
        case 'supprimerGarnitures': {
            let temp = state.currentKebab.garnitures
            temp.splice(temp.indexOf(action.payload), 1)
            return {
                ...state,
                currentKebab: {...state.currentKebab, garnitures: [...new Set(temp)]}
            }
        }
        case 'supprimerSauces': {
            let temp = state.currentKebab.sauces
            console.log(temp)
            temp.splice(temp.indexOf(action.payload), 1)
            console.log(temp)
            return {
                ...state,
                currentKebab: {...state.currentKebab, sauces: [...temp]}
            }
        }
        case 'addToCart': {
            let temp = state.kebabCart
            temp.push(state.currentKebab)
            return {
                ...state,
                currentKebab: initialState.currentKebab,
                kebabCart: temp
            }
        }
        case 'resetCurrent': {
            return {
                ...state,
                currentKebab: initialState.currentKebab
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

function KebabProvider({ children }) {
    const [kebabState, kebabDispatch] = React.useReducer(kebabReducer, localState || initialState)

    React.useEffect(() => {
        localStorage.setItem('kebabState', JSON.stringify(kebabState))
    }, [kebabState])

    return (
        <KebabContext.Provider value={{ kebabState, kebabDispatch }}>
            {children}
        </KebabContext.Provider>
    )
}

export { KebabProvider, KebabContext }
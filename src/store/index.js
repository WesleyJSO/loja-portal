import { createStore } from 'redux'
import { ActionTypes } from '../constants/action-types'

const INITIAL_STATE = { 
    product: {},
    products: [] 
}

const products = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }
        case ActionTypes.ADD_PRODUCT:
            return { ...state, products: [ ...state.products, payload ] }    
        case ActionTypes.SET_PRODUCT:
            return { ...state, product: payload }
        default:
            return state
    }
}

// TODO change to combine reducers
const store = createStore(products)

export default store
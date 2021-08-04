import { ActionTypes } from "../constants/action-types"

export const setProducts = products => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const addProduct = product => {
    return {
        type: ActionTypes.ADD_PRODUCT,
        payload: product
    }
}

export const selectProduct = product => {
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: product
    }
}
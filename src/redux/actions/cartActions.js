import { ADD_ITEM, DELETE_ITEM } from '../actionTypes';
export const addItem = (name, quantity) => {
    return {
        type: ADD_ITEM,
        name,
        quantity
    }
}

export const deleteItem = (name) => {
    return {
        type: DELETE_ITEM,
        name
    }
}
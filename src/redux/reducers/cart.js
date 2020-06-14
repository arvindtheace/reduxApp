import { ADD_ITEM, DELETE_ITEM } from '../actionTypes';

export default function(state = [], action) {
    switch (action.type) {
        case ADD_ITEM:
            const new_item = { name: action.name, quantity: action.quantity};
            return [...state, new_item];
        case DELETE_ITEM:
            return state.filter(p => p.name !== action.name)
      default:
        return state;
    }
  }
import {
  ADD_FIVE_ITEMS,
  ADD_ITEM,
  DELETE_FIVE_ITEMS,
  DELETE_ITEM,
} from "../actionTypes/ActionTypes";

const initialState = {
  numOfItem: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItem: state.numOfItem + 1,
      };
    case DELETE_ITEM:
      return {
        ...state,
        numOfItem: state.numOfItem - 1,
      };
    case ADD_FIVE_ITEMS:
      return {
        ...state,
        numOfItem: state.numOfItem + 5,
      };
    case DELETE_FIVE_ITEMS:
      return {
        ...state,
        numOfItem: state.numOfItem - 5,
      };
    default:
      return state;
  }
};

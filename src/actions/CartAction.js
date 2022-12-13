import {
  ADD_FIVE_ITEMS,
  ADD_ITEM,
  DELETE_FIVE_ITEMS,
  DELETE_ITEM,
} from "../actionTypes/ActionTypes";

export const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};
export const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};
export const addFiveItemsAtOnce = () => {
  return {
    type: ADD_FIVE_ITEMS,
  };
};
export const deleteFiveItemsAtOnce = () => {
  return {
    type: DELETE_FIVE_ITEMS,
  };
};

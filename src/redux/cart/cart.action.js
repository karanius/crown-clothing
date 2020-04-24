import { CartTypes } from "./cart.type";

export const toggleCartHidden = () => {
  return {
    type: CartTypes.TOGGLE_CART_HIDDEN
  };
};

export const addItem = (item) => {
  return{
    type: CartTypes.ADD_ITEM,
    payload: item
  }
}
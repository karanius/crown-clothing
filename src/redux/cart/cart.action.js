import { CartTypes } from "./cart.type";

export const toggleCartHidden = () => {
  return {
    type: CartTypes.TOGGLE_CART_HIDDEN
  };
};

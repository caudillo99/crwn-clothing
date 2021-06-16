import CartActionsTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionsTypes.TOOGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionsTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionsTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionsTypes.REMOTE_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionsTypes.CLEAR_CART,
});

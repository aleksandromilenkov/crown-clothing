export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToDelete) => {
  const theItem = cartItems.find((item) => item.id === cartItemToDelete.id);

  if (theItem.quantity === 1)
    return cartItems.filter((item) => item.id !== theItem.id);
  else
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToDelete.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        };
      } else return cartItem;
    });
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  console.log(cartItemToClear);
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

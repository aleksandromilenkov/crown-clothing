import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
  shop_data: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: {
      return INITIAL_STATE;
    }
  }
};

export default shopReducer;

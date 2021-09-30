import { createSelector } from "reselect";

// state.shop 的 shop 指得是在 root_reducer.js的 `shop: shopReducer,`
const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

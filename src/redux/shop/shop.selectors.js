import { createSelector } from "reselect";

// state.shop 的 shop 指的是在 root_reducer.js
//const rootReducer = combineReducers({
//   user: userReducer,
//   cart: cartReducer,
//   directory: directoryReducer,
//   shop: shopReducer,  ----> 這個
// });

const selectShop = (state) => state.shop;

//shop.reducer.js
// const INITIAL_STATE = {
//   collections: null, ---> 抓這個
//   isFetching: false,
//   errorMessage: undefined,
// };
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

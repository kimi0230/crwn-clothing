## Redux

### mapStateToProps
將 redux 的 store的 state 連接到 component 的 props
* https://react-redux.js.org/using-react-redux/connect-mapstate
* https://chentsulin.github.io/redux/docs/basics/UsageWithReact.html

```javascript
function mapStateToProps(state, ownProps?)
```

```javascript
function mapStateToProps(state) {
  const { todos } = state
  return { todoList: todos.allIds }
}

export default connect(mapStateToProps)(TodoList)
```

### mapDispatchToProps
1. `src/components/collection_item/collection_item.component.js`  trigger `addItem` function
2. `/Users/kimiimac/github/crwn-clothing/src/redux/cart/cart.actions.js` trigger `addItem` function
3. `cart.reducer.js` received `action` which contains `type` and `payload` variable

```javascript
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
```


## Reselect 
是一個簡單的 library 可以用來建立會自動記憶、可組合的 selector function。可以用 Reselect 的 selector 來有效率的從 Redux store 計算衍生資料. 避免每次 component 更新的時候都會觸發

1. src/redux/user/user.selectors.js
```javascript
import { createSelector } from "reselect";

// 這個是 input-selector
const selectUser = (state) => state.user;

// selectCurrentUser 是 memoized selector。它接收 selectUser 作為 input-selector
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
```

2. src/app.js
```javascript
import { selectCurrentUser } from "./redux/user/user.selectors";
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
```

## Redux Persist
1. src/redux/store.js

```javascript
import { persistStore } from "redux-persist";

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
```

2. src/redux/root_reducer.js

```javascript
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [], // 內容是 reducer 的 名字.
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
```

3. src/index.js

```javascript
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
```

## Package script
There is also a built-in environment variable called NODE_ENV. You can read it from process.env.NODE_ENV. When you run npm start, it is always equal to `'development'`, when you run npm test it is always equal to `'test'`, and when you run npm run build to make a production bundle, it is always equal to `'production'`. **You cannot override NODE_ENV manually.** This prevents developers from accidentally deploying a slow development build to production.

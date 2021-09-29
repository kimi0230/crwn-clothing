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

### Redux Persist
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
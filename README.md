# crwn-clothing

React, Firebase v9(auth, firestore)


## CRA
```shell
npx create-react-app crwn-clothing --template cra-template-
```

## Redux
```shell
yarn add redux redux-logger react-redux
```

1. `src/components/collection_item/collection_item.component.js`  trigger `addItem` function
2. `/Users/kimiimac/github/crwn-clothing/src/redux/cart/cart.actions.js` trigger `addItem` function
3. `cart.reducer.js` received `action` which contains `type` and `payload` variable

```javascript
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
```

* https://github.com/ZhangMYihua
* [cubic-bezier](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)
* [react router](https://reactrouter.com/web/guides/quick-start)
* [Firebase Doc](https://firebase.google.com/docs/web/setup?hl=en)
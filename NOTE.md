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
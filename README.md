# crwn-clothing
[![Build and Deploy](https://github.com/kimi0230/crwn-clothing/actions/workflows/deploy-to-gh-pages.yml/badge.svg)](https://github.com/kimi0230/crwn-clothing/actions/workflows/deploy-to-gh-pages.yml)

React, Redux, Saga, Firebase(auth, firestore) v9, @apollo/client v3
 
Demo : https://kimi0230.github.io/crwn-clothing/
# Run local server
```shell
cd server
yarn dev
```

# Miscellaneous
1. [GitHub Pages doesn't natively support single page apps. When there is a fresh page load for a url like example.tld/foo, where /foo is a frontend route, the GitHub Pages server returns 404 because it knows nothing of /foo.](https://github.com/rafgraph/spa-github-pages)

# My Notes
## CRA create PWA
```shell
npx create-react-app crwn-clothing --template cra-template-paw
```

## Redux
https://github.com/reduxjs/redux
```shell
yarn add redux redux-logger react-redux
```

##### Reslect
https://github.com/reduxjs/reselect

Reselect 是一個簡單的 library 可以用來建立會自動記憶,可組合的 selector function.
可以用 Reselect 的 selector 來有效率的從 Redux store 計算衍生資料
```shell
yarn add reselect
```

##### Redux Persist
https://github.com/rt2zz/redux-persist

如果使用者重新整理了網頁,
之前通過redux儲存的全域性資料就會被全部清空.
所以需要使用redux-persist管理瀏覽器的localStorage.
```shell
yarn add redux-persist
```

##### Redux-thunk
https://github.com/reduxjs/redux-thunk

原本的action creator 都是回傳action object.
在Redux Thunk裡面會檢查若action不是object而是function,
就會執行function後再將action往下傳,
直到回傳object才會進去reducers.
可用來處理async
```shell
yarn add redux-thunk
```

##### Redux-saga
```shell
yarn add redux-saga
```

Reducers fire first, then sagas receive the action. From there, sagas can fire off new actions which in turn hit the reducers and other sagas as well!
##### React stripe checkout
https://github.com/azmenak/react-stripe-checkout
```shell
yarn add react-stripe-checkout
```
## Styled-components
https://github.com/styled-components/styled-components
```shell
yarn add styled-components
```


##### [create a test credit card](https://stripe.com/docs/api/tokens/create_card)
```shell
curl https://api.stripe.com/v1/tokens \
  -u {your test key} \
  -d "card[number]"=4242424242424242 \
  -d "card[exp_month]"=10 \
  -d "card[exp_year]"=2023 \
  -d "card[cvc]"=1233
```
## GraphQL
example: https://github.com/ZhangMYihua/graphql-practice-complete

```shell
yarn add @apollo/client graphql 
```

##### Resolvers
https://www.apollographql.com/docs/apollo-server/data/resolvers/

##### Cache
https://www.apollographql.com/docs/react/caching/cache-configuration/

## GraphQL Server URI
https://crwn-clothing.com/

## Testing
`yarn add --dev jest`

* [docs](https://jestjs.io/docs/getting-started)
* [cheat sheet](https://github.com/sapegin/jest-cheat-sheet)
* [testing-exercise](https://github.com/aneagoie/testing-exercise)
* [robofriends-testing](https://github.com/aneagoie/robofriends-testing)

# Reference
* [https://github.com/ZhangMYihua](https://github.com/ZhangMYihua)
* [cubic-bezier](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)
* [react router](https://reactrouter.com/web/guides/quick-start)
* [Firebase Doc](https://firebase.google.com/docs/web/setup?hl=en)
* [React-router和React-router-dom的選擇](https://www.ucamc.com/articles/278-%E7%B0%A1%E5%96%AE%E4%BB%8B%E7%B4%B9%E4%BA%86%E8%A7%A3react-router-4%E6%95%99%E5%AD%B8)
* [React-router-dom | 原理解析](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/a-little-bit-of-react-router-dom-e5b809fcb127)
* [https://stripe.com/](https://stripe.com/)
* [Create Github Pages](https://ithelp.ithome.com.tw/articles/10228423)
* [spa-github-pages](https://github.com/rafgraph/spa-github-pages)
* [higher order components](https://github.com/ZhangMYihua/higher-order-components-explained)
* [Firebase REST API](https://firebase.google.com/docs/firestore/use-rest-api#making_rest_calls)
* [Router match](https://ithelp.ithome.com.tw/articles/10204451)
* [React Hooks](https://reactjs.org/docs/hooks-reference.html)
* [React Redux Hooks](https://react-redux.js.org/api/hooks)
* [ZhangMYihua/useReducer-example](https://github.com/ZhangMYihua/useReducer-example)
* [reactjs - Apollo Client Reactive 变量 - 更新值后不触发重新渲染](https://www.coder.work/article/7776722)
* [scss media](https://codepen.io/cp/pen/YzyveMP?editors=1100)
* [crwn-live](https://crwn-live.herokuapp.com)
* [React Performance Cheat Sheet](https://houssein.me/progressive-react)
* [realfavicongenerator](https://realfavicongenerator.net/)
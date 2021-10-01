# crwn-clothing
[![Build and Deploy](https://github.com/kimi0230/crwn-clothing/actions/workflows/deploy-to-gh-pages.yml/badge.svg)](https://github.com/kimi0230/crwn-clothing/actions/workflows/deploy-to-gh-pages.yml)

React, Firebase v9(auth, firestore)


## CRA create PWA
```shell
npx create-react-app crwn-clothing --template cra-template-paw
```

## Redux
```shell
yarn add redux redux-logger react-redux
```

### Reslect
```shell
yarn add reselect
```

### Redux Persist
```shell
yarn add redux-persist
```

### React stripe checkout
```shell
yarn add react-stripe-checkout
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



* https://github.com/ZhangMYihua
* [cubic-bezier](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)
* [react router](https://reactrouter.com/web/guides/quick-start)
* [Firebase Doc](https://firebase.google.com/docs/web/setup?hl=en)
* [React-router和React-router-dom的選擇](https://www.ucamc.com/articles/278-%E7%B0%A1%E5%96%AE%E4%BB%8B%E7%B4%B9%E4%BA%86%E8%A7%A3react-router-4%E6%95%99%E5%AD%B8)
* [React-router-dom | 原理解析](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/a-little-bit-of-react-router-dom-e5b809fcb127)
* [https://stripe.com/](https://stripe.com/)
* [Create Github Pages](https://ithelp.ithome.com.tw/articles/10228423)
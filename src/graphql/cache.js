import { makeVar, InMemoryCache } from "@apollo/client";

// https://www.coder.work/article/7776722
export const cartHiddenVar = makeVar(true);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartHidden: {
          read() {
            return cartHiddenVar();
          },
        },
      },
    },
  },
});

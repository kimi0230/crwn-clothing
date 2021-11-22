import { makeVar, InMemoryCache } from "@apollo/client";

export const cartHidden = makeVar(true);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartHidden();
          },
        },
      },
    },
  },
});

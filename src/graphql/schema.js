import { gql } from "@apollo/client";
import { cartHiddenVar } from "./cache";

export const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

export const ToggleCartHidden = () => {
  console.log("ToggleCartHidden", cartHiddenVar());
  cartHiddenVar(!cartHiddenVar());
};

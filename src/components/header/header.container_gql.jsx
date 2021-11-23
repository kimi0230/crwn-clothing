import React from "react";
import { useQuery } from "@apollo/client";
import HeaderGQL from "./header.component_gql";
import { GET_CART_HIDDEN } from "../../graphql/schema";

const HeaderContainerGQL = () => {
  const { loading, error, data } = useQuery(GET_CART_HIDDEN);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  console.log("HeaderContainerGQL: data.cartHidden", data.cartHidden);
  return <HeaderGQL hidden={data.cartHidden} />;
};

export default HeaderContainerGQL;

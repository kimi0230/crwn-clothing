import React from "react";
import { useQuery, gql } from "@apollo/client";

import Header from "./header.component";

const GET_CLIENT_PROPERTIES = gql`
  {
    cartHidden @client
  }
`;

const HeaderContainerGQL = () => {
  const { loading, error, data } = useQuery(GET_CLIENT_PROPERTIES);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }
  console.log("kkkkkkk", data);
  return <Header hidden={false} />;
};

export default HeaderContainerGQL;

import React from "react";

import { useQuery, gql } from "@apollo/client";

import CollectionOverviewGQL from "./collections_overview.component_gql";
import Spinner from "../spinner/spinner.component";

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainerGQL = () => {
  // https://github.com/apollographql/react-apollo/issues/1686
  // <Query query={GET_COLLECTIONS}>
  //   {({ loading, error, data }) => {
  //     console.log("loading:", loading);
  //     console.log("error:", error);
  //     console.log("data:", data);
  //     if (loading) {
  //       return <Spinner></Spinner>;
  //     }
  //     const getCollectionsByTitle = data.collections;
  //     return <CollectionOverviewGQL collections={getCollectionsByTitle} />;
  //   }}
  // </Query>

  const { loading, error, data } = useQuery(GET_COLLECTIONS);

  if (loading) {
    return <Spinner></Spinner>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  console.log("data.collections = ", data.collections);
  return <CollectionOverviewGQL collections={data.collections} />;
};

export default CollectionsOverviewContainerGQL;

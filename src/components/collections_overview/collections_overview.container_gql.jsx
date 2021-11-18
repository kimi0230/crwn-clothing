import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

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

const CollectionsOverviewContainerGQL = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, error, data }) => {
      console.log("loading:", loading);
      console.log("error:", error);
      console.log("data:", data);
      if (loading) {
        return <Spinner></Spinner>;
      }
      return <CollectionOverviewGQL collections={data.collections} />;
    }}
  </Query>
);

export default CollectionsOverviewContainerGQL;
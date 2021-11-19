import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Spinner from "../../components/spinner/spinner.component";

import CollectionPageGQL from "./collection_gql";

const GET_COLLECTIONS_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
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

const CollectionPageContainerGQL = ({ match }) => (
  <Query
    query={GET_COLLECTIONS_BY_TITLE}
    variables={{ title: match.params.collectionId }}
  >
    {({ loading, error, data }) => {
      if (loading) {
        return <Spinner></Spinner>;
      }
      const getCollectionsByTitle = data.getCollectionsByTitle;
      return <CollectionPageGQL collections={getCollectionsByTitle} />;
    }}
  </Query>
);

export default CollectionPageContainerGQL;

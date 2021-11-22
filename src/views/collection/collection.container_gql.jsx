import React from "react";
import { useQuery, gql } from "@apollo/client";

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

const CollectionPageContainerGQL = ({ match }) => {
  // V2
  // <Query
  //   query={GET_COLLECTIONS_BY_TITLE}
  //   variables={{ title: match.params.collectionId }}
  // >
  //   {({ loading, error, data }) => {
  //     if (loading) {
  //       return <Spinner></Spinner>;
  //     }
  //     const getCollectionsByTitle = data.getCollectionsByTitle;
  //     return <CollectionPageGQL collections={getCollectionsByTitle} />;
  //   }}
  // </Query>

  // V3
  const { loading, error, data } = useQuery(GET_COLLECTIONS_BY_TITLE, {
    variables: { title: match.params.collectionId },
  });

  if (loading) {
    return <Spinner></Spinner>;
  }
  if (error) {
    return `Error! ${error}`;
  }

  const getCollectionsByTitle = data.getCollectionsByTitle;
  return <CollectionPageGQL collections={getCollectionsByTitle} />;
};

export default CollectionPageContainerGQL;

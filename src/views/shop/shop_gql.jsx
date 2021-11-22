import React from "react";
import { Route } from "react-router-dom";
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#importing_defaults
// https://openhome.cc/Gossip/ECMAScript/Export.html
import { default as CollectionsOverviewContainerGQL } from "../../components/collections_overview/collections_overview.container_gql";

import { default as CollectionPageContainerGQL } from "../collection/collection.container_gql";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainerGQL}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainerGQL}
      ></Route>
    </div>
  );
};

export default ShopPage;

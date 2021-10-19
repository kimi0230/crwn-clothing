import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection_item/collection_item.component";
import "./collection_preview.styles.scss";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <div className="collection-preview">
    <h1
      className="title"
      // path也是match的屬性之一，會回傳透過哪個Route進入的path屬性
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);

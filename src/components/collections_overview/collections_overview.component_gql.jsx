import React from "react";

import CollectionPreview from "../collection_preview/collection_preview.component";

import "./collections_overview.styles.scss";

const CollectionOverviewGQL = ({ collections }) => (
  <div className="collections-overiew">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

export default CollectionOverviewGQL;

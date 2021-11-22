import React from "react";
import CollectionItem from "../../components/collection_item/collection_item.component";

import "./collection.styles.scss";

// 商品分類頁面 : /crwn-clothing/shop/hats
const CollectionPageGQL = ({ collections }) => {
  const { title, items } = collections;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPageGQL;

import React, { useEffect } from "react";
import CollectionItem from "../../components/collection_item/collection_item.component";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

// 商品分類頁面 : /crwn-clothing/shop/hats
const CollectionPage = ({ collection }) => {
  useEffect(() => {
    return () => {};
  });
  const { title, items } = collection;
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

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

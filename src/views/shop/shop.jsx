import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collections_overview/collections_overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
    // 方法一: REST API 取得 collections >>>
    // https://firestore.googleapis.com/v1/projects/crwn-db-e06e9/databases/(default)/documents/collections
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-db-e06e9/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log("fetch ", collections));
    // REST API 取得 collections <<<

    // const collectionRef = collection(firestore, "collections");
    // 方法二: getDos >>>
    // // getDocs: 取出 collection 的所有 docs
    // getDocs(collectionRef).then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    // getDos <<<

    // 方法三: 監聽 collections >>>
    // this.unsubscribeFromSnapshop = onSnapshot(collectionRef, (snapshot) => {
    //   // 將 collection 裏面所有的document 轉成 map
    //   console.log("kkk", snapshot);
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    // 監聽 collections <<<
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      ></Route>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

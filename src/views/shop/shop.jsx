import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections_overview/collections_overview.component";
import CollectionPage from "../collection/collection";

import { collection, onSnapshot } from "firebase/firestore";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
class ShopPage extends React.Component {
  unsubscribeFromSnapshop = null;

  componentDidMount() {
    const collectionRef = collection(firestore, "collections");

    // 監聽 collections
    this.unsubscribeFromSnapshop = onSnapshot(collectionRef, (snapshot) => {
      // 將 collection 裏面所有的document 轉成 map
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        ></Route>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

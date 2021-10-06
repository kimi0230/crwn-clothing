import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections_overview/collections_overview.component";
import CollectionPage from "../collection/collection";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionfetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with_spinner/with_spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();

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
  }

  render() {
    const { match, isCollectionFetching, selectIsCollectionsLoaded } =
      this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!selectIsCollectionsLoaded}
              {...props}
            />
          )}
        ></Route>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionfetching,
  selectIsCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selector";

import "./collections-overview.scss";

import CollectionPreview from "../collection-preview/collection-preview";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {Object.keys(collections).map((collection) => {
        const { id, ...otherCollectionProps } = collections[collection];
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
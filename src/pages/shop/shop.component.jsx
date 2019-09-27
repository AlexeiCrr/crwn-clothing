// core
import React from 'react';
import { Route } from 'react-router-dom';
//components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Collection from '../collection/collection.component';

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default ShopPage;

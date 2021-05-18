import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

class Shop extends Component {
   // eslint-disable-next-line no-undef
   unsuscribeFromSnapshot = null;

   componentDidMount() {
      const { updateCollections } = this.props;
      const collectionRef = firestore.collection('collections');

      collectionRef.onSnapshot(async snapshot => {
         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
         updateCollections(collectionsMap);
      })
   }
   

   render() {
      const { match } = this.props;
      return(
         <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
         </div>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   updateCollections: collectionsMap => 
      dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);
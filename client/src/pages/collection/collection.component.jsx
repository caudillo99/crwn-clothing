import React, { useContext } from "react";

import CollectionItem from "../../components/collections-item/collections-item.component";
import CollectionsContext from "../../contexts/collections/contexts.collections";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.categoryId];
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

export default CollectionPage;

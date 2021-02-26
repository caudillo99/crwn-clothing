import React from 'react'
import CollectionItem from '../collections-item/collections-item.component.jsx'
import './preview-collection.syles.scss'

const CollectionPreview = ({ title, items }) => {
   return(
      <div className='collection-preview'>
         <h1 className='title'>{title.toUpperCase()}</h1>
         <div className='preview'>
            {items
            .filter((item, idx) => idx < 4)
            .map(item => (
               <CollectionItem key={item.id} item = {item}  />
            ))}
         </div>
      </div>
   )
}

export default CollectionPreview;
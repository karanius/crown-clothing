import React from "react";
import SHOPDATA from './shop.data.js'
import CollectionPreview from '../../components/preview-collection/collection-preview.component.jsx';

class ShopPage extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      collections: SHOPDATA
    }
  }

  render(){
    const {collections} = this.state;
    return(
      <div className='shop-page' >
        {
          collections.map(  ({id, ...otherCollectionProps}) => {
            return (
              <CollectionPreview key={id} {...otherCollectionProps} />
            )
          } )
        }
      </div>
    )
  }

}


export default ShopPage;
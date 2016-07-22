'use strict';

import React from 'react';
import {Image} from 'react-bootstrap';
import WishThumbnail from './wishshow/WishthumbnailComponent.js';
import WishListToolbar from './WishlisttoolbarComponent.js';

require('styles//Wishlist.sass');

let dataService = require('stores/WishDetailStore.js');

class WishlistComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      clicked: false
    }
  }

  render() {
    var wishes = dataService.getAllWishes();
    var clickHandle = this.props.clickHandle;
    var clickProfile = this.props.clickProfileHandle;
    var wishlist = wishes.map(function(wish){
      return (
        <div className="thumbnail">
          <WishThumbnail href="#" alttext={wish.name} thumbnail={wish.thumbnail} wishid={wish.id} onClick={clickHandle}/>
        </div>
      )
    })
    return (
      <div className="wishlist-component">
        <WishListToolbar clickProfile={clickProfile}/>
        <div className="wishlist">
          {wishlist}
        </div>

      </div>

    );
  }
}

WishlistComponent.displayName = 'WishlistComponent';

export default WishlistComponent;

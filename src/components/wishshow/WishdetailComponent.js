'use strict';

import React from 'react';
import Wishthumbnail from './WishthumbnailComponent.js';
import Wishitems from './WishitemsComponent.js';
import Wishsummary from './WishsummaryComponent.js';

require('styles/wishshow/Wishdetail.sass');

class WishdetailComponent extends React.Component {
  render() {
    return (
      <div className="wishdetail-component">
        <Wishthumbnail />
        <Wishitems />
        <Wishsummary />
      </div>
    );
  }
}

WishdetailComponent.displayName = 'WishshowWishdetailComponent';

// Uncomment properties you need
// WishdetailComponent.propTypes = {};
// WishdetailComponent.defaultProps = {};

export default WishdetailComponent;

'use strict';

import React from 'react';

require('styles/wishshow/Wishitems.sass');

class WishitemsComponent extends React.Component {
  render() {
    return (
      <div className="wishitems-component">
        <div className="wishitem">
          <span>名称</span>wishname
        </div>
        <div className="wishitem">
          <span>类型</span>wishtype
        </div>
        <div className="wishitem">
          <span>积分</span>wishscore
        </div>
      </div>
    );
  }
}

WishitemsComponent.displayName = 'WishshowWishitemsComponent';

// Uncomment properties you need
// WishitemsComponent.propTypes = {};
// WishitemsComponent.defaultProps = {};

export default WishitemsComponent;

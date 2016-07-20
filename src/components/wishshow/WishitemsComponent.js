'use strict';

import React from 'react';

require('styles/wishshow/Wishitems.sass');

class WishitemsComponent extends React.Component {
  render() {
    return (
      <div className="wishitems-component">
        <div className="wishitem">
          <span>名称</span>{this.props.name}
        </div>
        <div className="wishitem">
          <span>类型</span>{this.props.type}
        </div>
        <div className="wishitem">
          <span>积分</span>{this.props.score}
        </div>
      </div>
    );
  }
}

WishitemsComponent.displayName = 'WishshowWishitemsComponent';

export default WishitemsComponent;

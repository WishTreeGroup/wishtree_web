'use strict';

import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

require('styles/wishshow/Wishdetailtoolbar.sass');

class WishdetailtoolbarComponent extends React.Component {
  constructor(){
    super();
    //this.handleClickBack = this.props.clickHandle;
    //this.handleClickBack = this.handleClickBack.bind(this);
  }

  render() {
    var handleClickBack = this.props.clickHandle;
    return (
      <div className="wishdetailtoolbar-component">
       <button onClick={handleClickBack}>返回</button>
      </div>
    );
  }
}

WishdetailtoolbarComponent.displayName = 'WishshowWishdetailtoolbarComponent';

// Uncomment properties you need
// WishdetailtoolbarComponent.propTypes = {};
// WishdetailtoolbarComponent.defaultProps = {};

export default WishdetailtoolbarComponent;

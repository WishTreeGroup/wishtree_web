'use strict';

import React from 'react';


require('styles//Wishlisttoolbar.sass');

class WishlisttoolbarComponent extends React.Component {
  render() {
    var clickProfile = this.props.clickProfile;
    return (
      <div className="wishlisttoolbar-component">
        <button onClick={clickProfile}>个人</button>
      </div>
    );
  }
}

WishlisttoolbarComponent.displayName = 'WishlisttoolbarComponent';

// Uncomment properties you need
// WishlisttoolbarComponent.propTypes = {};
// WishlisttoolbarComponent.defaultProps = {};

export default WishlisttoolbarComponent;

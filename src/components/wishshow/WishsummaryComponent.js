'use strict';

import React from 'react';

require('styles/wishshow/Wishsummary.sass');

class WishsummaryComponent extends React.Component {
  render() {
    return (
      <div className="wishsummary-component">
        <p>{this.props.summary}</p>
      </div>
    );
  }
}

WishsummaryComponent.displayName = 'WishshowWishsummaryComponent';

// Uncomment properties you need
// WishsummaryComponent.propTypes = {};
// WishsummaryComponent.defaultProps = {};

export default WishsummaryComponent;

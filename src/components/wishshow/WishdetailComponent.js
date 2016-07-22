'use strict';

import React from 'react';
import Wishthumbnail from './WishthumbnailComponent.js';
import Wishitems from './WishitemsComponent.js';
import Wishsummary from './WishsummaryComponent.js';
import Wishtoolbar from './WishdetailtoolbarComponent.js';

require('styles/wishshow/Wishdetail.sass');

let dataService = require('stores/WishDetailStore');

class WishdetailComponent extends React.Component {
  constructor(){
    super();

  }
  render() {
    var wish = dataService.findById(this.props.id);
    this.state = {
      thumbnail: wish.thumbnail,
      name: wish.name,
      type: wish.type,
      score: wish.score,
      summary: wish.summary
    }
    return (
      <div className="wishdetail-component">
        <Wishtoolbar clickHandle={this.props.clickBackHandle}/>
        <Wishthumbnail thumbnail={this.state.thumbnail}/>
        <Wishitems name={this.state.name} type={this.state.type} score = {this.state.score}/>
        <Wishsummary summary={this.state.summary}/>
      </div>
    );
  }
}

WishdetailComponent.displayName = 'WishshowWishdetailComponent';

// Uncomment properties you need
// WishdetailComponent.propTypes = {};
// WishdetailComponent.defaultProps = {};

export default WishdetailComponent;

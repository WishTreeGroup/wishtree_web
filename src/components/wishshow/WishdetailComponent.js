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
        <button onClick={this.props.clickBackHandle}>返回</button>
        <div className="wishdetail">
          <div className="thumbnail">
            <Wishthumbnail id="thumbnail" thumbnail={this.state.thumbnail} alttext={this.state.name}/>
          </div>

          <Wishitems name={this.state.name} type={this.state.type} score = {this.state.score}/>

          <Wishsummary summary={this.state.summary}/>
        </div>

      </div>
    );
  }
}

WishdetailComponent.displayName = 'WishshowWishdetailComponent';

// Uncomment properties you need
// WishdetailComponent.propTypes = {};
// WishdetailComponent.defaultProps = {};

export default WishdetailComponent;

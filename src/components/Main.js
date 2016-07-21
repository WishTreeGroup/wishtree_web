require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Wishdetail from './wishshow/WishdetailComponent.js';
import Userdetail from './usershow/UserdetailComponent.js';
import Wishlist from './WishlistComponent.js';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    if(true){
      return (
        <div className="index">
          <Wishlist />
        </div>
      )
    }
    return (
      <div className="index">
        <Userdetail id="3"/>
      </div>
    )
    return (
      <div className="index">
        <Wishdetail id="3"/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

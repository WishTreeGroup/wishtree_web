require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Wishdetail from './wishshow/WishdetailComponent.js';


let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Wishdetail />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

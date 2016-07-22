'use strict';

import React from 'react';
import {Image} from 'react-bootstrap';

require('styles/wishshow/Wishthumbnail.sass');

class WishthumbnailComponent extends React.Component {
  constructor(...args){
    super(...args);
  }

  render() {
    var alttext = this.props.alttext;
    var clickHandle = this.props.onClick;
    var wishid = this.props.wishid;
    return (
      <div className="wishthumbnail-component">
        <Image className="wishthumbnail" src={this.props.thumbnail} id={wishid} alt={alttext}onClick={clickHandle} rounded/>
      </div>
    );
  }
}

WishthumbnailComponent.displayName = 'WishshowWishthumbnailComponent';


export default WishthumbnailComponent;

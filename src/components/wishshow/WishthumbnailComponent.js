'use strict';

import React from 'react';
import {Button,Collapse,Well,Fade,Image} from 'react-bootstrap';

require('styles/wishshow/Wishthumbnail.sass');

class WishthumbnailComponent extends React.Component {
  constructor(...args){
    super(...args);
  }

  render() {
    return (
      <div className="wishthumbnail-component">
        <Image className="wishthumbnail" src={this.props.thumbnail}  alt="wishsummary"responsive/>
      </div>

    );
  }
}

WishthumbnailComponent.displayName = 'WishshowWishthumbnailComponent';


export default WishthumbnailComponent;

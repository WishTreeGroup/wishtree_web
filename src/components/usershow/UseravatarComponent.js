'use strict';

import React from 'react';
import {Image} from 'react-bootstrap';

require('styles/usershow/Useravatar.sass');

class UseravatarComponent extends React.Component {
  render() {
    return (
      <div className="useravatar-component">
        <Image className="avatar" src={this.props.avatar}  alt="wishsummary"/>
      </div>
    );
  }
}

UseravatarComponent.displayName = 'UsershowUseravatarComponent';

// Uncomment properties you need
// UseravatarComponent.propTypes = {};
// UseravatarComponent.defaultProps = {};

export default UseravatarComponent;

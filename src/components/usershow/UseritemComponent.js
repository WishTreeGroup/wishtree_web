'use strict';

import React from 'react';

require('styles/usershow/Useritem.sass');

class UseritemComponent extends React.Component {
  render() {
    return (
      <div className="useritem-component">
        <span>{this.props.itemname}</span>{this.props.itemvalue}
      </div>
    );
  }
}

UseritemComponent.displayName = 'UsershowUseritemComponent';

// Uncomment properties you need
// UseritemComponent.propTypes = {};
// UseritemComponent.defaultProps = {};

export default UseritemComponent;

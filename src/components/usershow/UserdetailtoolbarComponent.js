'use strict';

import React from 'react';

require('styles/usershow/Userdetailtoolbar.sass');

class UserdetailtoolbarComponent extends React.Component {
  render() {
    var clickBack = this.props.clickBack;
    return (
      <div className="userdetailtoolbar-component">
        <button onClick={clickBack}>返回</button>
      </div>
    );
  }
}

UserdetailtoolbarComponent.displayName = 'UsershowUserdetailtoolbarComponent';

// Uncomment properties you need
// UserdetailtoolbarComponent.propTypes = {};
// UserdetailtoolbarComponent.defaultProps = {};

export default UserdetailtoolbarComponent;

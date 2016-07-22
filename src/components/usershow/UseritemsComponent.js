'use strict';

import React from 'react';
import UserItem from './UseritemComponent.js';

require('styles/usershow/Useritems.sass');

class UseritemsComponent extends React.Component {
  render() {
    var items = this.props.items;
    var itemlist = items.map(function(item){
      return (
        <UserItem className="useritem-component" itemname={item.itemname} itemvalue={item.itemvalue}/>
      )
    })
    return (
      <div className="useritems-component">
        {itemlist}
      </div>
    );
  }
}

UseritemsComponent.displayName = 'UsershowUseritemsComponent';

// Uncomment properties you need
// UseritemsComponent.propTypes = {};
// UseritemsComponent.defaultProps = {};

export default UseritemsComponent;

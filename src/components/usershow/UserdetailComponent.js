'use strict';

import React from 'react';
import UserAvatar from './UseravatarComponent.js';
import UserItems from './UseritemsComponent.js';
import UserToolbar from './UserdetailtoolbarComponent.js';
require('styles/usershow/Userdetail.sass');


let dataService = require('stores/UserDetailStore');

class UserdetailComponent extends React.Component {
  constructor(){
    super();

  }
  render() {
    var user = dataService.findById(this.props.id);
    var clickBackHandle = this.props.clickBackHandle;
    this.state = {
      avatar: user.avatar,
      items:  [
        {itemname: "account", itemvalue: user.account},
        {itemname: "level", itemvalue: user.level}
      ]
    }
    return (
      <div className="userdetail-component">
        <UserToolbar clickBack={clickBackHandle}/>
         <div className="userdetail">
           <UserAvatar avatar={this.state.avatar}/>
           <UserItems className="useritems" items={this.state.items}/>
         </div>

      </div>
    );
  }
}

UserdetailComponent.displayName = 'UsershowUserdetailComponent';



export default UserdetailComponent;

'use strict';

import React from 'react';
import UserAvatar from './UseravatarComponent.js';
import UserItem from './UseritemComponent.js';
require('styles/usershow/Userdetail.sass');


let dataService = require('stores/UserDetailStore');

class UserdetailComponent extends React.Component {
  render() {
    var user = dataService.findById(this.props.id);
    this.state = {
      avatar: user.avatar,
      account: user.account,
      level: user.level
    }
    return (
      <div className="userdetail-component">
        <UserAvatar avatar={this.state.avatar}/>
        <UserItem  itemname="acount" itemvalue={this.state.account} />
        <UserItem  itemname="level" itemvalue={this.state.level} />
      </div>
    );
  }
}

UserdetailComponent.displayName = 'UsershowUserdetailComponent';



export default UserdetailComponent;

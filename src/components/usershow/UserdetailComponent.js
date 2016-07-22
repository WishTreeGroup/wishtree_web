'use strict';

import React from 'react';
import UserAvatar from '../wishshow/WishthumbnailComponent.js';
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
        {itemname: "帐号", itemvalue: user.account},
        {itemname: "等级", itemvalue: user.level}
      ]
    }
    return (
      <div className="userdetail-component">
        <UserToolbar clickBack={clickBackHandle}/>


         <div className="userdetail">
           <div className="thumbnail">
             <UserAvatar thumbnail={this.state.avatar}/>
           </div>

           <UserItems className="useritems" items={this.state.items}/>
         </div>

      </div>
    );
  }
}

UserdetailComponent.displayName = 'UsershowUserdetailComponent';



export default UserdetailComponent;

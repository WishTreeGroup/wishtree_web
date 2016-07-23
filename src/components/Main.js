require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Wishdetail from './wishshow/WishdetailComponent.js';
import Userdetail from './usershow/UserdetailComponent.js';
import Wishlist from './WishlistComponent.js';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      page: "wishlist",
      wishid: null,
      userid: null
    };
    this.clickWishHandle = this.clickWishHandle.bind(this);
    this.clickBackHandle = this.clickBackHandle.bind(this);
    this.clickProfileHandle = this.clickProfileHandle.bind(this);
  }
  clickWishHandle (e){
    //alert(e.target.id);
    this.setState({
      wishid: e.target.id,
      page: "wishdetail"
    });
  }
  clickBackHandle(e){
    //console.log(e.target)
    this.setState({
      page: "wishlist"
    });
  }

  clickProfileHandle(e){
    this.setState({
      page: "userdetail",
      userid: 3
    });
  }

  render() {
    switch (this.state.page){
      case "wishlist":
            return (
              <div>
                <Wishlist clickHandle={this.clickWishHandle} clickProfileHandle={this.clickProfileHandle}/>
              </div>
            );
      case "wishdetail":
            return (
              <div className="index">
                <Wishdetail id={this.state.wishid} clickBackHandle={this.clickBackHandle} />
              </div>
            );
      case "userdetail":
            return (
              <div className="index">
                <Userdetail id={this.state.userid} clickBackHandle={this.clickBackHandle}/>
              </div>
            )
    }

  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

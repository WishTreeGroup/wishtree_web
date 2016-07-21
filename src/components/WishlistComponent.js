'use strict';

import React from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';

require('styles//Wishlist.sass');

let dataService = require('stores/WishDetailStore.js');

class WishlistComponent extends React.Component {
  render() {
    var wishes = dataService.getAllWishes();
    var wishlist = wishes.map(function(wish){
      return (
        <Col xs={6} md={3}>
          <Thumbnail href="#" alt={wish.name} src={wish.thumbnail} />
        </Col>
      )
    })
    return (
      <Grid>
        <Row>
          {wishlist}
        </Row>
      </Grid>
    );
  }
}

WishlistComponent.displayName = 'WishlistComponent';

// Uncomment properties you need
// WishlistComponent.propTypes = {};
// WishlistComponent.defaultProps = {};

export default WishlistComponent;

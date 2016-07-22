/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import UseritemsComponent from 'components/usershow/UseritemsComponent.js';

describe('UseritemsComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(UseritemsComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('useritems-component');
  });
});

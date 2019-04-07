import React from 'react';
import MyComponent from './MyComponent.js';
import Frag from './Frag.js';
import './App.less';

export default () => (
  <div>
    <div>Other Content</div>
    <MyComponent>
      <Frag slot="footer">Footer Content</Frag>
      {/* `<Frag>` is equivalent to `<Frag slot="default">`  */}
      <Frag>
        <p>paragraph1</p>
        <p>paragraph2</p>
      </Frag>
      <h3 slot="header">Header Content</h3>
    </MyComponent>
  </div>
);

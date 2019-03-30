import React from 'react';
import MyComponent from './MyComponent.js';
import Frag from './Frag.js';
import './App.less';

export default () => (
  <div>
    <h1>Title</h1>
    <MyComponent>
      <h3 slot="header">Header Content</h3>
      {/* `<Frag>` is equivalent to `<Frag slot="default">`  */}
      <Frag>
        <p>paragraph1</p>
        <p>paragraph2</p>
      </Frag>
      <Frag slot="footer">Footer Content</Frag>
    </MyComponent>
  </div>
);

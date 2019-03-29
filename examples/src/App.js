import React from 'react';
import MyComponent from './MyComponent.js';
import './App.less';

export default () => (
  <div className="app">
    <MyComponent>
      <h1 slot="header">Header Content</h1>
      <React.Fragment>
        <p>paragraph1</p>
        <p>paragraph2</p>
      </React.Fragment>
      <div slot="footer">Footer Content</div>
    </MyComponent>
  </div>
);

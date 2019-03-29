import React from 'react';
import MyComponent from './MyComponent.js';
import './App.less';

export default () => (
  <div className="app">
    <MyComponent>
      <h1 slot="header">Header Content</h1>
      <p className="body">Body Content</p>
      <div slot="footer">Footer Content</div>
    </MyComponent>
  </div>
);

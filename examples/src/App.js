import React from "react";
import MyComponent from "./MyComponent.js";
import Frag from "./Frag.js";
import "./App.less";

export default () => (
  <div className="app">
    <MyComponent>
      <h1 slot="header">Header Content</h1>
      <Frag>
        <p>paragraph1</p>
        <p>paragraph2</p>
      </Frag>
      <Frag slot="footer">Footer Content</Frag>
    </MyComponent>
  </div>
);

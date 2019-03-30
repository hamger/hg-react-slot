import React from "react";
import MyComponent from "./MyComponent.js";
import Frag from "./Frag.js";
import "./App.less";

export default () => (
  <div className="app">
    <MyComponent>
      <h1 slot="header">Header Content</h1>
      <Frag slot="default">
        <p>paragraph1</p>
        <p>paragraph2</p>
      </Frag>
      <Frag slot="default2">paragraph1paragraph2</Frag>
      <div slot="footer">Footer Content</div>
    </MyComponent>
  </div>
);

import React, { Component } from 'react';
import Comp from './Comp.js';
import './App.less';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Comp>
          <div slot="header">
            <h1>这里可能是一个页面标题</h1>
          </div>
          <div className="body">
            <p>主要内容的一个段落。</p>
            <p>另一个段落。</p>
            <p>另一个段落。</p>
          </div>
          <div slot="footer">
            <p>这里有一些联系信息</p>
          </div>
        </Comp>
      </div>
    );
  }
}

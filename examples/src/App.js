import React, { Component } from 'react';
import { ToSlot, withSlot } from '@';
import Comp from './Comp.js';

const CompS = withSlot(Comp);

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <CompS>
          <ToSlot slot="header">
            <h1>这里可能是一个页面标题</h1>
          </ToSlot>
          <ToSlot>
            <p>主要内容的一个段落。</p>
            <p>另一个段落。</p>
            <p>另一个段落。</p>
          </ToSlot>
          <ToSlot slot="footer">
            <p>这里有一些联系信息</p>
          </ToSlot>
        </CompS>
      </div>
    );
  }
}

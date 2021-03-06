# hg-react-slot

![build](https://travis-ci.org/hamger/hg-react-slot.svg?branch=master)
[![codecov](https://codecov.io/gh/hamger/hg-react-slot/branch/master/graph/badge.svg)](https://codecov.io/gh/hamger/hg-react-slot)
![NPM](https://img.shields.io/npm/l/hg-react-slot.svg?color=orange)
[![npm](https://img.shields.io/npm/v/hg-react-slot.svg?color=blue)](https://www.npmjs.com/package/hg-react-slot)

A React implementation of slots.

## Install

```bash
yarn add hg-react-slot
```

or with npm:

```bash
npm install --save hg-react-slot
```

## Usage

Create a component with `hg-react-slot` :

```js
// MyComponent.js
import React from "react";
import { Slot, withSlot } from "hg-react-slot";

const MyComponent = () => (
  <div>
    <header>
      <Slot name="header" />
      {/* `<span>anonymity</span>` will be defalut content for Slot(author) */}
      <Slot name="author">
        <span>anonymity</span>
      </Slot>
    </header>
    <main>
      {/* `<Slot />` is equivalent to `<Slot name="default" />`  */}
      <Slot />
    </main>
    <footer>
      <Slot name="footer" />
    </footer>
  </div>
);

export default withSlot(MyComponent);
```

In other components, you can use `MyComponent` like this:

```js
// App.js
import React from "react";
import MyComponent from "./MyComponent.js";

// Because React.Fragment can only have `key` and `children` props,
// if you need to use React.Fragment, you should create a component like this:
const Frag = ({ children }) => <React.Fragment>{children}</React.Fragment>;

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
```

After running the above code, resulting HTML is:

```html
<div>
  <div>Other Content</div>
  <div>
    <header>
      <h3 slot="header">Header Content</h3>
      <span>anonymity</span>
    </header>
    <main>
      <p>paragraph1</p>
      <p>paragraph2</p>
    </main>
    <footer>Footer Content</footer>
  </div>
</div>
```

## Change Log

### 2019.4.7

> v0.2.3 Update README

### 2019.3.30

> v0.2.2 Add travis-ci and codecov

### 2019.3.29

> v0.2.0 Add unit test

### 2019.3.28

> v0.1.0 Initialize project

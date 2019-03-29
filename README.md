# hg-react-slot

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
    </header>
    <main>
      <Slot />
    </main>
    <footer>
      <Slot name="footer" />
    </footer>
  </div>
);

export default withSlot(MyComponent);
```

> `<Slot />` is equivalent to `<Slot name="default" />`.

In other components, you can use `MyComponent` like this:

```js
// App.js
import React from "react";
import MyComponent from "./MyComponent.js";

export default () => (
  <div>
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
```

## Change Log

### 2019.3.29

> v0.2.0 Add unit test

### 2019.3.28

> v0.1.0 Initialize project

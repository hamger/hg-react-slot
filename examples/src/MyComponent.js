import React from 'react';
import { Slot, withSlot } from '@';

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

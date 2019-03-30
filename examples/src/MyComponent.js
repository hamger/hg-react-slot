import React from 'react';
import { Slot, withSlot } from '@';

const MyComponent = () => (
  <div>
    <header>
      <Slot name="header" />
    </header>
    <main>
      <Slot />
      <Slot name="default2" />
    </main>
    <footer>
      <Slot name="footer" />
    </footer>
  </div>
);

export default withSlot(MyComponent);

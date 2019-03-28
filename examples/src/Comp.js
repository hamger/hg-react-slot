import React from 'react';
import { Slot, withSlot } from '@';

const Comp = () => (
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

export default withSlot(Comp);

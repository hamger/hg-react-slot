import React from 'react';
import { Slot } from '@';

export default () => (
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

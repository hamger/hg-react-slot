/* eslint-env jest */
import React from 'react';
import { Slot, withSlot } from '../index';
import renderer from 'react-test-renderer';
import SlotComponent from '../Slot';
import withSlotFunc from '../withSlot';

describe('index.js', () => {
  it('should correctly export all component as named export', () => {
    expect(Slot).toEqual(SlotComponent);
    expect(withSlot).toEqual(withSlotFunc);
  });
});

const MyComponent = withSlot(() => (
  <div>
    <header>
      <Slot name="header" />
    </header>
    <main>
      <Slot />
      <Slot name="main" />
    </main>
    <footer>
      <Slot name="footer" />
    </footer>
  </div>
));

describe('withSlot', () => {
  beforeAll(() => {
    // eslint-disable-next-line no-console
    console.error = error => {
      throw new Error(error);
    };
  });

  it('should accept children with slot', () => {
    expect(
      renderer
        .create(
          <MyComponent>
            <h1 slot="header">Header Content</h1>
            Body Content
            <React.Fragment>Body Content2</React.Fragment>
            <div slot="footer">Footer Content</div>
          </MyComponent>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });

  it('should throw error when use duplicate slot name', () => {
    expect(() => {
      renderer.create(
        <MyComponent>
          <h1>Header Content</h1>
          <div slot="default">Header Content2</div>
        </MyComponent>,
      );
    }).toThrowError(new Error('Slot(default) has been occupied'));
  });
});

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
    </main>
    <footer>
      <Slot name="footer" />
    </footer>
  </div>
));

function expectToMatchSnapshot(component) {
  expect(renderer.create(component).toJSON()).toMatchSnapshot();
}

describe('withSlot', () => {
  beforeAll(() => {
    // eslint-disable-next-line no-console
    console.error = error => {
      throw new Error(error);
    };
  });

  // it("should have sane defaults", () => {
  //   expectToMatchSnapshot(<MyComponent />);
  // });

  it('should accept children with slot', () => {
    expectToMatchSnapshot(
      <MyComponent>
        <h1 slot="header">Header Content</h1>
        Body Content2
        <div slot="footer">Footer Content</div>
      </MyComponent>,
    );
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

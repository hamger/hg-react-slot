/* eslint-env jest */
import { Slot, withSlot } from '../index';
import SlotComponent from '../components/Slot';
import withSlotFunc from '../components/withSlot';

describe('index.js', () => {
  it('should correctly export all component as named export', () => {
    expect(Slot).toEqual(SlotComponent);
    expect(withSlot).toEqual(withSlotFunc);
  });
});

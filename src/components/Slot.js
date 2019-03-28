import PropTypes from 'prop-types';
import React from 'react';
import { Consumer } from './withSlot';

// eslint-disable-next-line react/prop-types
const Slot = ({ name, children }) => (
  <Consumer>
    {context => {
      const toSlotContent = context.getToSlotContent(name);
      return (toSlotContent && toSlotContent()) || children || null;
    }}
  </Consumer>
);

Slot.displayName = 'Slot';
Slot.propTypes = { name: PropTypes.string };
Slot.defaultProps = { name: 'default' };

export default Slot;

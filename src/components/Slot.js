import PropTypes from 'prop-types';
import React from 'react';
import { Consumer } from './withSlot';

const Slot = ({ name, children }) => (
  <Consumer>
    {context => {
      const toSlotContent = context.getToSlotContent(name);
      return (toSlotContent && toSlotContent()) || children || null;
    }}
  </Consumer>
);

Slot.displayName = 'Slot';
Slot.propTypes = { name: PropTypes.string, children: PropTypes.node };
Slot.defaultProps = { name: 'default' };

export default Slot;

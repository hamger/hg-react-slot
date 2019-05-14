import React from 'react';

export const { Provider, Consumer } = React.createContext();

function getDisplayName(component) {
  return component.displayName || component.name || 'component';
}

export default WrappedComponent =>
  class extends React.Component {
    static displayName = `withSlot(${getDisplayName(WrappedComponent)})`;

    slotContent = {};

    // get the content of slots
    getSlotContent = name => {
      if (!this.slotContent[name]) return undefined;
      return () => this.slotContent[name];
    };

    render() {
      const { children, ...restProps } = this.props;

      if (children) {
        this.slotContent = {};
        children.forEach(item => {
          if (!React.isValidElement(item)) return;
          const slotName = item.props.slot || 'default';
          if (slotName in this.slotContent) {
            throw new Error(`Slot(${slotName}) has been occupied`);
          }
          this.slotContent[slotName] = item;
        });
      }

      return (
        <Provider value={{ getSlotContent: this.getSlotContent }}>
          <WrappedComponent {...restProps} />
        </Provider>
      );
    }
  };

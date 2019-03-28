import React from 'react';

export const { Provider, Consumer } = React.createContext();

function getDisplayName(component) {
  return component.displayName || component.name || 'component';
}

export default WrappedComponent =>
  class extends React.Component {
    static displayName = `withSlot(${getDisplayName(WrappedComponent)})`;

    // 用于保存每个 <ToSlot /> 的内容
    toSlotContent = {};

    // 获取 ToSlot 的内容
    getToSlotContent = name => {
      if (!this.toSlotContent[name]) return undefined;
      return () => this.toSlotContent[name];
    };

    render() {
      // eslint-disable-next-line react/prop-types
      const { children, ...restProps } = this.props;

      if (children) {
        const arr = React.Children.toArray(children);
        this.toSlotContent = {};
        arr.forEach(item => {
          if (item.type.displayName === 'ToSlot') {
            const slotName = item.props.slot || 'default';
            if (slotName in this.toSlotContent) {
              throw new Error(`Slot(${slotName}) has been occupied`);
            }
            this.toSlotContent[slotName] = item.props.children;
          }
        });
      }

      return (
        <Provider value={{ getToSlotContent: this.getToSlotContent }}>
          <WrappedComponent {...restProps} />
        </Provider>
      );
    }
  };

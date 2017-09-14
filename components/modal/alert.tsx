import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import { Action } from './PropsType';

export default function alert(
  title, message, actions = [{ text: '确定' }], platform = 'ios',
) {

  if (!title && !message) {
    // console.log('Must specify either an alert title, or message, or both');
    return {
      close: () => {},
    };
  }

  const prefixCls = 'am-modal';
  let div: any = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  const footer = actions.map((button: Action) => {
    const orginPress = button.onPress || function() {};
    button.onPress = () => {
      const res = orginPress();
      if (res && res.then) {
        res.then(() => {
          close();
        });
      } else {
        close();
      }
    };
    return button;
  });

  ReactDOM.render(
    <Modal
      visible
      transparent
      prefixCls={prefixCls}
      title={title}
      transitionName="am-zoom"
      closable={false}
      maskClosable={false}
      footer={footer}
      maskTransitionName="am-fade"
      platform={platform}
    >
      <div style={{ zoom: 1, overflow: 'hidden' }}>{message}</div>
    </Modal>, div,
  );

  return {
    close,
  };
}

---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---


````jsx
/* eslint global-require: 0 */
import { ActionSheet, Button, Toast } from 'antd-mobile';

// fix touch to scroll background page on iOS
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

const customIcon = (src, name) => <img src={src} alt={name} className={name} />;
const iconList = [
  { icon: customIcon('https://zos.alipayobjects.com/rmsportal/WmEzpOsElbbvgmrexFSH.png', 'img'), title: '发送给朋友' },
  { icon: customIcon('https://zos.alipayobjects.com/rmsportal/HssPJKvrjEByyVWJIFwl.png', 'img'), title: '新浪微博' },
  { icon: customIcon('https://zos.alipayobjects.com/rmsportal/HCGowLrLFMFglxRAKjWd.png', 'img'), title: '生活圈' },
  { icon: customIcon('https://zos.alipayobjects.com/rmsportal/LeZNKxCTkLHDWsjFfqqn.png', 'img'), title: '微信好友' },
  { icon: customIcon('https://zos.alipayobjects.com/rmsportal/YHHFcpGxlvQIqCAvZdbw.png', 'img'), title: 'QQ' },
  { icon: customIcon('https://gw.alipayobjects.com/zos/rmsportal/VgOeEwrQxpfxxoxDhhRu.svg', 'icon'), title: '刷新' },
  { icon: customIcon('https://gw.alipayobjects.com/zos/rmsportal/QcRdiavUOhCmQjvQHVqt.svg', 'icon'), title: '链接' },
  { icon: customIcon('https://gw.alipayobjects.com/zos/rmsportal/cVeaIFCKBHUjLROxfysg.svg', 'icon'), title: '投诉' },
];

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: 'none',
      clicked1: 'none',
      clicked2: 'none',
    };
  }
  showActionSheet = () => {
    const BUTTONS = ['Operation1', 'Operation2', 'Operation2', 'Delete', 'Cancel'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      // title: 'title',
      message: 'I am description, description, description',
      maskClosable: true,
      'data-seed': 'logId',
      wrapProps,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  }
  showShareActionSheet = () => {
    const icons = [...iconList];
    icons.length = 4;
    ActionSheet.showShareActionSheetWithOptions({
      options: icons,
      // title: 'title',
      message: 'I am description, description, description',
      className: 'my-action-sheet',
    },
    (buttonIndex) => {
      this.setState({ clicked1: buttonIndex > -1 ? icons[buttonIndex].title : 'cancel' });
      // also support Promise
      return new Promise((resolve) => {
        Toast.info('closed after 1000ms');
        setTimeout(resolve, 1000);
      });
    });
  }
  showShareActionSheetMulpitleLine = () => {
    const icons = [[...iconList], [iconList[5], iconList[6], iconList[7]]];
    ActionSheet.showShareActionSheetWithOptions({
      options: icons,
      // title: 'title',
      message: 'I am description, description, description',
      className: 'my-action-sheet',
    },
    (buttonIndex, rowIndex) => {
      this.setState({ clicked2: buttonIndex > -1 ? icons[rowIndex][buttonIndex].title : 'cancel' });
    });
  }
  render() {
    return (<div className="actionSheetContainer">
      <div style={{ margin: '7.5px 0' }}>
        <Button onClick={this.showActionSheet}>showActionSheet</Button>
      </div>
      <div style={{ margin: '7.5px 0' }}>
        <Button onClick={this.showShareActionSheet}>showShareActionSheet</Button>
      </div>
      <div style={{ margin: '7.5px 0' }}>
        <Button onClick={this.showShareActionSheetMulpitleLine}>showShareActionSheetMulpitleLine</Button>
      </div>
    </div>);
  }
}

ReactDOM.render(<Test />, mountNode);
````

````css
.actionSheetContainer {
  margin: 0 15px;
}

.my-action-sheet .am-action-sheet-share-list-item-icon .img {
  width: 36px;
}
.my-action-sheet .am-action-sheet-share-list-item-icon .icon {
  width: 22px;
  height: 22px;
}
````

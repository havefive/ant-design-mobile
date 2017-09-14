import React from 'react';
import Tabs from '../tabs';
import Tab from './Tab';
import getDataAttr from '../_util/getDataAttr';
import { TabBarProps, TabBarItemProps } from './PropsType';

export class Item extends React.Component<TabBarItemProps, any> {
  render() {
    return <div>{this.props.children}</div>;
  }
}

class AntTabBar extends React.Component<TabBarProps, any> {
  static defaultProps = {
    prefixCls: 'am-tab-bar',
    barTintColor: 'white',
    tintColor: '#108ee9',
    hidden: false,
    unselectedTintColor: '#888',
    placeholder: '正在加载',
  };

  public static Item = Item;

  getTabs = () => {
    return React.Children.map(this.props.children, (c: any) => {
      return {
        ...c.props as TabBarItemProps,
      };
    });
  }

  renderTabBar = () => {
    const { barTintColor, hidden, prefixCls, tintColor, unselectedTintColor } = this.props;
    const barCls = hidden ? `${prefixCls}-bar-hidden` : `${prefixCls}-bar`;
    const tabsData = this.getTabs();

    const content = tabsData.map((cProps, index) => {
      return <Tab
        key={index}
        prefixCls={`${this.props.prefixCls}-tab`}
        badge={cProps.badge}
        dot={cProps.dot}
        selected={cProps.selected}
        icon={cProps.icon}
        selectedIcon={cProps.selectedIcon}
        title={cProps.title}
        tintColor={tintColor}
        unselectedTintColor={unselectedTintColor}
        dataAttrs={getDataAttr(cProps)}
        onClick={() => cProps.onPress && cProps.onPress()}
      />;
    });
    return <div className={barCls} style={{ backgroundColor: barTintColor }}>
      {content}
    </div>;
  }

  render() {
    const { children } = this.props;
    const tabs = this.getTabs();
    let activeIndex = 0;
    tabs.forEach((tab, index) => {
      if (tab.selected) {
        activeIndex = index;
      }
    });

    return (
      <div className={this.props.prefixCls}>
        <Tabs
          tabs={tabs}
          renderTabBar={this.renderTabBar}
          tabBarPosition="bottom"
          page={activeIndex < 0 ? undefined : activeIndex}
          animated={false}
          swipeable={false}
        >
          {children}
        </Tabs>
      </div>
    );
  }
}

export default AntTabBar;

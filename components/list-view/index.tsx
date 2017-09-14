import React from 'react';
import MListView from 'rmc-list-view';
import tsPropsType from './PropsType';
import handleProps from './handleProps';
import IndexedList from './Indexed';

export default class ListView extends React.Component<tsPropsType, any> {
  static defaultProps = {
    prefixCls: 'am-list-view',
    listPrefixCls: 'am-list',
  };
  static DataSource = MListView.DataSource;
  static IndexedList = IndexedList;

  listviewRef: any;

  scrollTo = (...args) => this.listviewRef.scrollTo(...args);
  getInnerViewNode = () => this.listviewRef.getInnerViewNode();

  render() {
    const { restProps, extraProps } = handleProps(this.props, false);
    let { useZscroller, refreshControl } = this.props;
    if (refreshControl) {
      useZscroller = true;
    }
    return <MListView ref={el => this.listviewRef = el} {...restProps} {...extraProps} useZscroller={useZscroller} />;
  }
}

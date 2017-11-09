/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import PropTypes from 'prop-types';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import { formatFn } from './utils';
import BasePropsType from './PropsType';
import { getComponentLocale } from '../_util/getLocale';

export interface PropsType extends BasePropsType {
  prefixCls?: string;
  className?: string;
  use12Hours?: boolean;
  pickerPrefixCls?: string;
  popupPrefixCls?: string;
  onOk?: (x: any) => void;
}
export default class DatePicker extends React.Component<PropsType, any> {
  static defaultProps = {
    mode: 'datetime',
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    popupPrefixCls: 'am-picker-popup',
    minuteStep: 1,
    use12Hours: false,
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  private scrollValue: any;

  setScrollValue = (v: any) => {
    this.scrollValue = v;
  }

  onOk = (v: any) => {
    if (this.scrollValue !== undefined) {
      v = this.scrollValue;
    }
    if (this.props.onChange) {
      this.props.onChange(v);
    }
    if (this.props.onOk) {
      this.props.onOk(v);
    }
  }

  fixOnOk = (picker: any) => {
    if (picker) {
      picker.onOk = this.onOk;
    }
  }

  render() {
    const { props, context } = this;
    const { children, value, popupPrefixCls } = props;
    const locale = getComponentLocale(props, context, 'DatePicker', () => require('./locale/zh_CN'));
    const { okText, dismissText, extra, DatePickerLocale } = locale;

    const dataPicker = (
      <RCDatePicker
        minuteStep={props.minuteStep}
        locale={DatePickerLocale}
        minDate={props.minDate}
        maxDate={props.maxDate}
        mode={props.mode}
        pickerPrefixCls={props.pickerPrefixCls}
        prefixCls={props.prefixCls}
        defaultDate={value}
        use12Hours={props.use12Hours}
        onValueChange={props.onValueChange}
        onScrollChange={this.setScrollValue}
      />
    );

    return (
      <PopupDatePicker
        datePicker={dataPicker}
        WrapComponent="div"
        transitionName="am-slide-up"
        maskTransitionName="am-fade"
        {...props}
        prefixCls={popupPrefixCls}
        date={value}
        dismissText={this.props.dismissText || dismissText}
        okText={this.props.okText || okText}
        ref={this.fixOnOk}
      >
        {
          children && React.cloneElement(
            children,
            { extra: value ? formatFn(this, value) : (this.props.extra || extra) },
          )
        }
      </PopupDatePicker>
    );
  }
}

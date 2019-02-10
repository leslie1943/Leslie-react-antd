import React, { Component } from 'react';
import { Form, TimePicker, Button, Switch, message, Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import moment from 'moment';

class TimePickerAddonDemo extends Component {
  state = { open: false }

  handleOpenChange = (open) => {
    this.setState({ open })
  }
  handleClose = () => {
    this.setState({ open: false })
  }
  onChange = (value) => {
    message.info(JSON.stringify(value))
    console.info(value)
  }

  render() {
    return (
      <TimePicker
        open={this.state.open}
        onChange={this.onChange}
        onOpenChange={this.handleOpenChange}
        addon={() => (
          <Button type="primary" size="small" onClick={this.handleClose}>OK</Button>
        )}
      >

      </TimePicker>
    )
  }
}

@Form.create()
class TimePickerDemo extends Component {
  state = {
    value: null,
  }


  onChange = (value) => {
    message.info(JSON.stringify(value))
    this.setState({ value })
  }

  onChange2 = (value) => {
    console.info(value)
    message.info(JSON.stringify(value))
  }

  render() {
    const format = 'HH:mm';
    return (
      <PageHeaderWrapper title="Antd demo - time picker" content="time picker" >
        <TimePicker onChange={this.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}></TimePicker>
        <Divider />
        <TimePicker value={this.state.value} onChange={this.onChange}></TimePicker>
        <Divider />
        <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
        <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
        <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
        <Divider />
        <TimePicker defaultValue={moment('12:08', format)} format={format} />
        <Divider />
        <TimePicker minuteStep={15} secondStep={10} />
        <Divider />
        {/* 12 小时制的时间选择器,默认的 format 为 h:mm:ss a */}
        <TimePicker use12Hours onChange={this.onChange2} />
        <TimePicker use12Hours format='h:mm:ss A' onChange={this.onChange2} />
        <TimePicker use12Hours format='h:mm a' onChange={this.onChange2} />
        <Divider />
        <TimePickerAddonDemo />

      </PageHeaderWrapper >
    )
  }
}

export default TimePickerDemo
import React, { Component } from 'react';
import { Form, Calendar, Badge, Divider, Alert } from 'antd';
import moment from 'moment'
import PageHeaderWrapper from '@/components/PageHeaderWrapper';


@Form.create()
class CalendarDemo extends Component {
  state = {
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  }

  onPanelChange = (value) => {
    console.info(value)
    this.setState({
      value
    })
  }
  onSelect = (value) => {
    console.info(value.format('YYYY-MM-DD'))
    this.setState({
      value,
      selectedValue: value
    })
  }
  render() {
    const { value, selectedValue } = this.state
    return (
      <PageHeaderWrapper title="Antd demo - calendar" content="calendar">
        <Calendar onPanelChange={this.onPanelChange} />
        <Divider />
        <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar fullscreen={false} onPanelChange={this.onPanelChange} onSelect={this.onSelect} />
        </div>,
      </PageHeaderWrapper >
    )
  }
}

export default CalendarDemo
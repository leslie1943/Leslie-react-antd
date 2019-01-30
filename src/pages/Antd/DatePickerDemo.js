import React, { Component } from 'react';
import { connect } from 'dva';
import { DatePicker, Form, message, Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import MainControlled from './components/MainControlled';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const dateFormat = "YYYY/MM/DD"
import moment from 'moment'
@Form.create()
class DatePickerDemo extends Component {
  constructor(props) {
    super(props)
    console.info(this.props.form);
  }

  firstChange = (date, dateString) => {
    console.info(date);
    console.info(dateString);
  }
  range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i)
    }
    return result;
  }
  disabledDate = (current) => {
    return current && current < moment().endOf('day')
  }
  disabledTime = () => {
    return {
      disabledHours: () => this.range(0, 24).splice(4, 20),
      disabledMinutes: () => this.range(30, 60),
      disabledSeconds: () => [55, 56]
    }
  }
  disabledRangeTime = (_, type) => {
    if (type == 'start') {
      return {
        disabledHours: () => this.range(0, 24).splice(4, 20),
        disabledMinutes: () => this.range(30, 60),
        disabledSeconds: () => [55, 56]
      }
    }
    return {
      disabledHours: () => this.range(0, 24).splice(20, 4),
      disabledMinutes: () => this.range(0, 31),
      disabledSeconds: () => [55, 56]
    }
  }

  render() {
    return (
      <PageHeaderWrapper title="Antd demo - date picker" content="date picker">
        <DatePicker size="large" onChange={this.firstChange} format={dateFormat}></DatePicker><br /><br />
        <DatePicker onChange={this.firstChange}
          dateRender={(current => {
            const style = {}
            if (current.date() === 1) {
              style.border = '1px solid #1890ff';
              style.borderRadius = '50%';
            }
            return <div className="ant-calendar-date" style={style}>
              {current.date()}
            </div>
          })}
        ></DatePicker><br /><br />
        <DatePicker defaultValue={moment(new Date(), 'YYYY-MM-DD')} onChange={this.firstChange} disabled></DatePicker><br /><br />

        <RangePicker onChange={this.firstChange}></RangePicker ><br /><br />
        <MonthPicker placeholder="Select month" onChange={this.firstChange}></MonthPicker><br /><br />
        <WeekPicker placeholder="Select week" onChange={this.firstChange}></WeekPicker><br /><br />

        <Divider>不可用日期时间</Divider>
        <DatePicker
          format="YYYY-MM-DD HH:mm:ss"
          disabledDate={this.disabledDate}
          disabledTime={this.disabledTime}
          showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
        ></DatePicker>
        <Divider>不可用Month</Divider>
        <MonthPicker disabledDate={this.disabledDate}></MonthPicker >
        <Divider>不可用Range</Divider>
        <RangePicker
          disabledDate={this.disabledDate}
          disabledTime={this.disabledRangeTime}
          showTime={{
            hideDisabledOptions: true,
            defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')]
          }}
          format="YYYY-MM-DD HH:mm:ss"></RangePicker>

        <Divider>mode and showTime</Divider>
        <DatePicker format="YYYY-MM-DD HH:mm:ss" mode="time" showTime></DatePicker>
        <Divider></Divider>
        <MainControlled></MainControlled>
      </PageHeaderWrapper>
    )
  }
}

export default DatePickerDemo
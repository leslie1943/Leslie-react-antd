import React, { Component } from 'react';
import { Form, Calendar, Badge, Divider, Alert } from 'antd';
import moment from 'moment';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './Calendar.less';

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className={styles['events']}>
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className={styles['notes-month']}>
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

@Form.create()
class CalendarDemo extends Component {
  state = {
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  };

  onPanelChange = value => {
    console.info(value);
    this.setState({
      value,
    });
  };
  onSelect = value => {
    console.info(value.format('YYYY-MM-DD'));
    this.setState({
      value,
      selectedValue: value,
    });
  };
  render() {
    const { value, selectedValue } = this.state;
    return (
      <PageHeaderWrapper title="Antd demo - calendar" content="calendar">
        <Calendar onPanelChange={this.onPanelChange} />
        <Divider>with detail</Divider>
        <Calendar
          dateCellRender={dateCellRender}
          monthCellRender={monthCellRender}
          onPanelChange={this.onPanelChange}
          onSelect={this.onSelect}
        />
        <Divider />
        <Alert
          message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar
            fullscreen={false}
            onPanelChange={this.onPanelChange}
            onSelect={this.onSelect}
          />
        </div>
        ,
      </PageHeaderWrapper>
    );
  }
}

export default CalendarDemo;

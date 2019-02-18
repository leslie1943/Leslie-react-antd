import React, { Component } from 'react';
import { Form, Button, Icon, message, Radio, Tabs, Divider, Select } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Clock from '@/components/Clock';

const TabPane = Tabs.TabPane
const Option = Select.Option;

class TabPosition extends React.Component {
  state = {
    tabPosition: 'top',
  }

  changeTabPosition = (tabPosition) => {
    this.setState({ tabPosition });
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          Tab position：
          <Select
            value={this.state.tabPosition}
            onChange={this.changeTabPosition}
            dropdownMatchSelectWidth={false}
          >
            <Option value="top">top</Option>
            <Option value="bottom">bottom</Option>
            <Option value="left">left</Option>
            <Option value="right">right</Option>
          </Select>
        </div>
        <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab="Tab 1" key="1">Content of Tab 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab 3</TabPane>
        </Tabs>
      </div>
    )
  }
}

class SlidingTabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }

  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  }

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group>
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          style={{ height: 220 }}
        >
          <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane >
          <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane >
          <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane >
          <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane >
          <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane >
          <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane >
          <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane >
          <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane >
          <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane >
          <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane >
          <TabPane tab="Tab 11" key="11">Content of tab 11</TabPane >
        </Tabs>
      </div>
    );
  }
}

@Form.create()
class TabsDemo extends Component {
  render() {
    return (
      <PageHeaderWrapper title="Antd tabs" content="tabs">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">111111</TabPane >
          <TabPane tab="Tab 2" key="2">22222</TabPane >
          <TabPane tab="Tab 3" key="3">33333</TabPane >
          <TabPane tab="Tab 4" key="4" disabled>44444</TabPane >
        </Tabs>
        <Divider />
        <Tabs defaultActiveKey="2">
          <TabPane tab={<span><Icon type="apple" />apple</span>} key="1">Tab 1</TabPane >
          <TabPane tab={<span><Icon type="android" />android</span>} key="2">Tab 2</TabPane >
        </Tabs>
        <Divider />
        <SlidingTabsDemo />
        <Divider>TabPosition</Divider>
        <TabPosition />
        <Divider>Tab type=card</Divider>
        <Tabs type="card">
          <TabPane tab="Tab 1" key="1"><Clock clockColor='green' /></TabPane>
          <TabPane tab="Tab 2" key="2"><Clock clockColor='red' /></TabPane>
          <TabPane tab="Tab 3" key="3"><Clock clockColor='blue' /></TabPane>
        </Tabs>,
      </PageHeaderWrapper>
    )
  }
}
export default TabsDemo
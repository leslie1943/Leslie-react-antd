import React, { Component } from 'react';
import {
  Form,
  Empty,
  Divider,
  Alert,
  Button,
  ConfigProvider,
  Switch,
  Icon,
  TreeSelect,
  Select,
  Cascader,
  Transfer,
  Table,
  List,
} from 'antd';
import moment from 'moment';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

// ConfigProvider 使用 React 的 context 特性，只需在应用外围包裹一次即可全局生效。
const customizeRenderEmpty = () => (
  <div style={{ textAlign: 'center' }}>
    <Icon type="smile" style={{ fontSize: 20 }} />
    <p>Data not found</p>
  </div>
);
const style = { width: 200 };

class CustomDemo extends Component {
  state = { customize: false };
  render() {
    const { customize } = this.state;
    return (
      <div>
        <Switch
          unCheckedChildren="default"
          checkedChildren="customize"
          checked={customize}
          onChange={val => this.setState({ customize: val })}
        />
        <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
          <div className="config-provider">
            <h3>Select</h3>
            <Select style={style} />
            <h3>TreeSelect</h3>
            <TreeSelect style={style} treeData={[]} />
            <h3>Cascader</h3>
            <Cascader style={style} options={[]} showSearch />
            <h3>Transfer</h3>
            <Transfer />
            <h3>Table</h3>
            <Table
              style={{ marginTop: 10 }}
              columns={[
                {
                  title: 'Name',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: 'Age',
                  dataIndex: 'age',
                  key: 'age',
                },
              ]}
            />
            <h3>List</h3>
            <List />
          </div>
        </ConfigProvider>
      </div>
    );
  }
}

@Form.create()
class EmptyDemo extends Component {
  render() {
    return (
      <PageHeaderWrapper title="Antd demo - empty" content="empty">
        <Empty />
        <Divider />
        <Empty
          image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
          description={
            <span>
              Customize
              <a href="#">Description</a>
            </span>
          }
        >
          <Button type="primary">Create Now</Button>
        </Empty>
        <Divider />
        <CustomDemo />
      </PageHeaderWrapper>
    );
  }
}

export default EmptyDemo;

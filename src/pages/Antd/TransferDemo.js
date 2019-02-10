import React, { Component } from 'react';
import { Form, Transfer, Button, Switch, message, Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

class AdvanceDemo1 extends Component {
  state = {
    mockData: [],
    targetKeys: [],
  }
  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content ${i + 1}`,
        chosen: Math.random() * 2 > 1
      }

      if (data.chosen) {
        targetKeys.push(data)
      }
      mockData.push(data)
    }
    this.setState({ targetKeys, mockData })
  }
  handleChange = (targetKeys) => {
    this.setState({ targetKeys })
  }
  renderFooter = () => (
    <Button size="small" style={{ float: 'right', margin: 5 }} onClick={this.getMock}>Reload</Button>
  )
  render() {
    return (
      <Transfer
        dataSource={this.state.mockData}
        showSearch
        listStyle={{ width: 250, height: 300 }}
        operations={['to right', 'to left']}
        targetKeys={this.state.targetKeys}
        onChange={this.handleChange}
        // 选择项上显示的内容
        render={item => `${item.title}-${item.description}`}
        footer={this.renderFooter}
      />
    )
  }
}

class AdvanceDemo2 extends Component {
  state = {
    mockData: [],
    targetKeys: [],
  }
  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  }

  handleChange = (targetKeys, direction, moveKeys) => {
    console.log(targetKeys, direction, moveKeys);
    this.setState({ targetKeys });
  }

  renderItem = (item) => {
    const customLabel = (
      <span style={{ fontWeight: 'bold', color: 'green' }}>
        {item.title} - {item.description}
      </span>
    )
    return {
      label: customLabel,
      value: item.title
    }
  }

  render() {
    return (
      <Transfer
        dataSource={this.state.mockData}
        listStyle={{
          width: 300,
          height: 300,
        }}
        targetKeys={this.state.targetKeys}
        onChange={this.handleChange}
        render={this.renderItem}
      />)
  }
}

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content ${i + 1}`,
    disabled: i % 3 < 1
  })
}
const oriTargetKeys = mockData
  .filter(item => +item.key % 3 > 1)
  .map(item => item.key);

@Form.create()
class TransferDemo extends Component {
  state = {
    targetKeys: oriTargetKeys,
    selectedKeys: [],
    disabled: false,
  }
  // 选项在两栏之间转移时的回调函数	
  onChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({
      targetKeys: nextTargetKeys
    })
    console.info('targetKeys:', nextTargetKeys);
    console.info('direction:', direction);
    console.info('moveKeys:', moveKeys);
  }

  // 选中项发生改变时的回调函数	
  onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({
      selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys]
    })
    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  }

  // 选项列表滚动时的回调函数	
  handleScroll = (direction, e) => {
    console.info('direction:', direction)
    console.info('target:', e.target)
  }

  handleDisable = (disabled) => {
    message.info(disabled ? 'yes' : 'no')
    this.setState({ disabled })
  }

  handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  }

  render() {
    const { targetKeys, selectedKeys, disabled } = this.state;
    return (
      <PageHeaderWrapper title="Antd demo - Transfer" content="Transfer" >
        <Transfer
          showSearch
          dataSource={mockData}
          titles={['Source', 'Target']}
          targetKeys={targetKeys}
          // selectedKeys
          selectedKeys={selectedKeys}
          onChange={this.onChange}
          onSelectChange={this.onSelectChange}
          onScroll={this.handleScroll}

          /* 每行数据渲染函数，该函数的入参为 dataSource 中的项，
           返回值为 ReactElement。或者返回一个普通对象，
           其中 label 字段为 ReactElement，value 字段为 title	
           */
          render={item => item.title}
          disabled={disabled}
          onSearch={this.handleSearch}
        >

        </Transfer>
        <Switch unCheckedChildren="disabled"
          checkedChildren="disabled"
          checked={disabled}
          onChange={this.handleDisable}
          style={{ marginTop: 16 }} />
        <Divider></Divider>
        <AdvanceDemo1 />
        <Divider></Divider>
        <AdvanceDemo2 />
      </PageHeaderWrapper >
    )
  }
}

export default TransferDemo
import React, { Component } from 'react';
import { Form, TreeSelect, Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
const TreeNode = TreeSelect.TreeNode
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [{
      title: 'Child Node1',
      value: '0-0-1',
      key: '0-0-1',
    }, {
      title: 'Child Node2',
      value: '0-0-2',
      key: '0-0-2',
    }],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1'
  }
];

@Form.create()
class TreeSelectDemo extends Component {
  state = { value: undefined, value2: ['0-0-1'] }
  onChange = (value) => {
    this.setState({
      value
    })
  }
  onChange2 = (value2) => {
    this.setState({
      value2
    })
  }
  render() {
    const { cities } = this.state;
    const tProps = {
      treeData,
      value: this.state.value2,
      onChange: this.onChange2,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Please select',
      style: {
        width: 300,
      },

    }
    return (
      <PageHeaderWrapper title="Antd demo - tree select" content="tree select">
        <TreeSelect
          showSearch
          style={{ width: 300 }}
          value={this.state.value}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="Please select"
          allowClear
          treeDefaultExpandAll={true}
          onChange={this.onChange}>
          <TreeNode value="parent 1" title="parent 1" key="0-1">
            <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
              <TreeNode value="leaf1" title="my leaf" key="random" >
                <TreeNode value="love" title="love" key="0-1-1-1"></TreeNode>
              </TreeNode>
              <TreeNode value="leaf2" title="your leaf" key="random1" >
                <TreeNode value="yes" title={<span style={{ color: 'red' }}>yes</span>} key="0-1-1-2"></TreeNode>
              </TreeNode>
            </TreeNode>
            <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
              <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
            </TreeNode>
          </TreeNode>
        </TreeSelect>
        <Divider>Generate with JSON</Divider>
        <TreeSelect
          showSearch
          style={{ width: 300 }}
          value={this.state.value}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="Please select"
          allowClear
          treeData={treeData}
          treeDefaultExpandAll={true}
          onChange={this.onChange}
        >
        </TreeSelect>
        <Divider>Multiple select</Divider>
        <TreeSelect
          showSearch
          style={{ width: 300 }}
          value={this.state.value}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="Please select"
          allowClear
          multiple
          treeData={treeData}
          treeDefaultExpandAll={true}
          onChange={this.onChange}
        >
        </TreeSelect>
        <Divider>toggle</Divider>
        <TreeSelect {...tProps}></TreeSelect>
      </PageHeaderWrapper >
    )
  }
}

export default TreeSelectDemo
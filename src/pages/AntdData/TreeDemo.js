import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, Divider, Icon, message, Tree } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";

const { TreeNode } = Tree

@Form.create()
class TreeDemo extends Component {
  render() {
    return (
      <PageHeaderWrapper title="Antd tree" content="tree">
        <Tree
          checkable
          defaultExpandedKeys={['0-0-0']}
          defaultSelectedKeys={['0-0-0', '0-0-1']}
          defaultCheckedKeys={['0-0-0', '0-0-1']}
          onCheck={this.onCheck}
          onSelect={this.onSelect}>
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="parent 1-0" key="0-0-0" disabled>
              <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
              <TreeNode title="leaf" key="0-0-0-1" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
            </TreeNode>
          </TreeNode>
        </Tree>
      </PageHeaderWrapper >
    )
  }
}

export default TreeDemo
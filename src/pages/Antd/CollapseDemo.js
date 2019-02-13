import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, Collapse, Icon, Button, Tooltip, Avatar, Divider, message } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";
import styles from './BadgeDemo.less'
const Panel = Collapse.Panel

@Form.create()
class CollapseDemo extends Component {
  state = {
    openKeys: [],
  }
  changeKeys = () => {
    const len = this.state.openKeys.length;
    // console.info(len);
    if (len === 0) {
      this.setState({
        openKeys: ['1']
      })
    } else if (len === 1) {
      this.setState({
        openKeys: ['1', '2']
      })
    } else if (len === 2) {
      this.setState({
        openKeys: ['1', '2', '3']
      })
    } else if (len === 3) {
      this.setState({
        openKeys: []
      })
    }
  }

  callback = (key) => {
    message.info(key)
  }

  render() {
    const text = `
    DongDong GuoLei
    Mark Xuelian
    Suzhen
    Neo,Ying
    Samantha  
    `
    const simple = (
      <p style={{ paddingLeft: 24 }}>
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
      </p>
    )

    const customPanelStyle = {
      background: '#f7f7f7',
      borderRadius: 4,
      marginBottom: 24,
      border: 0,
      overflow: 'hidden'
    }

    const openKeys = this.state.openKeys;
    return (
      <PageHeaderWrapper title="Antd demo - collapse" content="collapse">
        <div style={{ textAlign: 'center', marginBottom: 5 }}><Button type="primary" onClick={this.changeKeys}>Open tabs one by one</Button></div>
        <Collapse activeKey={openKeys}>
          <Panel header="The is panel header 1" key="1">{text}</Panel>
          <Panel header="The is panel header 2" key="2">{text}</Panel>
          <Panel header="The is panel header 3" key="3">{text}</Panel>
        </Collapse>
        <Divider />
        <Collapse accordion onChange={this.callback}>
          <Panel header="The is panel header 1" key="1">{text}</Panel>
          <Panel header="The is panel header 2" key="2">{text}</Panel>
          <Panel header="The is panel header 3" key="3">{text}</Panel>
        </Collapse>
        <Divider>嵌套折叠版</Divider>
        <Collapse onChange={this.callback}>
          <Panel header="The is panel header 1" key="1">
            <Collapse defaultActiveKey="1">
              <Panel header="This is panel nest panel" key="1">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Panel>
          <Panel header="The is panel header 2" key="2">{text}</Panel>
          <Panel header="The is panel header 3" key="3">{text}</Panel>
        </Collapse>

        <Divider>无border</Divider>
        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Panel header="This is panel header 1" key="1">{simple}</Panel>
          <Panel header="This is panel header 2" key="2">{simple}</Panel>
          <Panel header="This is panel header 3" key="3">{simple}</Panel>
        </Collapse>

        <Divider>自定义面板</Divider>
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
        >
          <Panel header="This is panel header 1" key="1" style={customPanelStyle}>{text}</Panel>
          <Panel header="This is panel header 2" key="2" style={customPanelStyle}>{text}</Panel>
          <Panel header="This is panel header 3" key="3" style={customPanelStyle}>{text}</Panel>
          <Panel disabled header="This is disabled panel header " key="4" style={customPanelStyle}>{text}</Panel>
        </Collapse>

        <Divider>隐藏Panel箭头</Divider>
        <Collapse onChange={this.callback}>
          <Panel header="This is panel header with arrow icon" key="1"><p>{text}</p></Panel>
          <Panel showArrow={false} header="This is panel header without arrow icon" key="2"><p>{text}</p></Panel>
        </Collapse>
      </PageHeaderWrapper >
    )
  }
}

export default CollapseDemo
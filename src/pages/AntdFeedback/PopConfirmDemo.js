import React, { Component } from 'react';
import { Form, Message, Divider, Switch, Button, Row, Icon, Col, message, notification, Popconfirm } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const text = 'Are you sure to delete this task?';
class PlacementPopConfirm extends Component {
  confirm = () => {
    message.info('Clicked on Yes.');
  }
  render() {
    return (
      <div className="demo">
        <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
          <Popconfirm placement="topLeft" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
            <Button>TL</Button>
          </Popconfirm>
          <Popconfirm placement="top" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
            <Button>Top</Button>
          </Popconfirm>
          <Popconfirm placement="topRight" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
            <Button>TR</Button>
          </Popconfirm>
        </div>
        <div style={{ width: 70, float: 'left' }}>
          <Popconfirm placement="leftTop" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
            <Button>LT</Button>
          </Popconfirm>
          <Popconfirm placement="left" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
            <Button>Left</Button>
          </Popconfirm>
          <Popconfirm placement="leftBottom" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
            <Button>LB</Button>
          </Popconfirm>
        </div>
        <div style={{ width: 70, marginLeft: 304 }}>
          <Popconfirm placement="rightTop" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
            <Button>RT</Button>
          </Popconfirm>
          <Popconfirm placement="right" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
            <Button>Right</Button>
          </Popconfirm>
          <Popconfirm placement="rightBottom" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
            <Button>RB</Button>
          </Popconfirm>
        </div>
        <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
          <Popconfirm placement="bottomLeft" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
            <Button>BL</Button>
          </Popconfirm>
          <Popconfirm placement="bottom" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
            <Button>Bottom</Button>
          </Popconfirm>
          <Popconfirm placement="bottomRight" title={text} onConfirm={this.confirm} okText="Yes" cancelText="No">
            <Button>BR</Button>
          </Popconfirm>
        </div>
      </div>
    )
  }
}

class ConditionPopConfirm extends Component {
  state = {
    visible: false,
    condition: true
  }
  changeCondition = (value) => {
    this.setState({ condition: value })
  }

  confirm = () => {
    this.setState({ visible: false });
    message.success('Next step');
  }
  cancel = () => {
    this.setState({ visible: false });
    message.error('Click on cancel.');
  }

  handleVisibleChange = (visible) => {
    console.info(visible)
    if (!visible) {
      this.setState({ visible })
      return
    }
    // Determining condition before show the popconfirm.
    console.log(this.state.condition);
    if (this.state.condition) {
      this.confirm()
    } else {
      this.setState({ visible })
    }
  }

  render() {
    return (
      <div>
        <Popconfirm
          title="Are sure delete this task?"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger">Delete</Button>
        </Popconfirm>
        <br /><br /><br />
        Whether directly execute: <Switch defaultChecked onChange={this.changeCondition}></Switch>
      </div>
    )
  }
}


@Form.create()
class PopConfirmDemo extends Component {

  confirm = () => {
    message.info('confirm')
  }
  cancel = () => {
    message.info('cancel')
  }
  render() {
    return (
      <PageHeaderWrapper title="Antd demo - Popconfirm" content="Popconfirm">
        <Popconfirm icon={<Icon type="question-circle-o" style={{ color: 'red' }} />} arrowPointAtCenter title="Are you sure delete this task?" onConfirm={this.confirm} onCancel={this.cancel} okText="Yes" cancelText="No">
          <a href="#">Delete</a>
        </Popconfirm>
        <Divider />
        <PlacementPopConfirm />
        <Divider />
        <ConditionPopConfirm />
      </PageHeaderWrapper>
    )
  }
}

export default PopConfirmDemo
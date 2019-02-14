import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, Divider, Icon, message, Popover, Button } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";

class ComplexPopover extends Component {
  state = {
    clicked: false,
    hovered: false,
  }
  hide = () => {
    this.setState({
      clicked: false,
      hovered: false,
    })
  }
  handleHoverChange = (visible) => {
    this.setState({
      hovered: visible,
      clicked: false,
    })
  }

  handleClickChange = (visible) => {
    this.setState({
      clicked: visible,
      hovered: false,
    });
  }
  render() {
    const hoverContent = (
      <div>
        This is hover content
      </div>
    )
    const clickContent = (
      <div>
        This is click content
      </div>
    )
    return (
      <Popover
        style={{ width: 500 }}
        content={(<div>
          {hoverContent}
          <a onClick={this.hide}>close</a>
        </div>)}
        title="Hover title"
        trigger="hover"
        visible={this.state.hovered}
        onVisibleChange={this.handleHoverChange}>
        <Popover
          content={(<div>
            {clickContent}
            <a onClick={this.hide}>Close</a>
          </div>)}
          title="Click title"
          trigger="click"
          visible={this.state.clicked}
          onVisibleChange={this.handleClickChange}
        >
          <Button>Hover and Click / 悬停并单击</Button>
        </Popover>
      </Popover>
    )
  }
}

// 和 Tooltip 的区别是,用户可以对浮层上的元素进行操作,因此它可以承载更复杂的内容,比如链接或按钮等.
@Form.create()
class PopoverDemo extends Component {
  state = {
    visible: false,
  }
  hide = () => {
    this.setState({ visible: false, })
  }
  handleVisibleChange = (visible) => {
    this.setState({ visible })
  }

  render() {
    const content = (<div><p>content</p><p>content</p></div>)
    const text = (<span>title</span>)
    const buttonWidth = 70;
    return (
      <PageHeaderWrapper title="Antd demo - popover" content="popover">
        <Popover content={content} title="popover title">
          <Button type="primary">Hover me</Button>
        </Popover>
        <Divider>trigger:hover focus click</Divider>
        <Popover content={content} title="Title" trigger="hover">
          <Button>Hover me</Button>
        </Popover>
        <Popover content={content} title="Title" trigger="focus">
          <Button>Focus me</Button>
        </Popover>
        <Popover content={content} title="Title" trigger="click">
          <Button>Click me</Button>
        </Popover>
        <Divider />
        <div className="demo">
          <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
            <Popover placement="topLeft" title={text} content={content} trigger="click">
              <Button>TopLeft</Button>
            </Popover>
            <Popover placement="top" title={text} content={content} trigger="click">
              <Button>Top</Button>
            </Popover>
            <Popover placement="topRight" title={text} content={content} trigger="click">
              <Button>topRight</Button>
            </Popover>
          </div>
          <div style={{ width: buttonWidth, float: 'left' }}>
            <Popover placement="leftTop" title={text} content={content} trigger="click">
              <Button>leftTop</Button>
            </Popover>
            <Popover placement="left" title={text} content={content} trigger="click">
              <Button>Left</Button>
            </Popover>
            <Popover placement="leftBottom" title={text} content={content} trigger="click">
              <Button>leftBottom</Button>
            </Popover>
          </div>
          <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
            <Popover placement="rightTop" title={text} content={content} trigger="click">
              <Button>rightTop</Button>
            </Popover>
            <Popover placement="right" title={text} content={content} trigger="click">
              <Button>Right</Button>
            </Popover>
            <Popover placement="rightBottom" title={text} content={content} trigger="click">
              <Button>rightBottom</Button>
            </Popover>
          </div>
          <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
            <Popover placement="bottomLeft" title={text} content={content} trigger="click">
              <Button>bottomLeft</Button>
            </Popover>
            <Popover placement="bottom" title={text} content={content} trigger="click">
              <Button>Bottom</Button>
            </Popover>
            <Popover placement="bottomRight" title={text} content={content} trigger="click">
              <Button>bottomRight</Button>
            </Popover>
          </div>
        </div>
        <Divider>arrowPointAtCenter</Divider>
        <Popover placement="topLeft" title={text} content={content} >
          <Button>Align edge / 边缘对齐</Button>
        </Popover>
        <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter >
          <Button>Arrow points to center / 箭头指向中心</Button>
        </Popover>
        <Divider />
        <Popover content={<a onClick={this.hide}>close</a>}
          title="Title"
          trigger="click"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}>
          <Button type="primary">Click me</Button>
        </Popover>
        <Divider />
        <ComplexPopover />
      </PageHeaderWrapper>
    )
  }
}

export default PopoverDemo
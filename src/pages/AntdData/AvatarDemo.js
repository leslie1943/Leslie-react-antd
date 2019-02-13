import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, Switch, Divider, Button, Icon, Avatar, Badge } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

@Form.create()
class SwitchDemo extends Component {
  constructor() {
    super(); // 如果要使用this,必须有super()
    this.state = {
      user: UserList[0],
      color: colorList[0]
    }
  }

  handleClick = () => {
    let index = UserList.indexOf(this.state.user)
    this.setState({
      user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
      color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0]
    })
  }

  render() {
    const { value } = this.state;
    return (
      <PageHeaderWrapper title="Antd demo - avatar" content="avatar">
        <div>
          <Avatar size={64} icon="user" />
          <Avatar size="large" icon="user" />
          <Avatar icon="user" />
          <Avatar size="small" icon="user" />
        </div>
        <Divider />
        <Avatar shape="square" size={64} icon="user" />
        <Avatar shape="square" shape="square" size="large" icon="user" />
        <Avatar shape="square" icon="user" />
        <Avatar shape="square" size="small" icon="user" />

        <Divider />
        <Avatar icon="user" />
        <Avatar>U</Avatar>
        <Avatar>LESLIE</Avatar>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />

        <Divider />
        <Avatar style={{ background: this.state.color }}>
          {this.state.user}
        </Avatar> <br /><br />
        <Button type="primary" onClick={this.handleClick} >Change</Button>

        <Divider />

        <Badge count={1}><Avatar shape="square" icon="user"></Avatar></Badge>
        <br /><br />
        <Badge dot><Avatar shape="square" icon="user"></Avatar></Badge>

      </PageHeaderWrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    // tags: state.jenkins.tags
  }
}

// connect里的所有属性在UI层可以使用 this.props.xxx来使用.
const _switchDemo = connect(mapStateToProps)(SwitchDemo)
// 
export default _switchDemo
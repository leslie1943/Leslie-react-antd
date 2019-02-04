import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, Switch, Divider, Icon, message } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";

/****
 * 和 checkbox的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。
 */

@Form.create()
class SwitchDemo extends Component {
  constructor() {
    super(); // 如果要使用this,必须有super()
    this.state = {
      value: 3,
    }
  }

  onChange = (checked) => {
    message.info(checked ? 'checked' : 'unchecked')
  }



  render() {
    const { value } = this.state;
    return (
      <PageHeaderWrapper title="Antd demo - switch" content="switch">
        <Switch defaultChecked onChange={this.onChange} /> <br />
        <Switch disabled defaultChecked onChange={this.onChange} /> <br />
        <Switch defaultChecked size="small" onChange={this.onChange} /> <br />

        <Switch defaultChecked checkedChildren="开" unCheckedChildren="关" /> <br />
        <Switch defaultChecked checkedChildren="1" unCheckedChildren="0" /> <br />
        <Switch defaultChecked checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} /><br />

        <Switch loading defaultChecked /> <br />
        <Switch loading disabled /> <br />


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
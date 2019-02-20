import React, { Component } from 'react';
import { Form, Message, Divider, Button, message } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@Form.create()
class MessageDemo extends Component {
  showMsg = (s) => {
    message.info('你好.' + s + ' 3秒后消失');
    message.error('你好.' + s + ' 4 秒后消失', 4);
    message.success('你好.' + s + ' 5 秒后消失', 5);
    message.warning('你好.' + s + ' 10 秒后消失', 10);
  }
  // showMsg(s) {
  //   message.info('Hello.' + s);
  // }

  showIndicator() {
    const hide = message.loading('Action in progress...');
    setTimeout(hide, 2500)
  }
  callServer = () => {
    message.loading('Action in progress...', 2.5)
      .then(() => message.success('First Loading finished', 2.5))
      .then(() => message.info('Second Loading is finished', 2.5))
  }
  render() {
    return (
      <PageHeaderWrapper title="Antd demo - message" content="message">
        <div>
          {/* 传参的话：()=>必须有,不然会直接调用 */}
          <Button type="primary" onClick={() => this.showMsg('leslie')}>Display a normal message</Button>
          <Divider />
          <Button type="primary" onClick={this.showIndicator}>Show indicator</Button>
          <Divider />
          <Button type="primary" onClick={this.callServer}>Display a sequence of message</Button>
        </div>
      </PageHeaderWrapper>
    )
  }
}

export default MessageDemo
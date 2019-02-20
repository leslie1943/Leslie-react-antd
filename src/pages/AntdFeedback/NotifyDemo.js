import React, { Component } from 'react';
import { Form, Message, Divider, Button, Row, Icon, Col, message, notification } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

// global setting.
// notification.config({
//   placement: 'bottomRight'
// })

class CloseBtnDemo extends Component {
  close = () => {
    message.info('to be closed')
    console.info('close')
  }
  openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (<Button type="primary" onClick={() => notification.close(key)}>
      Close
    </Button>)
    notification.info({
      message: 'Notification Title',
      description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
      onClose: this.close,
    })
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.openNotification}>
          Open the notification box
        </Button>
      </div>
    )
  }
}

@Form.create()
class NotifyDemo extends Component {

  openNotice = (type) => {
    notification[type]({
      message: 'Notification title',
      description: 'Notification description',
      onClick() {
        message[type === 'open' ? 'info' : type](type)
      }
    })
  }
  notClose = () => {
    notification.info({
      message: 'Notification title',
      description: 'I will close automatically after 4.5 seconds.',
      onClick() {
        message.info('Hello')
      },
    })
    notification.info({
      message: 'Notification title',
      description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
      onClick() {
        message.info('Hello')
      },
      duration: 0
    })
  }

  changeContent = () => {
    const key = `leslie${Date.now()}`
    notification.info({
      message: 'First time title',
      description: 'First time description',
      key,
    })

    setTimeout(() => {
      notification.warn({
        message: 'Second time title',
        description: 'Second time description',
        icon: <Icon type="smile" style={{ color: '#108ee9' }}></Icon>,
        key,
      })
    }, 2000)

    setTimeout(() => {
      notification.success({
        message: 'Third time title',
        description: 'Third time description',
        icon: <Icon type="smile" style={{ color: '#108ee9' }}></Icon>,
        key,
        style: {
          background: 'grey',
          color: 'whitesmoke'
        }
      })
    }, 4000)


  }
  render() {
    return (
      <PageHeaderWrapper title="Antd demo - notification" content="notification">
        <Row>
          <Col span={4}>
            <Button type="primary" onClick={() => this.openNotice('open')}>Open normal  notification</Button>
          </Col>
          <Col span={4}>
            <Button type="primary" onClick={() => this.openNotice('info')}>Open  info notification</Button>
          </Col>

          <Col span={4}>
            <Button type="primary" onClick={() => this.openNotice('warn')}>Open  warn notification</Button>
          </Col>

          <Col span={4}>
            <Button type="primary" onClick={() => this.openNotice('success')}>Open success  notification</Button>
          </Col>

          <Col span={4}>
            <Button type="primary" onClick={() => this.openNotice('error')}>Open error  notification</Button>
          </Col>
        </Row>

        <Row style={{ marginTop: 10 }}>
          <Col span={4}>
            <Button type="primary" onClick={this.notClose}>Not close automatically</Button>
          </Col>
        </Row>
        <Divider />
        <Row style={{ marginTop: 10 }}>
          <Col span={4}>
            <Button type="primary" onClick={this.changeContent}>Change content by key</Button>
          </Col>
        </Row>

        <Divider />
        <CloseBtnDemo />
      </PageHeaderWrapper>
    )
  }
}

export default NotifyDemo
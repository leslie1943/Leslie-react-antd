import React, { Component } from 'react';
import { Form, Message, Divider, Button, Row, Icon, Col, Alert, message, notification, Progress, Spin, Switch } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './SpinDemo.less'

class ChangeSpin extends Component {
  state = {
    spinning: false,
  }

  handleChange = (spinning) => {
    this.setState({ spinning })
  }

  render() {
    return (
      <div>
        <Spin spinning={this.state.spinning}>
          <Alert message="Alert message title"
            description="Further details about the context of this alert."
            type="info" />
        </Spin>

        <div>
          Loading state: <Switch checked={this.state.spinning} onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}

class DelayChangeSpin extends Component {
  state = {
    spinning: false,
  }

  handleChange = (spinning) => {
    this.setState({ spinning })
  }

  render() {
    return (
      <div>
        <Spin spinning={this.state.spinning} delay={500}>
          <Alert message="Alert message title"
            description="Further details about the context of this alert."
            type="info" />
        </Spin>

        <div>
          Loading state: <Switch checked={this.state.spinning} onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}

@Form.create()
class SpinDemo extends Component {
  render() {
    const spinIcon = <Icon type="loading" style={{ fontSize: 24 }} spin></Icon>

    return (
      <PageHeaderWrapper title="Antd demo - spin" content="spin">
        <Spin />
        <Divider />
        <Spin size="large" />
        <Divider />
        <Spin size="small" />
        <Divider />
        <div className={styles['example']}>
          <Spin />
        </div>
        <Divider />

        <Spin tip="Loading...">
          <Alert message="Alert message title"
            description="Further details about the context of this alert."
            type="info" />
        </Spin>
        <Divider />
        <Spin indicator={spinIcon} />

        <Divider />
        <ChangeSpin />
        <Divider />
        <DelayChangeSpin />
      </PageHeaderWrapper>
    )
  }
}

export default SpinDemo
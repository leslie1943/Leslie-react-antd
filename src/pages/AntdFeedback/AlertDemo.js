import React, { Component } from 'react';
import { Form, Alert, Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";

class TestAlert extends Component {
  state = {
    visible: true
  }

  handleClose = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div>
        {this.state.visible ? <Alert closable message="message" description="description" showIcon afterClose={this.handleClose}>
        </Alert> : null}
        <p>Left message</p>
      </div>
    )
  }
}

@Form.create()
class AlertDemo extends Component {
  render() {
    return (
      <PageHeaderWrapper title="Antd demo - alert" content="alert">
        <Alert message="Success Text" type="success" />
        <Alert message="Info Text" type="info" />
        <Alert message="Warning Text" type="warning" />
        <Alert message="Error Text" type="error" />
        <Divider />
        <Alert message="Success Tips" type="success" showIcon />
        <Alert message="Informational Notes" type="info" showIcon />
        <Alert message="Warning" type="warning" showIcon />
        <Alert message="Error" type="error" showIcon />
        <Alert
          message="Success Tips"
          description="Detailed description and advices about successful copywriting."
          type="success"
          showIcon
        />
        <Alert
          message="Informational Notes"
          description="Additional description and informations about copywriting."
          type="info"
          showIcon
        />
        <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
        />
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
        />
        <Divider />
        <Alert
          message="success"
          description="I am description...."
          showIcon>
        </Alert>
        <Alert
          closable
          message="success"
          description="I am close...."
          showIcon>
        </Alert>

        <Alert
          closeText="Close now"
          message="success"
          description="I am close...."
          showIcon>
        </Alert>

        <Divider />
        <Alert message="Very long warning text warning text text text text text text text" banner closable />
        <Divider />
        <TestAlert />
      </PageHeaderWrapper>
    )
  }
}

export default AlertDemo
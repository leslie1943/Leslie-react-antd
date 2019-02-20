import React, { Component } from 'react';
import { Form, Message, Divider, Button, Row, Icon, Col, message, notification, Progress } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@Form.create()
class ProgressDemo extends Component {
  render() {
    return (
      <PageHeaderWrapper title="Antd demo - progress" content="progress">

      </PageHeaderWrapper>
    )
  }
}

export default ProgressDemo
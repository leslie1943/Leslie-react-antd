import React, { Component } from 'react';
import { Form, Message, Divider, Button, Row, Icon, Col, message, notification, Popconfirm } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@Form.create()
class PopConfirmDemo extends Component {

  render() {
    return (
      <PageHeaderWrapper title="Antd demo - Popconfirm" content="Popconfirm">
      </PageHeaderWrapper>
    )
  }
}

export default PopConfirmDemo
import React, { Component } from 'react';
import { Form, Card, Icon } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@Form.create()
class CardDemo extends Component {
  render() {
    return (
      <PageHeaderWrapper title="Antd demo - card" content="card">
        <Card
          title="default size card"
          extra={(<a href="#"><Icon type="star" />More</a>)}
          style={{ width: 300 }}>
          <p>content</p>
          <p>content</p>
          <p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p>
        </Card>
      </PageHeaderWrapper >
    )
  }
}

export default CardDemo
import React, { Component } from 'react';
import { Form, message, Divider, } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@Form.create()
class AnchorDemo extends Component {
  render() {
    return (
      <PageHeaderWrapper title="Antd demo - anchor" content="anchor">
      </PageHeaderWrapper>
    )
  }
}

export default AnchorDemo
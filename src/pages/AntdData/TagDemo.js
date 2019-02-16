import React, { Component } from 'react';
import { Form, Menu, Dropdown, Row, Col, Tag, Button, Icon, message, Table, Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const CheckableTag = Tag.CheckableTag
const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports']

class MyTag extends Component {
  state = { checked: false }
  handleChange = (checked) => {
    this.setState({ checked })
  }
  render() {
    return <CheckableTag  {...this.props} checked={this.state.checked} onChange={this.handleChange} />;
  }
}

class CategroyTag extends Component {
  state = {
    selectedTags: [],
  }

  handleChange = (tag, checked) => {
    const { selectedTags } = this.state
    // Logic
    const nextSelectedTags = checked ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    this.setState({
      selectedTags: nextSelectedTags
    })
  }

  render() {
    const { selectedTags } = this.state
    return (
      <div>
        <h2 style={{ marginRight: 8, display: 'inline' }}>Categories:</h2>
        {
          tagsFromServer.map(tag => (
            <CheckableTag key={tag} style={{ color: 'red' }}
              checked={selectedTags.indexOf(tag) > -1}
              onChange={checked => this.handleChange(tag, checked)}>
              {tag}
            </CheckableTag>
          ))
        }
      </div>
    )
  }
}

class VisibleTag extends Component {
  state = {
    visible: true
  }

  handleVisible = (visible) => {
    this.setState({
      visible: !this.state.visible
    })
  }
  render() {
    return (
      <div>
        <Tag closable
          visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}>Tag for close</Tag>
        <Button type="primary" onClick={this.handleVisible}>Toggle</Button>
      </div>
    )
  }
}

// 无状态组件,无方法无state
const TagStyle = () => (
  <div>
    <h4 style={{ marginBottom: 16 }}>Presets:</h4>
    <div>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
    </div>
    <h4 style={{ margin: '16px 0' }}>Custom:</h4>
    <div>
      <Tag color="#f50">#f50</Tag>
      <Tag color="#2db7f5">#2db7f5</Tag>
      <Tag color="#87d068">#87d068</Tag>
      <Tag color="#108ee9">#108ee9</Tag>
    </div>
  </div>
)
@Form.create()
class TagDemo extends Component {
  handleClose = (e) => {
    e.preventDefault()
    console.info('Clicked! But prevent default.');
  }
  render() {
    return (
      <div>
        <PageHeaderWrapper title="Antd tag" content="tag">
          <Row gutter={16}>
            <Col span={4}>
              <Tag color="cyan">Leslie</Tag>
              <Tag color="cyan"><a href="https://ant-design.com">Link</a></Tag>
              <Tag color="cyan" closable onClose={this.handleClose}>can be closed</Tag>
              <Tag color="cyan" closable >can be closed without prevent</Tag>
            </Col>
          </Row>

          <Divider>Tag style</Divider>
          <TagStyle />

          <Divider>CheckableTag array</Divider>
          <CategroyTag />

          <Divider >CheckableTag single</Divider>
          <MyTag>Click for checked / unchecked</MyTag>
          <MyTag>Click for checked / unchecked</MyTag>
          <MyTag>Click for checked / unchecked</MyTag>

          <Divider>VisibleTag</Divider>
          <VisibleTag />
        </PageHeaderWrapper>
      </div>
    )
  }
}
export default TagDemo
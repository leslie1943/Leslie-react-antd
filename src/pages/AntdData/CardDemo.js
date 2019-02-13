import React, { Component } from 'react';
import { Form, Card, Icon, Divider, Row, Col, Skeleton, Switch, Avatar } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
const { Meta } = Card

class PreLoadingCard extends Component {
  state = { loading: true }

  onChange = (checked) => {
    this.setState({ loading: !checked })
  }

  render() {
    const { loading } = this.state
    const gridStyle = { width: '25%', textAlign: 'center' }
    const meta = (
      <Meta avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Card title"
        description="This is the description" />
    )
    return (
      <div>
        <Switch checked={!loading} onChange={this.onChange} />
        {/* Card loading控制的是Card的title和content */}
        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
          {meta}
        </Card>
        <Card style={{ width: 300, marginTop: 16 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
          <Skeleton loading={loading} avatar active>
            {meta}
          </Skeleton>
        </Card>
        {/* Card Grid */}
        <Card title="Title">
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
        </Card>
        <Divider>内部卡片</Divider>
        <Card title="Out card title">
          <p style={{ fontSize: 14, color: 'rgba(0,0,0 0.85)', marginBottom: 16, fontWeight: 500 }}>
            Group title</p>
          <Card type="inner" title="Inner card title" extra={<a href="#">More</a>}>
            Inner card content
          </Card>
          <Card style={{ marginTop: 16 }} type="inner" title="Inner Card title" extra={<a href="#">More</a>}>Inner Card content
            <Card type="inner" title="Inner card title" extra={<a href="#">More</a>}>
              Inner card content
            </Card>
          </Card>
        </Card>
      </div >
    )
  }
}

const tabList = [{
  key: 'tab1', tab: 'tab1'
}, {
  key: 'tab2', tab: 'tab2'
}]
const content = {
  tab1: <p>Content 1</p>,
  tab2: <p>Content 2</p>
}

const tabListNoTitle = [{
  key: 'article', tab: 'article'
}, {
  key: 'app', tab: 'app'
}, {
  key: 'project', tab: 'project'
}]

const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>
}

class TabsCard extends Component {
  state = { key: 'tab1', noTitleKey: 'app' }

  onTabChange = (keyValue, type) => {
    console.info(keyValue, type)
    this.setState({ [type]: keyValue })
  }

  // 只修改state.key
  onTabChangeKey = (key) => {
    this.setState({
      key
    })
  }
  // 只修改state.noTitleKey
  onTabChangeKeyNoTitle = (noTitleKey) => {
    this.setState({
      noTitleKey
    })
  }

  render() {
    return (
      <div>
        <Card style={{ width: '100%' }}
          title="Card title"
          extra={<a href="#">More</a>}
          tabList={tabList}
          activeTabKey={this.state.key}
          // onTabChange={this.onTabChangeKey}
          onTabChange={(key) => { this.onTabChange(key, 'key') }}
        >
          {content[this.state.key]}
        </Card>
        <br /><br />
        <Card style={{ width: '100%' }}
          title="Card title"
          extra={<a href="#">More</a>}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          // onTabChange={this.onTabChangeKeyNoTitle}
          onTabChange={(key) => { this.onTabChange(key, 'noTitleKey') }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    )
  }
}

class MoreContentCard extends Component {
  state = { loading: false }
  onChange = (checked) => {
    this.setState({
      loading: !checked
    })
  }
  render() {
    const { loading } = this.state
    return (
      <div>
        <Switch checkedChildren="Done" unCheckedChildren="Loading" onChange={this.onChange}></Switch><br /><br />
        {/* cover=>title+cotent=>actions */}
        {/* actions: 卡片操作 */}
        {/* Meta: 如果使用cover,那么 title和descript要放在Meta里进行显示 */}
        {/* Card可设置loading,占位加载 */}
        <Card loading={loading}
          style={{ width: 300 }}
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="Card title"
          description="this is description">
          {/* <Meta
            ></Meta> */}
        </Card>
        <Divider />
        <Card loading={loading}
          style={{ width: 300 }}
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="this is description"
          ></Meta>
        </Card>

        {/* 父节点loading 覆盖范围大于 子节点*/}
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="this is description"
            ></Meta>
          </Skeleton>
        </Card>


      </div>
    )
  }
}
@Form.create()
class CardDemo extends Component {
  render() {
    return (
      <PageHeaderWrapper title="Antd demo - card" content="card">
        <div style={{ display: 'inline-block' }}>
          <Card
            title="default size card"
            extra={(<a href="#"><Icon type="star" />More</a>)}
            style={{ width: 300 }}>
            <p>content</p>
            <p>content</p>
            <p>content</p>
          </Card>
        </div>
        <div style={{ display: 'inline-block', marginLeft: 6 }}>
          <Card
            size="small" bordered={false}
            title="no bordered"
            extra={(<a href="#"><Icon type="star" />More</a>)}
            style={{ width: 300 }}>
            <p>content</p>
            <p>content</p>
            <p>content</p>
          </Card>
        </div>
        <div style={{ display: 'inline-block', marginLeft: 6 }}>
          <Card
            style={{ width: 300 }}>
            <p>content</p>
            <p>content</p>
            <p>content</p>
          </Card>
        </div>
        <Divider />
        <Card hoverable loading={false}
          style={{ width: 300 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat"
            description="www.instagram.com" />
        </Card>
        <Divider />
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card Content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card Content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card Content</Card>
            </Col>
          </Row>
        </div>
        <Divider />
        <PreLoadingCard />
        <Divider />
        <TabsCard />
        <Divider />
        <MoreContentCard />
      </PageHeaderWrapper >
    )
  }
}

export default CardDemo
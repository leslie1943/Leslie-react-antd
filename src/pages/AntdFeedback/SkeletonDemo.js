import React, { Component } from 'react';
import { Form, Message, Divider, Skeleton, Button, Switch, List, Avatar, Icon, Spin } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './SpinDemo.less'

/**
  何时使用#
  网络较慢，需要长时间等待加载处理的情况下。
  图文信息内容较多的列表/卡片中。
  只适合用在第一次加载数据的场景。
  可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。
 */

class SkeletonLoad extends Component {
  state = {
    loading: false,
  }

  showSkeleton = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }

  render() {
    return (
      <div>
        <div style={{ background: 'pink' }}>
          <Skeleton loading={this.state.loading} active>
            <div>
              <h4>Ant Design, a design language</h4>
              <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
            </div>
          </Skeleton>

        </div>
        <div>
          <Button type="primary" onClick={this.showSkeleton} disabled={this.state.loading}>Show skeleton</Button>
        </div>
      </div>
    )
  }
}

const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
class ListSkeleton extends Component {
  state = {
    loading: true,
  }
  onChange = (checked) => {
    setTimeout(() => {
      this.setState({ loading: !checked });
    }, 500)

  }
  render() {
    const { loading } = this.state;

    return (
      <div>
        {/* <Spin spinning={loading}> */}
        <Switch checked={!loading} onChange={this.onChange} />
        <div style={{ marginTop: 10, background: 'pink' }}>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={listData}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={!loading && [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                extra={!loading && <img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
              >
                <Skeleton loading={loading} active avatar>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  {item.content}
                </Skeleton>
              </List.Item>
            )}
          />
        </div>
        {/* </Spin> */}
      </div>
    )
  }
}


@Form.create()
class SkeletonDemo extends Component {
  render() {

    return (
      <PageHeaderWrapper title="Antd demo - skeleton" content="skeleton">
        <div style={{ background: 'pink' }}>
          <Skeleton />
        </div>
        <Divider />
        <div style={{ background: 'pink' }}>
          <Skeleton active />
        </div>
        <Divider />
        <div style={{ background: 'pink' }}>
          <Skeleton active avatar paragraph={{ rows: 4 }} />
        </div>
        <Divider />
        <SkeletonLoad />
        <Divider />
        <ListSkeleton />
      </PageHeaderWrapper>
    )
  }
}

export default SkeletonDemo
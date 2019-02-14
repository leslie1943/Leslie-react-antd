import React, { Component } from 'react';
import { Form, List, Radio, Avatar, Button, Skeleton, Divider, Icon, Card } from 'antd';
import moment from 'moment';
import reqwest from 'reqwest';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
const RadioGroup = Radio.Group;
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
const dataAvatar = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  }

]
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

// Load more demo
class LoadMoreList extends Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  }
  // componentDidMount
  componentDidMount() {
    this.getData((res) => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      })
    })
  }
  // getData
  getData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res)
      }
    })
  }
  // onLoadMore
  // 先将显示的长度+3,
  // callApi
  // 用临时数据变量存储最新的数据
  // 临时数据赋值给显示数据
  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData((res) => {
      console.info(res)
      const data = this.state.data.concat(res.results);
      this.setState({
        data,
        list: data,
        loading: false,
      }, () => {
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
    });
  }

  //render
  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore = !initLoading && !loading ? (
      <div style={{ textAlign: 'center', marginTop: 12, height: 12, lineHeight: '32px' }}>
        <Button onClick={this.onLoadMore}>loading more</Button>
      </div>
    ) : null
    return (
      <List style={{ minHeight: 350 }}
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item actions={[<a>edit</a>, <a>more</a>]}>
            {/* item.loading = undefined */}
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div style={{ color: 'red' }}>Skeleton Content</div>
            </Skeleton>
            <div style={{ color: 'green' }}>List.Item Content</div>
          </List.Item>
        )}
      >
      </List>
    )
  }
}

// PaginationDemo
const pageListData = [];
for (let i = 0; i < 20; i++) {
  pageListData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  })
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)
class PageListDemo extends Component {
  render() {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => { console.log(page) },
          pageSize: 3
        }}
        dataSource={pageListData}
        footer={<div><b>ant design</b>footer part</div>}
        renderItem={item => (
          <List.Item key={item.title}
            actions={[<IconText type="star-0" text="156" />, <IconText type="like-0" text="156" />, <IconText type="message" text="156" />]}
            extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      >
      </List>
    )
  }
}

const gridData = [
  { title: 'Title 1', },
  { title: 'Title 2', },
  { title: 'Title 3', },
  { title: 'Title 4', },
  { title: 'Title 5', },
  { title: 'Title 6', },
]
@Form.create()
class ListDemo extends Component {
  state = {
    size: ""
  }
  onChange = (e) => {
    console.info(e.target.value);
    this.setState({
      size: e.target.value
    })
  }
  render() {
    const { size } = this.state;
    return (
      <PageHeaderWrapper title="Antd demo - list" content="list">
        <div>
          <h3 style={{ marginBottom: 16 }}>Default Size</h3>
          <List size={size}
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)} />
          <div style={{ textAlign: 'center', marginTop: 5 }}>
            <RadioGroup defaultValue="" buttonStyle="outline" onChange={this.onChange}>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </RadioGroup>
          </div>
        </div>
        <div>
          <List itemLayout="horizontal"
            dataSource={dataAvatar}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}>
          </List>
        </div>
        <Divider />
        <LoadMoreList />
        <Divider />
        <PageListDemo />
        <Divider />

        {/* 可以通过设置 List 的 grid 属性来实现栅格列表，column 可设置期望显示的列数。*/}
        <List grid={{ gutter: 16, column: 4 }}
          dataSource={gridData}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>Card Content</Card>
            </List.Item>
          )}>
        </List>
        {/* 响应式List Grid */}
        <List grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          dataSource={gridData}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>Card Content</Card>
            </List.Item>
          )}>
        </List>
      </PageHeaderWrapper>
    );
  }
}

export default ListDemo;

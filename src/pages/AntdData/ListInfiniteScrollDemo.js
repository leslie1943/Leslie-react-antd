import React, { Component } from 'react';
import { Form, List, message, Avatar, Spin, Divider } from 'antd';
import reqwest from 'reqwest';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import InfiniteScroll from 'react-infinite-scroller'
import styles from './ListInfiniteScrollDemo.less'

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
@Form.create()
class InfiniteListExample extends Component {
  state = {
    data: [],
    loading: false,
    hasMore: false,
  }
  componentDidMount() {
    // call to get data.
    this.fetchData((res) => {
      this.setState({
        data: res.results
      })
    })
  }
  fetchData = (callback) => {
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
  handleLoadMore = () => {
    message.info('handleLoadMore')
    let data = this.state.data;
    this.setState({
      loading: true
    })
    if (data.length > 14) {
      message.warning('Infinite list loaded all')
      this.setState({
        hasMore: false,
        loading: false
      })
      return;
    }
    this.fetchData((res) => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      })
    })
  }

  render() {
    const { data, loading, hasMore } = this.state
    return (
      <div className={styles['demo-infinite-container']}>
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleLoadMore}
          hasMore={!loading && hasMore}
          useWindow={false}>
          <List dataSource={data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="https://ant.desgin">{item.name.last}</a>}
                  description={item.email}
                />
                <div>Item content</div>
              </List.Item>
            )}>
            {loading && hasMore && (
              <div className={styles['demo-loading-container']}>
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
        <Divider />

      </div>
    );
  }
}

export default InfiniteListExample;

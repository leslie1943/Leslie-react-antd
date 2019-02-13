import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, Icon, Tooltip, Avatar } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";
import styles from './BadgeDemo.less'

@Form.create()
class CommentDemo extends Component {
  state = {
    likes: 0,
    dislikes: 0,
    action: null
  }
  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked'
    })
  }
  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked'
    })
  }
  render() {
    const { likes, dislikes, action } = this.state;
    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon type="like" theme={action === 'liked' ? 'filled' : 'outlined'} onClick={this.like} />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,

      <span>
        <Tooltip title="Dislike">
          <Icon type="dislike" theme={action === 'disliked' ? 'filled' : 'outlined'} onClick={this.dislike} />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
      </span>,
      <span>Reply to</span>
    ]
    return (
      <PageHeaderWrapper title="Antd demo - comment" content="comment">

        <Icon type="home"> <a href="https://gitter.im/ant-design/ant-design">Antd gitter room</a></Icon>
        <p>Module not found: Can't resolve 'antd/es/comment </p>
        {/* <Comment actions={actions}
          author={<a>Su Zhen</a>}
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="handsome" />}
          content={(<p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>)}
          datetime={(
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          )}
        /> */}
      </PageHeaderWrapper>
    )
  }
}

export default CommentDemo
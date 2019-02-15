import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, Divider, Icon, message, Tree, Button, Row, Col, Timeline } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";

// Timeline.Item ==> : color,dot
// Timeline => mode,reverse

@Form.create()
class TimelineDemo extends Component {
  state = {
    reverse: false,
  }

  handleChangeReverse = () => {
    this.setState({
      reverse: !this.state.reverse
    })
  }
  render() {
    return (
      <PageHeaderWrapper title="Antd timeline" content="timeline">
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
        <Divider />
        <Timeline>
          <Timeline.Item color="green">A</Timeline.Item>
          <Timeline.Item color="green">B</Timeline.Item>
          <Timeline.Item color="red">
            <p>C.1</p><p>C.2</p><p>C.3</p><p>C.4</p>
          </Timeline.Item>
          <Timeline.Item>D</Timeline.Item>
          <Timeline.Item>E</Timeline.Item>
        </Timeline>
        <Divider />
        <Timeline mode="alternate" >
          <Timeline.Item color="green">A</Timeline.Item>
          <Timeline.Item color="green">B</Timeline.Item>
          <Timeline.Item color="red">
            <p>C.1</p><p>C.2</p><p>C.3</p><p>C.4</p>
          </Timeline.Item>
          <Timeline.Item>D</Timeline.Item>
          <Timeline.Item>E</Timeline.Item>
        </Timeline>
        <Timeline mode="right" >
          <Timeline.Item color="green">A</Timeline.Item>
          <Timeline.Item color="green">B</Timeline.Item>
          <Timeline.Item color="red">
            <p>C.1</p><p>C.2</p><p>C.3</p><p>C.4</p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" />}>D</Timeline.Item>
          <Timeline.Item>E</Timeline.Item>
        </Timeline>

        <Divider />
        <Timeline mode="alternate" >
          <Timeline.Item dot={<Icon type="clock-circle-o" />} color="green">A</Timeline.Item>
          <Timeline.Item dot={<Icon type="like" />} color="green">B</Timeline.Item>
          <Timeline.Item dot={<Icon type="heart" />} color="red">
            <p>C.1</p><p>C.2</p><p>C.3</p><p>C.4</p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon type="ant-design" />}>D</Timeline.Item>
          <Timeline.Item dot={<Icon type="play-circle" />}>E</Timeline.Item>
        </Timeline>

        <Timeline pending="Loading" reverse={this.state.reverse}>
          <Timeline.Item dot={<Icon type="clock-circle-o" />} color="green">ASDDSD</Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" />} color="green">AAAAAAAAAA</Timeline.Item>
          <Timeline.Item dot={<Icon type="like" />} color="green">BBBBBBBBB</Timeline.Item>
          <Timeline.Item dot={<Icon type="heart" />} color="red">CCCCCCCCCCCCCCCCCCCCCCCCCCCC</Timeline.Item>
          <Timeline.Item dot={<Icon type="ant-design" />}>DDDDDDDDDDDDDDDDDDDDDD</Timeline.Item>
          <Timeline.Item dot={<Icon type="play-circle" />}>EEEEEEEEEEEEEEEEEEE</Timeline.Item>
        </Timeline>
        <Button type="primary" onClick={this.handleChangeReverse} >Change reverse</Button>
      </PageHeaderWrapper >
    )
  }
}

export default TimelineDemo
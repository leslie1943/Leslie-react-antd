import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, Badge, Button, Row, Col, Divider, Icon, message, Switch } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";
import styles from './BadgeDemo.less'
const ButtonGroup = Button.Group

class DynamicBadge extends Component {
  state = {
    count: 5,
    show: false
  }

  increase = () => {
    const count = this.state.count
    this.setState({
      count: count + 1
    })
  }

  decline = () => {
    const count = this.state.count
    this.setState({
      count: count - 1 < 1 ? 1 : count - 1
    })
  }
  changeShow = (show) => {
    this.setState({ show });
    // this.setState({
    //   show: !this.state.show
    // })
  }

  render() {
    const { count, show } = this.state;
    return (
      <div>
        <Badge count={count} >
          <a className={styles['head-example']}></a>
        </Badge>
        <ButtonGroup>
          <Button style={{ marginLeft: 15 }} onClick={this.increase}> <Icon type="plus" /></Button>
          <Button onClick={this.decline}> <Icon type="minus" /></Button>
        </ButtonGroup>
        <Divider />
        <Badge dot={show} >
          <a className={styles['head-example']}></a>
        </Badge>
        <Switch onChange={this.changeShow}></Switch>
      </div>
    )
  }
}

@Form.create()
class BadgeDemo extends Component {
  render() {
    return (
      <PageHeaderWrapper title="Antd demo - badge" content="badge">
        <Row>
          <Col span={2}>
            <Badge count={5} title="Custom hover text">
              <a href="#" className={styles['head-example']}></a>
            </Badge>
          </Col>
          <Col span={2}>
            {/* status 只有在dot时可用 */}
            <Badge status="success" count={5} title="Custom hover text">
              <a href="#" className={styles['head-example']}></a>
            </Badge>
          </Col>
          <Col span={2}>
            <Badge count={0} showZero>
              <a href="#" className={styles['head-example']}></a>
            </Badge>
          </Col>
          <Col span={2}>
            {/* <Badge count={<Icon type="clock-circle" />}> */}
            <Badge count={100} overflowCount={10}>
              <a href="#" className={styles['head-example']}></a>
            </Badge>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={2}>
            <Badge count={25}></Badge>
          </Col>
          <Col span={2}>
            <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
          </Col>
          <Col span={2}>
            <Badge count={999} style={{ background: '#52c41a' }}></Badge>
          </Col>
        </Row>
        <Divider>overflowCount</Divider>
        <Row>
          <Col span={2}>
            <Badge count={99} overflowCount={10} title="Custom hover text">
              <a href="#" className={styles['head-example']}></a>
            </Badge>
          </Col>
          <Col span={2}>
            <Badge count={1000} overflowCount={999}>
              <a href="#" className={styles['head-example']}></a>
            </Badge>
          </Col>
        </Row>
        <Divider>Click</Divider>
        <Row>
          <Col span={2}>
            <a href="https://ant.design/index-cn">
              <Badge count={100} overflowCount={10}>
                <span className={styles['head-example']}></span>
              </Badge>
            </a>
          </Col>
        </Row>
        <Divider>Badge status</Divider>
        <Row>
          <Col span={2}>
            <Badge status="success" />
            <Badge status="error" />
            <Badge status="default" />
            <Badge status="processing" />
            <Badge status="warning" />
          </Col>
        </Row>
        <Divider>Dot</Divider>
        <Row>
          <Col span={2}>
            <Badge dot>
              <Icon type="notification" />
            </Badge>
          </Col>
          <Col span={2}>
            <Badge count={2}>
              <Icon type="notification" />
            </Badge>
          </Col>
          <Col span={2}>
            <Badge count={0} dot>
              <Icon type="notification" />
            </Badge>
          </Col>
          <Col span={4}>
            <Badge dot>
              <a>Link something</a>
            </Badge>
          </Col>
        </Row>
        <Divider />
        <DynamicBadge />
        <Divider />
        <Row>
          <Col span={2}>
            <Badge status="success" />
            <Badge status="error" />
            <Badge status="default" />
            <Badge status="processing" />
            <Badge status="warning" />
          </Col>
        </Row>
        <Divider>Dot-status-text</Divider>
        <Row>
          <Col span={3}>
            <Badge status="success" text="text" dot>
              <a className={styles['head-example']}></a>
            </Badge>
          </Col>
          <Col span={3}>
            <Badge status="error" text="text" dot>
              <a className={styles['head-example']}></a>
            </Badge>
          </Col>
          <Col span={3}>
            <Badge status="warning" text="text" dot>
              <a className={styles['head-example']}></a>
            </Badge>
          </Col>
          <Col span={3}>
            <Badge status="default" text="text" dot>
              <a className={styles['head-example']}></a>
            </Badge>
          </Col>
          <Col span={3}>
            <Badge status="processing" dot>
              <a className={styles['head-example']}></a>
            </Badge>
          </Col>

        </Row>
      </PageHeaderWrapper>
    )
  }
}

export default BadgeDemo
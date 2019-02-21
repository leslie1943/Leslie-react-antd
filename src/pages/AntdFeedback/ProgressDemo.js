import React, { Component } from 'react';
import { Form, Message, Divider, Button, Row, Icon, Col, message, notification, Progress, Tooltip } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const ButtonGroup = Button.Group;

class ActiveProgress extends Component {
  state = {
    percent: 0,
  }

  increase = () => {
    let percent = this.state.percent + 10
    if (percent > 100) {
      percent = 100;
    }
    this.setState({
      percent
    })
  }
  decline = () => {
    let percent = this.state.percent - 10
    if (percent < 0) {
      percent = 0;
    }
    this.setState({
      percent
    })
  }

  render() {
    return (
      <div>
        <Progress strokeLinecap="square" percent={this.state.percent} />
        <Progress strokeLinecap="round" type="circle" percent={this.state.percent} />
        <Progress type="dashboard" percent={this.state.percent} />
        <ButtonGroup>
          <Button onClick={this.increase}>+</Button>
          <Button onClick={this.decline}>-</Button>
        </ButtonGroup>
      </div>
    )
  }
}

@Form.create()
class ProgressDemo extends Component {
  render() {
    return (
      <PageHeaderWrapper title="Antd demo - progress" content="progress">
        <Row>
          <Col offset={6} span={12}>
            <Progress percent={30} size="small" />
            <Progress percent={50} status="active" />
            <Progress percent={50} status="exception" size="small" />
            <Progress percent={100} format={() => "Done"} />
            <Progress type="circle" percent={79} format={percent => `${percent} Days`} status="active" />
          </Col>
        </Row>

        <br />
        <Divider />

        <Row>
          <Col offset={6} span={12}>
            <Progress type="circle" percent={75} width={80} />
            <Progress type="circle" showInfo={true} percent={70} status="exception" />
            <Progress type="circle" showInfo={true} percent={100} />
          </Col>
        </Row>
        <Divider />
        <ActiveProgress />

        <Divider />
        <Row>
          <Col offset={6} span={12}>
            <Tooltip title="3 done / 3 in progress / 4 to do">
              <Progress percent={60} successPercent={30} />
            </Tooltip>

            <Tooltip title="3 done / 3 in progress / 4 to do">
              <Progress percent={60} successPercent={30} type="circle" />
            </Tooltip>

            <Tooltip title="3 done / 3 in progress / 4 to do">
              <Progress percent={60} successPercent={30} type="dashboard" />
            </Tooltip>
          </Col>
        </Row>

      </PageHeaderWrapper>
    )
  }
}

export default ProgressDemo
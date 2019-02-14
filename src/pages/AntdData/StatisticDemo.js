import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, Divider, Icon, message, Card, Row, Col, Statistic, Button } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";
const Countdown = Statistic.Countdown;

// 倒计时 2天30秒
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30

// 当需要突出某个或某组数字时。
// 当需要展示带描述的统计类数据时使用

@Form.create()
class StatisticDemo extends Component {
  render() {
    return (
      <PageHeaderWrapper title="Antd statistic" content="statistic">
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Active users" value={12893}></Statistic>
          </Col>
          <Col span={12}>
            <Statistic title="Account balance(CNY)" value={112893} precision={2} />
            <Button style={{ marginTop: 16 }} type="primary">Recharge</Button>
          </Col>
        </Row>
        <Divider />
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Feedback" value={1128} valueStyle={{ color: 'red' }} prefix={<Icon type="like" />} />
          </Col>
          <Col span={12}>
            <Statistic title="Unmerged" value={93} valueStyle={{ color: 'green' }} suffix=' / 100' />
          </Col>
        </Row>
        <Divider />
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={6}>
              <Card>
                <Statistic title="Active" value={11.26} precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<Icon type="arrow-up" />}
                  suffix=" % " />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic title="Idle" value={9.3} precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<Icon type="arrow-down" />}
                  suffix=" % " />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic title="Active" value={11.26} precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<Icon type="arrow-up" />}
                  suffix=" % " />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic title="Idle" value={9.3} precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<Icon type="arrow-down" />}
                  suffix=" % " />
              </Card>
            </Col>
          </Row>
        </div>
        <Divider>倒计时:format默认的: HH:mm:ss</Divider>
        <Row gutter={16}>
          <Col span={12}>
            <Countdown title="Countdown" value={deadline} />
          </Col>
          <Col span={12}>
            <Countdown prefix={<Icon type="clock-circle" />} valueStyle={{ color: '#409EFF' }} title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
          </Col>
          <Col span={12} style={{ marginTop: 32 }}>
            <Countdown suffix={<Icon type="clock-circle" />} valueStyle={{ color: '#FF6B22' }} title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
          </Col>
          <Col span={12} style={{ marginTop: 32 }}>
            <Countdown valueStyle={{ color: 'red' }} title="Day Level" value={deadline} format="DD 天 HH 时 mm 分 ss 秒" />
          </Col>
        </Row>
      </PageHeaderWrapper>
    )
  }
}

export default StatisticDemo
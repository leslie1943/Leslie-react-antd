import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, Divider, Icon, message, Tree, Tooltip, Button, Row, Col } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";

const text = <span>prompt text</span>;


@Form.create()
class TooltipDemo extends Component {
  render() {
    return (
      <PageHeaderWrapper title="Antd tooltip" content="tooltip">
        <Tooltip title={text}>
          <span>Tooltip will show when mouse enter</span>
        </Tooltip>
        <br /><br />

        <Row gutter={16} style={{ marginTop: 5 }}>
          <Col span={8}>
            <Tooltip placement="topLeft" title={text}>
              <Button>topLeft</Button>
            </Tooltip>
          </Col>
          <Col span={8}>
            <Tooltip placement="top" title={text}>
              <Button>top</Button>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip placement="topRight" title={text}>
              <Button>topRight</Button>
            </Tooltip>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 5 }}>
          <Col span={8}>
            <Tooltip placement="leftTop" title={text}>
              <Button>leftTop</Button>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip placement="left" title={text}>
              <Button>left</Button>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip placement="leftBottom" title={text}>
              <Button>leftBottom</Button>
            </Tooltip>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 5 }}>
          <Col span={8}>
            <Tooltip placement="bottomLeft" title={text}>
              <Button>bottomLeft</Button>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip placement="bottom" title={text}>
              <Button>bottom</Button>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip placement="bottomRight" title={text}>
              <Button>bottomRight</Button>
            </Tooltip>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: 5 }}>
          <Col span={8}>
            <Tooltip placement="rightTop" title={text}>
              <Button>rightTop</Button>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip placement="right" title={text}>
              <Button>right</Button>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip placement="rightBottom" title={text}>
              <Button>rightBottom</Button>
            </Tooltip>
          </Col>
        </Row>

        <Divider />
        <div>
          <Tooltip placement="topLeft" title={text}>
            <Button>Align edge / 边缘对齐</Button>
          </Tooltip>
        </div>
        <Divider />
        <div>
          <Tooltip defaultVisible={true} mouseEnterDelay={2} placement="topLeft" title={text} arrowPointAtCenter>
            <Button>Arrow point center / 箭头指向中心 2 second dealy defaultVisible=true</Button>
          </Tooltip>
        </div>

      </PageHeaderWrapper >
    )
  }
}

export default TooltipDemo
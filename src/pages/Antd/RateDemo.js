import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, Rate, Divider, Icon } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

@Form.create()
class RateDemo extends Component {
  constructor() {
    super(); // 如果要使用this,必须有super()
    this.state = {
      value: 3,
    }
  }

  handleChange = (value) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state;
    return (
      <PageHeaderWrapper title="Antd demo - rate" content="rate">
        <Rate></Rate>
        <Divider>Allow half</Divider>
        <Rate allowHalf defaultValue={2.5}></Rate>
        <Divider style={{ color: 'green' }} type="vertical" />
        <Rate disabled allowHalf defaultValue={2.5}></Rate>

        <Divider>文案</Divider>
        <span>
          <Rate tooltips={desc} onChange={this.handleChange} value={value} />
          {value ? <span className="antd-rate-text">{desc[value - 1]}</span> : ''}
        </span>
        <Divider>other characters</Divider>
        <Rate character={<Icon type="heart" />} defaultValue={5} allowHalf></Rate> <br />
        <Rate character="A" style={{ fontSize: 32 }} defaultValue={3} allowHalf></Rate> <br />
        <Rate character="好" style={{ fontSize: 22 }} defaultValue={3} allowHalf></Rate>

        <Divider>allowClear</Divider>
        <Rate defaultValue={3} /> Allow clear: true <br />
        <Rate defaultValue={3} allowClear={false} /> Allow clear: false <br />
      </PageHeaderWrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    // tags: state.jenkins.tags
  }
}

// connect里的所有属性在UI层可以使用 this.props.xxx来使用.
const _rateDemo = connect(mapStateToProps)(RateDemo)
// 
export default _rateDemo
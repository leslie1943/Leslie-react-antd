import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, Radio, Divider, Icon, Button, message, Input } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";
import styles from './LayoutDemo.less';
const RadioGroup = Radio.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];

@Form.create()
class CarouselDemo extends Component {
  state = {
    flag: true,
    value: '',
    value2: '',
    v1: 'Apple',
    v2: 'Apple',
    v3: 'Apple',
    size: ''
  }
  handleClick = () => {
    this.setState({
      flag: !this.state.flag,
    })
  }
  handleChange = (e) => {
    message.info(e.target.value)
    this.setState({ value: e.target.value })
  }
  handleChange2 = (e) => {
    message.info(e.target.value)
    this.setState({ value2: e.target.value })
  }

  handleChange_1 = (e) => {
    message.info(e.target.value)
    this.setState({ v1: e.target.value })
  }
  handleChange_2 = (e) => {
    message.info(e.target.value)
    this.setState({ v2: e.target.value })
  }
  handleChange_3 = (e) => {
    message.info(e.target.value)
    this.setState({ v3: e.target.value })
  }
  handleSizeChange = (val) => {
    console.info(val)
    if (typeof val === 'string') {
      this.setState({ size: val })
    } else {
      this.setState({ size: '' })
    }

  }

  render() {
    const flag = this.state.flag;
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    }
    return (
      <PageHeaderWrapper title="Antd demo - radio" content="radio">
        <Radio>Radio</Radio>
        <Divider />
        <Radio defaultChecked={false} disabled={flag}>Disabled</Radio> <br /><br />
        <Radio defaultChecked={true} disabled={flag}>Disabled</Radio> <br /><br />
        <Button type="primary" onClick={this.handleClick} >Toggle</Button>
        <Divider />
        <RadioGroup onChange={this.handleChange} value={this.state.value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
          <Radio value={5}>E</Radio>
        </RadioGroup>
        <Divider />
        <RadioGroup onChange={this.handleChange2} value={this.state.value2}>
          <Radio style={radioStyle} value={1}>A</Radio>
          <Radio style={radioStyle} value={2}>B</Radio>
          <Radio style={radioStyle} value={3}>C</Radio>
          <Radio style={radioStyle} value={4}>D</Radio>
          <Radio style={radioStyle} value={5}>
            More...
            {this.state.value2 === 5 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
            {this.state.value2 === 5 && <Input style={{ width: 100, marginLeft: 10 }} />}
          </Radio>
        </RadioGroup>
        <Divider />
        {/* 如果name都一样，会在全部input内转换 */}
        <RadioGroup name="radiogroup1" options={plainOptions} onChange={this.handleChange_1} value={this.state.v1}></RadioGroup><br /><br />
        <RadioGroup name="radiogroup2" options={options} onChange={this.handleChange_2} value={this.state.v2}></RadioGroup><br /><br />
        <RadioGroup name="radiogroup3" options={optionsWithDisabled} onChange={this.handleChange_3} value={this.state.v3}></RadioGroup>

        <Divider />
        <RadioGroup defaultValue="a" buttonStyle="solid" size={this.state.size}>
          <Radio.Button value="a">BeiJing</Radio.Button>
          <Radio.Button value="b">ShangHai</Radio.Button>
          <Radio.Button value="c">DaLian</Radio.Button>
          <Radio.Button disabled value="d">ShenZhen</Radio.Button>
          <Radio.Button value="e">HangZhou</Radio.Button>
        </RadioGroup>
        <br /><br />
        <RadioGroup defaultValue="a" buttonStyle="outline" size={this.state.size}>
          <Radio.Button value="a">BeiJing</Radio.Button>
          <Radio.Button value="b">ShangHai</Radio.Button>
          <Radio.Button value="c">DaLian</Radio.Button>
          <Radio.Button disabled value="d">ShenZhen</Radio.Button>
          <Radio.Button value="e">HangZhou</Radio.Button>
        </RadioGroup>
        <br /><br />
        <RadioGroup disabled defaultValue="a" buttonStyle="outline" size={this.state.size}>
          <Radio.Button value="a">BeiJing</Radio.Button>
          <Radio.Button value="b">ShangHai</Radio.Button>
          <Radio.Button value="c">DaLian</Radio.Button>
          <Radio.Button value="d">ShenZhen</Radio.Button>
          <Radio.Button value="e">HangZhou</Radio.Button>
        </RadioGroup>
        <br /><br />
        <Button type="primary" onClick={() => this.handleSizeChange('large')}>Change Size</Button>
        <Button style={{ marginLeft: 20 }} type="primary" onClick={this.handleSizeChange}> Change Size</Button >
        <Button style={{ marginLeft: 20 }} type="primary" onClick={() => this.handleSizeChange('small')}> Change Size</Button >

      </PageHeaderWrapper >

    )
  }
}

function mapStateToProps(state) {
  return {
    // tags: state.jenkins.tags
  }
}

// connect里的所有属性在UI层可以使用 this.props.xxx来使用.
const _carouselDemo = connect(mapStateToProps)(CarouselDemo)
// 
export default _carouselDemo
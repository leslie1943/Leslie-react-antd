import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, Radio, Divider, Icon, Row, Col, InputNumber, Button, message, Slider, Input, Switch } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";
import styles from './LayoutDemo.less';

const style = {
  float: 'left',
  height: 300,
  marginLeft: 70,
};

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

class IntegerStep extends Component {
  state = {
    inputValue: 1,
  }
  handleChange = (val) => {
    this.setState({
      inputValue: val,
    })
  }
  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider min={1} max={10} onChange={this.handleChange}
            value={typeof inputValue === 'number' ? inputValue : 0}></Slider>
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={inputValue}
            onChange={this.handleChange} />
        </Col>
      </Row>
    )
  }
}

class DecimalDemo extends Component {
  state = {
    inputValue: 0,
  }
  onChange = (val) => {
    if (Number.isNaN(val)) {
      return;
    }
    this.setState({
      inputValue: val
    })
  }
  render() {
    const inputValue = this.state.inputValue;
    return (
      <Row>
        <Col span={12}>
          <Slider min={1} max={10} onChange={this.onChange}
            step={0.01}
            value={typeof inputValue === 'number' ? inputValue : 0}></Slider>
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={inputValue}
            step={0.01}
            onChange={this.onChange} />
        </Col>
      </Row>
    )
  }
}

class IconSlider extends Component {
  state = { value: 0 }
  handleChange = (value) => {
    this.setState({ value })
  }
  render() {
    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) / 2).toFixed(5)
    const preColor = value >= mid ? '' : '409EFF';
    const nextColor = value >= mid ? '#409EFF' : ''
    return (
      <div className={styles['icon-wrapper']}>
        <Icon type="frown-o" style={{ color: preColor }}></Icon>
        <Slider {...this.props} onChange={this.handleChange} value={value}></Slider>
        <Icon style={{ color: nextColor }} type="smile-o" />
      </div>
    )
  }
}

@Form.create()
class SliderDemo extends Component {
  state = {
    disabled: false,
  }
  handleSwitchChange = (val) => {
    this.setState({ disabled: val })
  }
  render() {
    const disabled = this.state.disabled;
    return (
      <PageHeaderWrapper title="Antd demo - slider" content="slider">
        <Row >
          <Col style={{ border: '1px gray solid', padding: 10 }} offset={8} span={8}>
            <Slider defaultValue={30} disabled={disabled}></Slider>
            <Slider range defaultValue={[20, 50]} disabled={disabled}></Slider>
            Disabled: <Switch size="small" checked={disabled} onChange={this.handleSwitchChange} />
          </Col>
        </Row>
        <Row >
          <Col style={{ border: '1px gray solid', marginTop: 10, padding: 10 }} offset={8} span={8}>
            <IntegerStep />
            <DecimalDemo />
          </Col>
        </Row>
        <Divider></Divider>
        <Row >
          <Col style={{ border: '1px gray solid', marginTop: 10, padding: 10 }} offset={8} span={8}>
            <Slider tipFormatter={val => `${val}.00`}></Slider>
            <Slider tipFormatter={null}></Slider>
          </Col>
        </Row>

        <Row >
          <Col style={{ border: '1px gray solid', marginTop: 10, padding: 10 }} offset={6} span={12}>
            <IconSlider min={0} max={20} />
          </Col>
        </Row>

        <Divider></Divider>
        <div style={{ height: 300, border: '1px gray solid', }}>
          <div style={style}>
            <Slider vertical defaultValue={30}></Slider>
          </div>
          <div style={style}>
            <Slider vertical range step={10} defaultValue={[20, 50]} />
          </div>
          <div style={style}>
            <Slider vertical range marks={marks} defaultValue={[26, 37]} />
          </div>

        </div>
        <Divider></Divider>
        <div style={{ height: 300, border: '1px gray solid', padding: 10 }}>
          <h4>included=true</h4>
          <Slider marks={marks} defaultValue={37} />
          <Slider range marks={marks} defaultValue={[26, 37]} />

          <h4>included=false</h4>
          {/* included: marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列	 */}
          {/* included:false => 单点显示 */}
          {/* included: true => 范围显示 */}
          <Slider marks={marks} included={false} defaultValue={37} />

          <h4>marks & step</h4>
          <Slider marks={marks} step={10} defaultValue={37} />

          <h4>step=null</h4>
          {/* 当 step=null 时，Slider 的可选值仅有 marks 标出来的部分。 */}
          <Slider tooltipVisible marks={marks} step={null} defaultValue={37} />

          {/* tooltipVisible: 值为true时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时。	 */}
          <Slider tooltipVisible={false} defaultValue={30} />

        </div>,

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
const _sliderDemo = connect(mapStateToProps)(SliderDemo)
// 
export default _sliderDemo
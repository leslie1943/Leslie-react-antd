import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, Row, Col, Select, Switch, Divider, Icon, Input, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";
import styles from './LayoutDemo.less';
const { Option } = Select;
const Search = Input.Search;
const InputGroup = Input.Group;
const TextArea = Input.TextArea;

const selectBefore = (
  <Select defaultValue="Http://" style={{ width: 90 }}>
    <Option value="http://">Http://</Option>
    <Option value="https://">Https://</Option>
  </Select>
)

const selectAfter = (
  <Select defaultValue=".com" style={{ width: 80 }}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
)
const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

@Form.create()
class InputDemo extends Component {
  state = {
    dataSource: [],
    userName: '',
  }
  handleChange = (val) => {
    this.setState({
      dataSource: !val || val.indexOf('@') > 0 ? [] : [`${val}@gmail`, `${val}@hotmail`, `${val}@qq.com`]
    })
  }
  onChangeUserName = (e) => {
    this.setState({
      userName: e.target.value,
    })
  }
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }

  render() {
    const username = this.state.userName;
    const suffix = username ? <Icon type='close-circle' onClick={this.emitEmpty}></Icon> : null;
    return (
      <PageHeaderWrapper title="Antd demo - input" content="input">
        <Row>
          <Col offset={8} span={8}>
            <Input placeholder="Basic usage" /> <br />
            <Input placeholder="Large input" size="large" /><br />
            <Input placeholder="default input" /><br />
            <Input placeholder="Small input" size="small" /><br />
            <Divider />
            <div style={{ marginBottom: 16 }}>
              <Input addonBefore="Http://" addonAfter=".com" defaultValue="mySite" />
            </div>
            <div style={{ marginBottom: 16 }}>
              <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mySite" />
            </div>
            <div style={{ marginBottom: 16 }}>
              <Input addonAfter={<Icon type="setting" />} defaultValue="mySite" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col offset={8} span={8}>
            <Search placeholder="input search text"
              onSearch={value => console.info(value)} /><br /><br />
            <Search placeholder="input search text"
              onSearch={value => console.info(value)} enterButton /><br /><br />
            <Search placeholder="input search text" size="large"
              onSearch={value => console.info(value)} enterButton /><br /><br />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col offset={8} span={8}>
            <InputGroup size="large">
              <Col span={10}>
                <Input defaultValue="0452" />
              </Col>
              <Col span={14}>
                <Input defaultValue="2510882" />
              </Col>
            </InputGroup>
            {/* 注意：使用 compact 模式时，不需要通过 Col 来控制宽度 */}
            <InputGroup compact>
              <Input style={{ width: '20%' }} defaultValue="0452" />
              <Input style={{ width: '80%' }} defaultValue="2510882" />
            </InputGroup><br />

            <InputGroup compact>
              <Select defaultValue="zhejiang">
                <Option value="zhejiang">Zhejiang</Option>
                <Option value="jiangsu">Jiangsu</Option>
              </Select>
              <Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
            </InputGroup><br />

            <InputGroup compact>
              <Select defaultValue="Option1">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
              </Select>
              <Input style={{ width: '50%' }} defaultValue="2510882" />
              <InputNumber />
            </InputGroup><br />

            <InputGroup compact>
              <Input style={{ width: '50%' }} defaultValue="Nothing" />
              <DatePicker />
            </InputGroup><br />

            <InputGroup compact>
              <Select defaultValue="Option1-1">
                <Option value="Option1-1">Option1-1</Option>
                <Option value="Option1-2">Option1-2</Option>
              </Select>
              <Select defaultValue="Option2-2">
                <Option value="Option2-1">Option2-1</Option>
                <Option value="Option2-2">Option2-2</Option>
              </Select>
            </InputGroup><br />

            <InputGroup compact>
              <Select defaultValue="1">
                <Option value="1">Option 1</Option>
                <Option value="2">Option 2</Option>
              </Select>
              <Input style={{ width: 100, textAlign: 'center' }} placeholder="minimum" />
              <Input style={{ width: 30, textAlign: 'center', borderLeft: 0, pointerEvents: 'none', background: '#fff' }} disabled placeholder="~" />
              <Input style={{ width: 100, textAlign: 'center', borderLeft: 0 }} placeholder="maximum" />
            </InputGroup><br />

            <InputGroup compact>
              <Select defaultValue="sign-up">
                <Option value="sign-up">Sign Up</Option>
                <Option value="sign-in">Sign In</Option>
              </Select>
              <AutoComplete dataSource={this.state.dataSource} style={{ width: 200 }} onChange={this.handleChange} placeholder="Email" />
            </InputGroup><br />

            <InputGroup compact>
              <Select allowClear style={{ width: '30%' }} defaultValue="Home">
                <Option value="Home">Home</Option>
                <Option value="Company">Company</Option>
              </Select>
              <Cascader style={{ width: '70%' }} options={options} />
            </InputGroup> <br />
          </Col>
        </Row>
        <Divider></Divider>
        <Row>
          <Col offset={8} span={8} >
            <TextArea rows={5} /> <br />
            <TextArea placeholder="Autosize height based on content lines" autosize /> <br />
            <TextArea placeholder="Autosize height based on content lines" autosize={{ minRows: 2, maxRows: 6 }} />
          </Col>
          {/* <Input.Password placeholder="input password" /> */}
        </Row>
        <Divider></Divider>
        <Row>
          <Col offset={8} span={8} >
            <Input
              placeholder="Enter your name"
              prefix={<Icon type="user" style={{ color: 'rgb(0,0,0 0.25)' }} />}
              suffix={suffix}
              value={username}
              onChange={this.onChangeUserName}
              ref={node => this.userNameInput = node}
            />
          </Col>
          {/* <Input.Password placeholder="input password" /> */}
        </Row>
        <Divider></Divider>
        <Row>

          {/* <Input allowClear placeholder="input password" /> */}
          {/* <Input.Password placeholder="input password" /> */}
        </Row>

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
const _inputDemo = connect(mapStateToProps)(InputDemo)
// 
export default _inputDemo
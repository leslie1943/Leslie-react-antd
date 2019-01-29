import React, { Component } from 'react';
import { connect } from 'dva';
import { Cascader, Form, message, Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

/**
 * 使用Form.create({options})(CascaderDemo)包装组件,包装之后的组件会自动添加this.props.form 属性,该属性包含以下API：
  getFieldDecorator: ƒ ()
  getFieldError: ƒ (name)
  getFieldInstance: ƒ ()
  getFieldProps: ƒ ()
  getFieldValue: ƒ (name)
  getFieldsError: ƒ (names)
  getFieldsValue: ƒ (names)
  isFieldTouched: ƒ (name)
  isFieldValidating: ƒ (name)
  isFieldsTouched: ƒ (ns)
  isFieldsValidating: ƒ (ns)
  isSubmitting: ƒ ()
  resetFields: ƒ ()
  setFields: ƒ ()
  setFieldsInitialValue: ƒ (initialValues)
  setFieldsValue: ƒ ()
  submit: ƒ ()
  validateFields: ƒ ()
  validateFieldsAndScroll: ƒ ()
 */

const options = [{
  value: 'zhejiang',
  label: 'Zheng jiang',
  children: [{
    value: 'hangzhou',
    label: 'Hang zhou',
    children: [{
      value: 'xihu',
      label: 'West-lake'
    }]
  }],
}, {
  value: 'jiangsu',
  label: 'Jiang su',
  children: [{
    value: 'nanjing',
    label: 'Nan jing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men'
    }]
  }]
}, {
  value: 'shandong',
  label: 'Shan dong',
  disabled: true,
  children: [{
    value: 'heze',
    label: 'He ze',
    children: [{
      value: 'shanxian',
      label: 'Shan xian'
    }]
  }]
}];
@Form.create()
class CascaderDemo extends Component {
  constructor(props) {
    super(props)
    console.info(this.props.form);
    this.state = {
      text: 'Unselect',
      options: [{
        value: 'zhejiang',
        label: 'Zhejiang',
        isLeaf: false,
      }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        isLeaf: false,
      }],
    }
  }
  onChange = (val) => {
    console.info(val);
    message.info(val ? val.join(',') : '');
  }
  handleChange = (value, selectedOptions) => {
    console.info(selectedOptions);
    this.setState({
      text: selectedOptions.map(item => item.label).join(' , '),
    })
  }

  displayRender = (label) => {
    return label[label.length - 1]
  }

  filter = (inputValue, path) => {
    return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
  }

  loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1]
    targetOption.loading = true;
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [{
        label: `${targetOption.label} Dynamic 1`,
        value: 'Dynamic 1'
      }, {
        label: `${targetOption.label} Dynamic 2`,
        value: 'Dynamic 2'
      }];
      this.setState({
        options: this.state.options
      })
    }, 1000)
  }

  render() {
    return (
      <PageHeaderWrapper title="Antd demo - cascader" content="cascader">
        <Cascader notFoundContent="No data found" showSearch={this.filter} changeOnSelect displayRender={this.displayRender} expandTrigger="hover" defaultValue={['shandong', 'heze', 'shanxian']} options={options} onChange={this.onChange}></Cascader>
        <Divider></Divider>
        <span>
          {this.state.text}
          &nbsp;
          <Cascader options={options} onChange={this.handleChange}>
            <a style={{ marginLeft: 20 }} href="#">Change city</a>
          </Cascader>
        </span>
        <Divider></Divider>
        <Cascader
          options={this.state.options}
          loadData={this.loadData}
          changeOnSelect
        >
        </Cascader>
      </PageHeaderWrapper>
    )
  }
}

export default CascaderDemo
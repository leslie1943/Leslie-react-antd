import React, { Component } from 'react';
import { connect } from 'dva';
import { Cascader, Form } from 'antd';
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

@Form.create()
class CascaderDemo extends Component {
  constructor(props) {
    super(props)
    console.info(this.props.form);
  }
  render() {
    return (
      <PageHeaderWrapper title="Antd demo - cascader" content="cascader">
        <p>Hello</p>
      </PageHeaderWrapper>
    )
  }
}

export default CascaderDemo
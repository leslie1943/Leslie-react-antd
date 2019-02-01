import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber, } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './FormDemo.less';
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};
class ValidateForm extends Component {
    render() {
        return (
            <PageHeaderWrapper title="validate">
                <Form.Item {...formItemLayout}
                    label="Fail"
                    validateStatus="error"
                    help="Should be combination of numbers & alphabets">
                    <Input placeholder="unavailable choice" id="error" ></Input>
                </Form.Item>

                <Form.Item {...formItemLayout}
                    label="Fail"
                    hasFeedback
                    validateStatus="error"
                    help="Should be combination of numbers & alphabets">
                    <Input placeholder="unavailable choice" id="error2" />

                </Form.Item>

                <Form.Item {...formItemLayout}
                    label="warning"
                    validateStatus="warning"
                    help="this is warning">
                    <Input placeholder="warning" id="warning" />
                </Form.Item>

                <Form.Item {...formItemLayout}
                    label="Validating"
                    hasFeedback
                    validateStatus="validating"
                    help="The information is being validated...">
                    <Input placeholder="I'm the content is being validated" id="validating" />
                </Form.Item>

                <Form.Item {...formItemLayout}
                    label="Success"
                    hasFeedback
                    validateStatus="success"
                    help="yes rpg">
                    <Input placeholder="I'm the content" id="success" />
                </Form.Item>

                <Form.Item {...formItemLayout}
                    label="warning"
                    hasFeedback
                    validateStatus="warning">
                    <Input placeholder="Warning" id="warning2" />
                </Form.Item>

                <Form.Item {...formItemLayout}
                    label="Success"
                    hasFeedback
                    validateStatus="success">
                    <DatePicker style={{ width: '100%' }} />

                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="Warning"
                    hasFeedback
                    validateStatus="warning"
                >
                    <TimePicker style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="Error"
                    hasFeedback
                    validateStatus="error"
                >
                    <Select defaultValue="1">
                        <Option value="1">Option 1</Option>
                        <Option value="2">Option 2</Option>
                        <Option value="3">Option 3</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="Validating"
                    hasFeedback
                    validateStatus="validating"
                    help="The information is being validated..."
                >
                    <Cascader defaultValue={['1']} options={[]} />
                </Form.Item>

                <Form.Item label="inline" {...formItemLayout} style={{ marginBottom: 0 }}>
                    <Form.Item
                        validateStatus="error"
                        help="Please select the correct date"
                        style={{ display: 'inline-block', width: 'calc(50%-12px)' }}
                    >
                        <DatePicker />
                    </Form.Item>
                    <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>
                        -
                    </span>
                    <Form.Item
                        validateStatus="success"
                        hasFeedback
                        style={{ display: 'inline-block', width: 'calc(50%-12px)' }}
                    >
                        <DatePicker />
                    </Form.Item>
                </Form.Item>

                <Form.Item {...formItemLayout}
                    label="Success"
                    hasFeedback
                    validateStatus="success">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>

            </PageHeaderWrapper>
        )
    }
}
// const WrappedTimeRelatedForm = Form.create()(TimeRelatedForm)
export default ValidateForm
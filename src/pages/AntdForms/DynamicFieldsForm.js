import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Button, Modal, Icon, Input, Radio, message } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './FormDemo.less';
let id = 0;

class DynamicFieldsForm extends Component {
    remove = (k) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // we need at least one passenger
        if (keys.length === 1) {
            return;
        }
        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k)
        })
    }
    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        //can use data-binding to set
        form.setFieldsValue({
            keys: nextKeys
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.info(JSON.stringify(values))
            }
        })
    }
    handleReset = () => {
        this.props.form.resetFields();
    }

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        console.info(keys);
        const formItems = keys.map((k, index) => (
            <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Passenger' : ''}
                required={false}
                key={k}
            >
                {
                    getFieldDecorator(`names[${k}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ required: true, whitespace: true, message: "Please input passenger's name or delete this field.", }]
                    })(<Input placeholde='passenger name' style={{ width: '60%', marginRight: 8 }}></Input>)
                }
                {
                    keys.length > 1 ? (
                        <Icon
                            className={styles['dynamic-delete-button']}
                            type="minus-circle-o"
                            disabled={keys.length === 1}
                            onClick={() => this.remove(k)}>
                        </Icon>
                    ) : null
                }
            </Form.Item >
        ))
        return (
            <PageHeaderWrapper title="dynamic fields">
                <Form onSubmit={this.handleSubmit}>
                    {formItems}
                    <Form.Item {...formItemLayoutWithOutLabel}>
                        <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                            <Icon type="plus"></Icon>Add field
                    </Button>
                    </Form.Item>
                    <Form.Item {...formItemLayoutWithOutLabel}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                        <Button style={{ marginLeft: 10 }} type="info" onClick={this.handleReset}>Reset</Button>
                    </Form.Item>
                </Form>
            </PageHeaderWrapper>
        )
    }
}
const WrappedDynamicFieldsForm = Form.create()(DynamicFieldsForm)
export default WrappedDynamicFieldsForm
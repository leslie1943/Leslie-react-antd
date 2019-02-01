import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Row, Col, Divider, message, Icon, Button, Input, Checkbox } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './FormDemo.less';

function hasErrors(fieldsError) {
    console.info(fieldsError);
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { a: "" }
    }
    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form:', values);
            }
        })
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
        const userNameError = isFieldTouched('userName') && getFieldError('userName')
        const passwordError = isFieldTouched('password') && getFieldError('password')
        return (
            <PageHeaderWrapper title="Antd demo - horizontal login form" content="horizontal login form">
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item
                        validateStatus={userNameError ? 'error' : ''}
                        help={userNameError || ''}>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }]
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}></Icon>} placeholder="Username"></Input>
                        )}
                    </Form.Item>
                    <Form.Item
                        validateStatus={passwordError ? 'error' : ''}
                        help={passwordError || ''}>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your password!' }]
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}></Icon>} placeholder="Password"></Input>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={hasErrors(getFieldsError())}>
                            Login in
                        </Button>
                    </Form.Item>
                </Form>
            </PageHeaderWrapper>
        )
    }
}

const WrapperHorizontalLoginForm = Form.create()(HorizontalLoginForm)

export default WrapperHorizontalLoginForm
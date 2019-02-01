import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Row, Col, Divider, message, Icon, Button, Input, Checkbox } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './FormDemo.less';

function hasErrors(fieldsError) {
    console.info(fieldsError);
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
@Form.create()
class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form:', values);
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <PageHeaderWrapper title="forms">
                <Form onSubmit={this.handleSubmit} className={styles['login-form']}>
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }]
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0 0.25)' }}></Icon>} placeholder="Username">
                            </Input>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your password!' }]
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0 .25)' }}></Icon>} placeholder="Password"></Input>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember</Checkbox>
                        )}
                        <a className={styles['login-form-forgot']} href=''>Forgot passowrd</a>
                        <Button type="primary" htmlType="submit" className={styles['login-form-button']}>Login in</Button>
                        Or <a href=''>Register now!</a>
                    </Form.Item>
                </Form>
            </PageHeaderWrapper>
        )
    }
}
export default NormalLoginForm
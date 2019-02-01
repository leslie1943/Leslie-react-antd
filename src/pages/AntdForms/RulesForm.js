import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};

class App extends Component {
    state = {
        checkNick: false,
    }

    check = () => {
        this.props.form.validateFields((err) => {
            if (!err) {
                message.success('OK');
            }
        })
    }

    handleChange = (e) => {
        this.setState({
            checkNick: e.target.checked,
        }, () => {
            this.props.form.validateFields(['nick'], { force: true })
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <PageHeaderWrapper title="dynamic rules">
                <Form>
                    <Form.Item {...formItemLayout} label="Name">
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input your name!' }]
                        })(
                            <Input placeholder="Name"></Input>
                        )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Nick name">
                        {getFieldDecorator('nick', {
                            rules: [{ required: this.state.checkNick, message: 'Please input nick name' }]
                        })(
                            <Input placeholder="Nick name"></Input>
                        )}
                    </Form.Item>
                    <Form.Item {...formTailLayout}>
                        <Checkbox
                            checked={this.state.checkNick}
                            onChange={this.handleChange}
                        >Nick name should be required</Checkbox>
                    </Form.Item>

                    <Form.Item {...formTailLayout}>
                        <Button type="primary" onClick={this.check}>Check</Button>
                    </Form.Item>
                </Form>
            </PageHeaderWrapper>
        )
    }
}

const WrappedApp = Form.create()(App)
export default WrappedApp;
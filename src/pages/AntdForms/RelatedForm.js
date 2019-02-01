import React, { Component } from 'react';
import { Form, Input, Icon, Button, Select } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const { Option } = Select;
const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 12 }
}

class App extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.info(values)
            }
        })
    }
    handleSelectChange = (value) => {
        if (value) {
            this.props.form.setFieldsValue({
                note: `Hi,${value == 'male' ? 'man' : 'lady'}!`
            })
        } else {
            this.props.form.setFieldsValue({
                noet: ''
            });
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <PageHeaderWrapper title="related fields">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="Note"
                        {...formItemLayout}>
                        {getFieldDecorator('note', {
                            rules: [{ required: true, message: 'Please input your note.' }]
                        })(
                            <Input></Input>
                        )}
                    </Form.Item>

                    <Form.Item
                        label="Gender"
                        {...formItemLayout}>
                        {getFieldDecorator('gender', {
                            rules: [{ required: true, message: 'Please select gender.' }]
                        })(
                            <Select onChange={this.handleSelectChange}>
                                <Option value="male" key="male">Male</Option>
                                <Option value="female" key="female">Female</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </PageHeaderWrapper>
        )
    }
}

const WrappedApp = Form.create()(App)
export default WrappedApp;
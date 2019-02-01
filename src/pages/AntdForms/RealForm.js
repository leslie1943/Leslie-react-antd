import React, { Component } from 'react';
import {
    Form, Select, InputNumber, Switch, Radio,
    Slider, Button, Upload, Icon, Rate, Checkbox,
    Row, Col,
} from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './FormDemo.less';


const { Option } = Select

class App extends Component {
    // handle submit
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    normalFile = (e) => {
        console.info('upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <PageHeaderWrapper title="complex form">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item {...formItemLayout} label="Plain Text">
                        <span className="antd-form-text">China</span>
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Select" hasFeedback>
                        {getFieldDecorator('select', {
                            rules: [{ required: true, message: 'Please select your country!' }]
                        })(
                            <Select placeholder="Please select your country">
                                <Option value="china">China</Option>
                                <Option value="use">U.S.A</Option>
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Select[multiple]">
                        {getFieldDecorator('select-multiple', {
                            rules: [{ required: true, message: 'Please select your favourite colors!', type: 'array' }]
                        })(
                            <Select mode="multiple" placeholder="Please select your favourite colors">
                                <Option value="red">Red</Option>
                                <Option value="green">Green</Option>
                                <Option value="blue">Blue</Option>
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Radio.Group">
                        {getFieldDecorator('radio-group')(
                            <Radio.Group>
                                <Radio value="a">item 1</Radio>
                                <Radio value="b">item 2</Radio>
                                <Radio value="c">item 3</Radio>
                            </Radio.Group>
                        )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Radio.Button">
                        {getFieldDecorator('radio-button')(
                            <Radio.Group>
                                <Radio.Button value="a">Item 1</Radio.Button>
                                <Radio.Button value="b">Item 2</Radio.Button>
                                <Radio.Button value="c">Item 3</Radio.Button>
                            </Radio.Group>
                        )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Checkbox.Group">
                        {getFieldDecorator('checkbox-group', {
                            initialValue: ["A", "B"]
                        })(
                            <Checkbox.Group style={{ width: '100%' }}>
                                <Row>
                                    <Col span={4}><Checkbox value="A">A</Checkbox></Col>
                                    <Col span={4}><Checkbox disabled value="B">B</Checkbox></Col>
                                    <Col span={4}><Checkbox value="C">C</Checkbox></Col>
                                    <Col span={4}><Checkbox value="D">D</Checkbox></Col>
                                    <Col span={4}><Checkbox value="E">E</Checkbox></Col>
                                </Row>
                            </Checkbox.Group>
                        )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Rate">
                        {getFieldDecorator('rate', {
                            initialValue: 3.5
                        })(<Rate />)}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="upload" extra="longggggggggggggggggggggggggg">
                        {getFieldDecorator('upload', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normalFile
                        })(
                            <Upload name="logo" action="/upload/do" listType="picture">
                                <Button>
                                    <Icon type="upload" /> Click to upload
                            </Button>
                            </Upload>
                        )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Dragger">
                        <div className={styles['dropbox']}>
                            {getFieldDecorator('dragger', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normalFile,
                            })(
                                <Upload.Dragger name="files" action="/upload.do">
                                    <p className="ant-upload-drag-icon">
                                        <Icon type="inbox"></Icon>
                                    </p>
                                    <p className="andt-upload-text">Click or drag file to this area to upload</p>
                                    <p className="andt-upload-hint">Support for a single or bulk upload.</p>
                                </Upload.Dragger>
                            )}
                        </div>
                    </Form.Item>

                    <Form.Item style={{ textAlign: 'center' }} wrapperCol={{ span: 12, offset: 6 }}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </PageHeaderWrapper>
        )
    }
}

const WrappedApp = Form.create()(App)
export default WrappedApp;
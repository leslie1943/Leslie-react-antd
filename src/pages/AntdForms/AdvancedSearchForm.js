import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Row, Col, Divider, message, Icon, Button, Input, Checkbox } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './FormDemo.less';

@Form.create()
class AdvancedSearchForm extends Component {
    state = {
        expand: false,
    }

    // to generate mock Form.Item
    getFields() {
        const count = this.state.expand ? 10 : 6;
        const { getFieldDecorator } = this.props.form
        const children = [];
        for (let i = 0; i < 10; i++) {
            children.push(
                <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
                    <Form.Item label={`Field${i}`}>
                        {getFieldDecorator(`field-${i}`, {
                            rules: [{ required: true, message: 'Input something' }]
                        })(
                            <Input placeholder='placeholder'></Input>
                        )}
                    </Form.Item>
                </Col>
            )
        }
        return children;
    }
    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    }
    handleRest = () => {
        this.props.form.resetFields();
    }

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand })
    }

    render() {
        return (
            <Form className={styles['ant-advanced-search-form']} onSubmit={this.handleSearch}>
                <Row gutter={24}>{this.getFields()}</Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">Search</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleRest}>Clear</Button>
                        <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                            Collapse <Icon type={this.state.expand ? 'up' : 'down'}></Icon>
                        </a>
                    </Col>
                </Row>
            </Form>
        )
    }
}
export default AdvancedSearchForm
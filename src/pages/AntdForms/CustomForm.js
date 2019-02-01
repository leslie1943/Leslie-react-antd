import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Button, Input, Select, message } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './FormDemo.less';
const { Option } = Select;

/**
    提供受控属性 value 或其它与 valuePropName 的值同名的属性。
    提供 onChange 事件或 trigger 的值同名的事件。
    不能是函数式组件
 */
class PriceInput extends Component {
    static getDerivedStateFromProps(nextProps) {
        console.info('nextProps')
        console.info(nextProps)
        // should be a controlled component
        if ('value' in nextProps) {
            return {
                ...(nextProps.value || {})
            }
        }
        return null;
    }
    constructor(props) {
        console.info('props');
        console.info(props)
        // 父组件中: initialValue: { number: 0, currency: 'rmb' },
        super(props)
        const value = props.value || {};
        this.state = {
            number: value.number || 0,
            currency: value.currency || 'rmb',
        }
    }
    handleNumberChange = (e) => {
        const number = parseInt(e.target.value || 0, 10)
        if (Number.isNaN(number)) {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({ number })
        }
        this.triggerChange({ number })
    }

    handleCurrencyChange = (currency) => {
        if (!('value' in this.props)) {
            this.setState({ currency })
        }
        this.triggerChange({ currency })
    }

    triggerChange = (changedValue) => {
        // Should provide an event to pass value to Form.
        const onChange = this.props.onChange;
        if (onChange) {
            console.info('I have changed event')
            onChange(Object.assign({}, this.state, changedValue))
        }
    }
    render() {
        const { size } = this.props;
        // console.info(size)
        const state = this.state;
        return (
            <span>
                <Input
                    type="text"
                    // size={size}
                    value={state.number}
                    onChange={this.handleNumberChange}
                    style={{ width: '65%', marginRight: '3%' }}
                />
                <Select
                    value={state.currency}
                    // size={size}
                    style={{ width: '32%' }}
                    onChange={this.handleCurrencyChange}
                >
                    <Option value="rmb">RMB</Option>
                    <Option value="dollar">Dollar</Option>
                </Select>
            </span>
        )
    }
}

class CustomerForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    checkPrice = (rule, value, callback) => {
        if (value.number > 0) {
            callback();
            return;
        }
        callback('Price must greater than zero')
    }

    handleChange = (values) => {
        console.info(values);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout='inline' onSubmit={this.handleSubmit}>
                <Form.Item label="Price">
                    {getFieldDecorator('price', {
                        initialValue: { number: 0, currency: 'rmb' },
                        rules: [{ validator: this.checkPrice }]
                    })(
                        <PriceInput />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        )
    }
}
const WrappedCustomerForm = Form.create()(CustomerForm)
export default WrappedCustomerForm
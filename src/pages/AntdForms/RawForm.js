import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Input, message, InputNumber } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './FormDemo.less';

function validatePrimeNumber(number) {
    if (number === 11) {
        return {
            validateStatus: 'success',
            errorMsg: null,
        }
    }
    return {
        validateStatus: 'error', //warning
        errorMsg: 'The prime between 8 and 12 is 11!',
    };
}

class RawForm extends Component {
    state = {
        number: {
            value: 11,
        },
    }
    handleNumberChange = (value) => {
        this.setState({
            number: {
                ...validatePrimeNumber(value),
                value
            }
        })
    }

    render() {
        const formItemLayout = {
            labelCol: { span: 7 },
            wrapperCol: { span: 12 },
        };
        const number = this.state.number;
        const tips = `A prime is a natural number greater than 1 that has no 
        positive divisors other than 1 and itself.`;
        return (
            <PageHeaderWrapper title="raw">
                <Form>
                    {/* 我们提供了 validateStatus help hasFeedback 等属性，你可以不需要使用 Form.create 和 getFieldDecorator，自己定义校验的时机和内容。
                        validateStatus: 校验状态，可选 'success', 'warning', 'error', 'validating'。
                        hasFeedback：用于给输入框添加反馈图标。
                        help：设置校验文案。 
                    */}
                    <Form.Item {...formItemLayout} label="Prime between 8 & 12"
                        validateStatus={number.validateStatus}
                        help={number.errorMsg || tips}
                        hasFeedback>
                        <InputNumber
                            min={8}
                            max={12}
                            value={number.value}
                            onChange={this.handleNumberChange}
                        ></InputNumber>
                    </Form.Item>
                </Form>
            </PageHeaderWrapper>
        )
    }
}
export default RawForm
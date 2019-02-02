import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, InputNumber, message, Divider, Button } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";


@Form.create()
class InputNumberDemo extends Component {
    constructor() {
        super(); // 如果要使用this,必须有super()
        this.state = { disabled: false }
    }

    handleChange = (v) => {
        message.info(v)
    }
    handleClick = () => {
        this.setState({
            disabled: !this.state.disabled,
        })
    }

    render() {
        const { form: { getFieldDecorator, getFieldValue } } = this.props;
        return (
            <PageHeaderWrapper title="Antd demo - InputNumber">
                <InputNumber min={1} max={10} onChange={this.handleChange}></InputNumber>
                <Divider />
                <InputNumber size="large" min={1} max={10} onChange={this.handleChange}></InputNumber>
                <Divider />
                <InputNumber size="small" min={1} max={10} onChange={this.handleChange}></InputNumber>
                <Divider />
                <InputNumber min={1} max={10} step={0.1} onChange={this.handleChange}></InputNumber>
                <Divider />
                <InputNumber precision={2} disabled={this.state.disabled} min={1} max={10} onChange={this.handleChange}></InputNumber>
                <Button type="primary" onClick={this.handleClick}>Toggle</Button>
                <Divider>Formatter</Divider>
                <InputNumber
                    defaultValue={1000}
                    formatter={(value) => `$ ${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={this.handleChange}>
                </InputNumber>
                <Divider>Formatter</Divider>
                {/* parse:指定从 formatter 里转换回数字的方式，和 formatter 搭配使用	 */}
                <InputNumber
                    min={0}
                    max={100}
                    formatter={(value) => `%${value}`}
                    parser={(value) => value.replace('%', '')}
                    onChange={this.handleChange}>
                </InputNumber>
            </PageHeaderWrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
        // tags: state.jenkins.tags
    }
}

// connect里的所有属性在UI层可以使用 this.props.xxx来使用.
const _inputNumberDemo = connect(mapStateToProps)(InputNumberDemo)

export default _inputNumberDemo
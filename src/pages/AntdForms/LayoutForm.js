import React, { Component } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

class App extends Component {
    constructor() {
        super()
        this.state = {
            formLayout: 'horizontal'
        }
    }
    handleChange = (e) => {
        // ----------------------------------- 方法1
        // const formLayout = e.target.value;
        // this.setState({
        //     formLayout
        // })
        // ----------------------------------- 方法2
        this.setState({
            formLayout: e.target.value
        })

    }
    render() {
        const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
        } : null;
        const buttonItemLayout = formLayout === 'horizontal' ? {
            wrapperCol: { span: 14, offset: 4 },
        } : null;
        return (
            <PageHeaderWrapper title="form layout">
                <Form layout={formLayout}>
                    <Form.Item
                        label="Form layout:"
                        {...formItemLayout}
                    >
                        <Radio.Group defaultValue="horizontal" onChange={this.handleChange}>
                            <Radio.Button value="horizontal">Horizontal</Radio.Button>
                            <Radio.Button value="vertical">Vertical</Radio.Button>
                            <Radio.Button value="inline">Inline</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="Field A:" {...formItemLayout}>
                        <Input placeholder="Please input field A"></Input>
                    </Form.Item>
                    <Form.Item label="Field B:" {...formItemLayout}>
                        <Input placeholder="Please input field A"></Input>
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button>Submit</Button>
                    </Form.Item>
                </Form>
            </PageHeaderWrapper>
        )
    }
}

const WrappedApp = Form.create()(App)
export default WrappedApp;
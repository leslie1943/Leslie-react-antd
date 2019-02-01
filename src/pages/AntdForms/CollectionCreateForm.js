import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Button, Modal, Input, Radio, message } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './FormDemo.less';

@Form.create()
class CollectionCreateForm extends Component {

    render() {
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="Create a new collection"
                onText="Create"
                onCancel={onCancel}
                onOk={onCreate}>
                <Form layout="vertical">
                    <Form.Item label="Title">
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input the title of collection' }]
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item label="Description">
                        {getFieldDecorator('description')(<Input type="textarea"></Input>)}
                    </Form.Item>
                    <Form.Item className={styles['collection-create-form_last-form-item']}>
                        {getFieldDecorator('modifier', {
                            initialValue: 'public'
                        })(
                            <Radio.Group>
                                <Radio value="public">Public</Radio>
                                <Radio value="private">Private</Radio>
                            </Radio.Group>
                        )}
                    </Form.Item>
                </Form>
            </Modal>
        )

    }
}

@Form.create()
class CollectionsPage extends Component {
    state = { visible: false, }
    showModal = () => {
        this.setState({
            visible: true
        })
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        })
    }

    handleCreate = () => {
        // debugger;
        // 子组件的Form实体
        console.info(this.formRef);
        const form = this.formRef.props.form;
        // 子组件的Form实体验证
        form.validateFields((err, values) => {
            console.info(values)
            if (err) {
                message.error('Some error occurs');
                // message.info(JSON.stringify(err))
                // {"title":{"errors":[{"message":"Please input the title of collection","field":"title"}]}}

            } else {
                // message.info(JSON.stringify(values))
                form.resetFields();
                this.setState({
                    visible: false,
                })
            }
        })
    }

    // 
    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>New Collection</Button>
                <CollectionCreateForm
                    // 获取子组件的Form实体
                    // wrappedComponentRef={this.saveFormRef}
                    wrappedComponentRef={(childFormRef) => this.formRef = childFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}>
                </CollectionCreateForm>
            </div>
        )
    }
}
export default CollectionsPage
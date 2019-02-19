import React, { Component } from 'react';
import { Form, Alert, Divider, Modal, Button } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";
import { promises } from 'fs';

class AsyncModal extends Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  }
  showModal = () => {
    this.setState({ visible: true, })
  }

  handleOK = () => {
    this.setState({
      ModalText: 'The modal will be closed after 2 seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      })
    }, 2000)
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Button onClick={this.showModal} type="primary">Open</Button>
        <Modal
          title="Async Modal"
          visible={visible}
          // onOk={this.handleOK}
          // onCancel={this.handleCancel}
          confirmLoading={confirmLoading}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={confirmLoading} onClick={this.handleOK}>Submit</Button>
          ]}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>
    )
  }
}

class ConfirmModal extends Component {
  showConfirm = () => {
    Modal.confirm({
      title: 'Do you want to delete this item?',
      content: 'Item content',
      onOk() {
        console.info('onOk')
      },
      onCancel() {
        console.info('onCancel')
      }
    })
  }
  showDeleteConfirm = () => {
    Modal.confirm({
      title: 'Do you want to delete this item?',
      content: 'Item content',
      onText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    })
  }
  showPropsConfirm = () => {
    Modal.confirm({
      title: 'Do you want to delete this item?',
      content: 'Item content',
      okText: 'Yes',
      okType: 'danger',
      okButtonProps: { disabled: true },
      cancelButtonProps: { disabled: false },
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    })
  }
  render() {
    return (
      <div>
        <Button onClick={this.showConfirm}>Confirm</Button>
        <Button onClick={this.showDeleteConfirm} type="dashed">Delete</Button>
        <Button onClick={this.showPropsConfirm} type="dashed">With extra props</Button>
      </div>
    )
  }
}

class MessageModal extends Component {
  info = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() { },
    });
  }
  success = () => {
    Modal.success({
      title: 'This is a success message',
      content: 'some messages...some messages...',
    });
  }
  error = () => {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  }
  warning = () => {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }
  render() {
    return (
      <div>
        <Button onClick={this.info}>Info</Button>
        <Button onClick={this.success}>Success</Button>
        <Button onClick={this.error}>Error</Button>
        <Button onClick={this.warning}>Warning</Button>
      </div>
    )
  }
}

class DelayModal extends Component {
  showConfirm = () => {
    Modal.confirm({
      title: 'Do you want to delete these items?',
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
        }).catch(() => console.info('Opps,error'))
      }
    })
  }
  render() {
    return (
      <div>
        <Button onClick={this.showConfirm}>Confirm</Button>
      </div>
    )
  }
}

class CountDownModal extends Component {
  countDown = () => {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: 'This is a notification message',
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    })

    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `This modal will be destroyed after ${secondsToGo} second.`,
      })
    }, 1000)

    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  }
  render() {
    return (
      <div>
        <Button onClick={this.countDown}>Open modal to close in 5s</Button>,
      </div>
    )
  }
}

class DestroyModal extends Component {
  destroyAll = () => {
    Modal.destroyAll()
  }
  showConfirm = () => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        Modal.confirm({
          content: (<Button onClick={this.destroyAll}>click to destroy all</Button>),
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        })
      }, i * 500)
    }
  }
  render() {
    return (
      <div>
        <Button onClick={this.showConfirm}>Confirm</Button>
      </div>
    )
  }
}

@Form.create()
class ModalDemo extends Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true
    })
  }
  closeModal = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    return (
      <PageHeaderWrapper title="Antd demo - modal" content="modal">
        <Button type="primary" onClick={this.showModal}>Open</Button>
        <Modal
          // centered
          style={{ top: 20 }}
          title="Basic modal top: 20"
          visible={this.state.visible}
          onOk={this.closeModal}
          onCancel={this.closeModal}
          okButtonDisabled={{ disabled: true }}
        >
          <p>Modal content</p>
          <p>Modal content</p>
          <p>Modal content</p>
        </Modal>
        <Divider />

        <Modal
          centered
          title="Basic modal centered layout"
          visible={this.state.visible}
          onOk={this.closeModal}
          onCancel={this.closeModal}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ type: 'primary' }}
        >
          <p>Modal content</p>
          <p>Modal content</p>
          <p>Modal content</p>
        </Modal>
        <Divider />
        <AsyncModal />
        <Divider />
        <ConfirmModal />
        <Divider />
        <MessageModal />
        <Divider />
        <DelayModal />
        <Divider />
        <CountDownModal />
        <Divider />
        <DestroyModal />
      </PageHeaderWrapper >
    )
  }
}

export default ModalDemo
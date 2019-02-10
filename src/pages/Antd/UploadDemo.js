import React, { Component } from 'react';
import { Form, TimePicker, Upload, Icon, Button, Switch, message, Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import moment from 'moment';

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  }
}
@Form.create()
class UploadDemo extends Component {

  onChange = (info) => {
    if (info.file.status !== 'uploading') {
      console.info(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    return (
      <PageHeaderWrapper title="Antd demo - upload" content="upload" >
        <Upload {...props}>
          <Button><Icon type="upload" />Click to upload</Button>
        </Upload>
      </PageHeaderWrapper >
    )
  }
}

export default UploadDemo
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
function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg'
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJPG && isLt2M
}
class Avatar extends Component {
  state = { loading: false }

  handleChange = (info) => {
    console.info(info)
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
    }
    if (info.file.status === 'done') {
      // Get this url from reponse in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false
      }))
    }
  }
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'}></Icon>
        <div className="antd-upload-text">Upload</div>
      </div>
    )
    const imageUrl = this.state.imageUrl;
    return (
      <Upload name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
      </Upload>
    )
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
        <Divider />
        <Avatar />
        <Divider />
        <Upload action="//jsonplaceholder.typicode.com/posts/" directory>
          <Button>
            <Icon type="upload" /> Upload Directory</Button>
        </Upload>,
      </PageHeaderWrapper >
    )
  }
}

export default UploadDemo
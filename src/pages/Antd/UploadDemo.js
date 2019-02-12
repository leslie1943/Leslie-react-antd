import React, { Component, PureComponent } from 'react';
import { Form, TimePicker, Upload, Icon, Modal, Button, Switch, message, Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import reqwest from 'reqwest'
import UploadButton4PictureCard from '@/components/UploadButton4PictureCard';
import moment from 'moment';
import styles from './LayoutDemo.less';
const Dragger = Upload.Dragger;

// -------------------- for Dragger
const props3 = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    console.info('In Dragger')
    console.info(info)
    // 🚀🚀🚀🚀🚀 info => file + fileList 🚀🚀🚀🚀
    // file: 最近上传的文件
    // fileList: 已上传的文件列表
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
}

// -------------------- for PictureList
const fileList = [
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  }, {
    uid: '-2',
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  }];

const props1 = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
};

const props2 = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
  className: styles['ant-upload-list-item'],
};
// -------------------- for PictureList


const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  }
}

const defaultProps = {
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.info(file, fileList)
    }
  },
  // file list format: uid,name,status,url
  defaultFileList: [{
    uid: '1',
    name: 'xxx.png',
    status: 'done',
    response: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: '2',
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }, {
    uid: '3',
    name: 'zzz.png',
    status: 'error',
    response: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  }]
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
    console.info('handleChange')
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
    // 头像，只显示和操作一个
    const imageUrl = this.state.imageUrl;
    console.info(imageUrl);
    return (
      <Upload name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img style={{ width: 80, height: 60 }} src={imageUrl} alt="avatar" /> : <UploadButton4PictureCard />}
      </Upload>
    )
  }
}

class PictureWall extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }]
  }
  handleCancel = () => {
    this.setState({ previewVisible: false })
  }
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    })
  }

  // handleChange传递的参数就是当前的fileList
  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
    const { previewVisible, previewImage, fileList } = this.state
    return (
      <div className="clearfix">
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}>
          {fileList.length >= 5 ? null : <UploadButton4PictureCard />}
        </Upload>
        <Modal visible={previewVisible}
          footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    )
  }
}

class MyUpload extends Component {
  state = {
    fileList: [{
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png',
    }]
  }

  handleChange = (info) => {
    console.info('MyUpload')
    console.info(info)
    let fileList = info.fileList
    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2)
    // 2. Read from response and show file link
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url
      }
      return file
    })
    // 3. Filter successfully uploaded files according to response from server
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === 'success'
      }
      return false
    })
    this.setState({ fileList })
  }

  render() {
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange: this.handleChange,
      multiple: true,
    }
    return (
      <Upload {...props} fileList={this.state.fileList}>
        <Button><Icon type="upload" /></Button>
      </Upload>
    )
  }
}

class PictureList extends PureComponent {
  render() {
    return (
      <div>
        <Upload {...props1}>
          <Button><Icon type="upload" />upload</Button>
        </Upload>
        <br /> <br />
        <Upload {...props2}>
          <Button><Icon type="upload" />upload</Button>
        </Upload>
      </div>
    )
  }
}

class DraggerDemo extends Component {
  render() {
    return (
      <Dragger {...props3}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
      </Dragger>
    )
  }
}

// 核心思想
// 1: 操作文件时,beforeUpload返回false,不执行上传动作,但记录上传的文件.
// 2: 当操作的文件个数大于0个时,可执行手动上传.
// 3: 使用reqwest(ajax)请求发送数据
class ManuallyDemo extends Component {
  state = {
    fileList: [],
    uploading: false,
  }

  handleUpload = () => {
    const { fileList } = this.state
    const formData = new FormData()
    fileList.forEach((file) => {
      formData.append('files[]', file)
    })
    this.setState({
      uploading: true
    })
    // Ajax
    reqwest({
      url: '//jsonplaceholder.typicode.com/posts/',
      method: 'post',
      processData: false,
      data: formData,
      // success: 清空待上传的文件并修改loading
      success: () => {
        this.setState({
          fileList: [],
          uploading: false
        })
        message.success('Upload successfully.')
      },
      // error: 保留待上传文件并修改loading
      error: () => {
        this.setState({
          uploading: false
        })
        message.error('Upload failed.')
      }
    })
  }

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      // remove
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file)
          const newFileList = state.fileList.slice()
          newFileList.splice(index, 1)
          return {
            fileList: newFileList
          }
        })
      },
      //before upload: 获取上传前的文件
      beforeUpload: (file) => {
        console.info(file)
        this.setState(state => ({
          fileList: [...state.fileList, file]
        }))
        return false;
      },
      fileList
    }
    return (
      <div>
        <Upload listType="picture" {...props}>
          <Button>
            <Icon type="upload" /> Select File
          </Button>
        </Upload>
        <Button type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start upload'}
        </Button>
      </div >
    )
  }
}

@Form.create()
class UploadDemo extends Component {

  onChange = (info) => {
    if (info.file.status !== 'uploading') {
      // console.info(info.file, info.fileList);
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
        </Upload>
        <Divider />
        <PictureWall />
        <Divider>defaultFileList custom error message</Divider>
        <Upload {...defaultProps}>
          <Button><Icon type="upload" />upload</Button>
        </Upload>
        <Divider />
        <MyUpload />
        <Divider />
        <PictureList />
        <Divider />
        <DraggerDemo />
        <Divider />
        <ManuallyDemo />
      </PageHeaderWrapper >
    )
  }
}

export default UploadDemo
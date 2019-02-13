import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, Row, Col, Divider, Collapse } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import path from 'path'
const Panel = Collapse.Panel;

@Form.create()
class PathDemo extends Component {
  render() {
    const pathJoinDesc = `path.join:将路径片段使用特定的分隔符(/)连接起来形成路径,并规范化生成的路径.若任意一个路径片段类型错误,会报错`
    const pathResolveDesc = `path.resolve:把一个路径或路径片段的序列解析为一个绝对路径。相当于执行cd操作`
    return (
      <PageHeaderWrapper title="Node demo - path" content="path">
        <Collapse>
          <Panel header={pathJoinDesc} key="1">
            {/* <span style={{ fontSize: 16, fontWeight: 'bold' }}>{pathJoinDesc}</span> */}
            <Divider />
            {`console.info(__dirname):  ` + __dirname}
            <Divider />
            {`path.join(__dirname,'img/so'):  ` + path.join(__dirname, 'img/so')}
            <Divider />
            {`path.join(__dirname,'./img/so'):  ` + path.join(__dirname, './img/so')}
            <Divider />
            {`path.join(__dirname,'../img/so'):  ` + path.join(__dirname, '../img/so')}
            <Divider />
            {`path.join('foo/bar','baz'):  ` + path.join('foo/bar', 'baz')}
            <Divider />
          </Panel>
          <Panel header={pathResolveDesc} key="2">
            {`console.info(__dirname):  ` + __dirname}
            <Divider />
            {` path.resolve(__dirname,'/img/so'):   ` + path.resolve(__dirname, '/img/so')}
            <Divider />
            {` path.resolve(__dirname,'./img/so'):   ` + path.resolve(__dirname, './img/so')}
            <Divider />
            {` path.resolve('/foo/bar', './baz'):   ` + path.resolve('/foo/bar', './baz')}
            <Divider />
            {` path.resolve('/foo/bar', '/tmp/file/'):   ` + path.resolve('/foo/bar', '/tmp/file/')}
          </Panel>
        </Collapse>
      </PageHeaderWrapper>
    )
  }
}

export default PathDemo
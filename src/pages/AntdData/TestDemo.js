import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon, message, Table } from 'antd';

const handleMenuClick = (e) => {
  message.info('find detail in console');
  console.log('click', e);
}

const renderAction = (server) => {
  return (
    <Dropdown.Button overlay={menu}>
      actions
    </Dropdown.Button>
  )
}


const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="reset"><Icon type="user" />Reset</Menu.Item>
    <Menu.Item key="on"><Icon type="user" />Power on</Menu.Item>
    <Menu.Item key="off"><Icon type="user" />Power off</Menu.Item>
  </Menu>
);

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: '',
    render: server => renderAction(server)
  }
]


class TestDemo extends Component {
  render() {

    const data = [{ name: 'leslie', key: '1' }, { name: 'sola', key: '2' }]
    return (
      <div>
        <Table dataSource={data}
          columns={columns}>
        </Table>
      </div>
    )
  }
}
export default TestDemo
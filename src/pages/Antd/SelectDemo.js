import React, { Component } from 'react';
import { connect } from 'dva';
import { Select, Form, message, Divider, Spin, Icon } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import debounce from 'lodash/debounce';
const { Option, OptGroup } = Select
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
const children = [];
for (let i = 0; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

class SelectWithHiddenSelectedOptions extends Component {
  state = {
    selectedItems: []
  }
  handleChange = selectedItems => {
    this.setState({ selectedItems })
  }
  render() {
    const { selectedItems } = this.state;
    // includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    return (
      <Select mode="multiple"
        placeholder="Inserted are removed"
        value={selectedItems}
        onChange={this.handleChange}
        style={{ width: '50%' }}
      >
        {filteredOptions.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
    )
  }
}

class UserRemoteSelect extends Component {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.fetchUser = debounce(this.fetchUser, 800)
  }
  state = {
    data: [],
    value: [],
    fetching: false
  }
  fetchUser = (value) => {
    console.info('fecthing user:', value);
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({
      data: [], fetching: true,
    })
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then((body) => {
        if (fetchId !== this.lastFetchId) {
          return;
        }
        const data = body.results.map(user => ({
          text: `${user.name.first} ${user.name.last}`,
          value: user.login.username
        }));

        this.setState({
          data, fetching: false
        })
      })
  }
  handleChange = (value) => {
    this.setState({
      data: [],
      value,
      fetching: false
    })
  }

  render() {
    const { fetching, data, value } = this.state;
    return (
      <Select
        mode="multiple"
        labelInValue
        value={value}
        placeholder="Select users"
        notFoundContent={fetching ? <Spin size="small" /> : null}
        // notFoundContent="Not found"
        /* filterOption
        是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，
        当 option 符合筛选条件时，应返回 true，反之则返回 false。	
        */
        filterOption={false}
        onSearch={this.fetchUser}
        onChange={this.handleChange}
        style={{ width: '50%' }}
      >
        {data.map(d => <Option key={d.value}>{d.text}</Option>)}
      </Select>
    )
  }
}

class ExtendSelect extends Component {
  render() {
    return (
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        dropdownRender={menu => (
          <div>
            {menu}
            <Divider style={{ margin: '4px 0' }} />
            <div style={{ padding: '8px', cursor: 'pointer' }}>
              <Icon type="plus" /> Add item
            </div>
          </div>
        )}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
      </Select>
    )
  }
}

@Form.create()
class CascaderDemo extends Component {
  state = {
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0]
  }
  handleChange = (val) => {
    message.info(Array.isArray(val) ? val.join(',') : val)
  }
  handleProvinceChange = (value) => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0]
    })
  }
  handleCityChange = (val) => {
    this.setState({
      secondCity: val
    })
  }
  handleInLabel = (obj) => {
    message.info(JSON.stringify(obj))
  }
  render() {
    const { cities } = this.state;
    return (
      <PageHeaderWrapper title="Antd demo - select" content="select">
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} disabled>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} loading>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Divider>show search</Divider>
        <Select
          showSearch
          showArrow={true}
          style={{ width: 240 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.handleChange}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>

        <Divider>Multiple selection</Divider>
        <Select mode="multiple"
          style={{ width: 240 }}
          placeholder="Select please"
          defaultValue={['a10', 'c12']}
          onChange={this.handleChange}
        >
          {children}
        </Select>
        <Divider>tokenSeparators 复制 a,b</Divider>
        <Select mode="tags"
          maxTagPlaceholder="..."
          maxTagCount={5}
          style={{ width: 240 }}
          placeholder="Select please"
          defaultValue={['a10', 'c12']}
          onChange={this.handleChange}
          tokenSeparators={[',']}
        >
          {children}
        </Select>
        <Divider>City selection</Divider>
        <Select defaultValue={provinceData[0]}
          style={{ width: 120 }}
          onChange={this.handleProvinceChange}>
          {provinceData.map(item => <Option key={item}>{item}</Option>)}
        </Select>
        <Select
          style={{ width: 120 }}
          value={this.state.secondCity}
          onChange={this.handleCityChange}>
          {cities.map(c => <Option key={c}>{c}</Option>)}
        </Select>

        <Divider>labelInValue</Divider>
        <Select labelInValue defaultValue={{ key: 'leslie' }} style={{ width: 240 }} onChange={this.handleInLabel}>
          <Option key="leslie">Leslie Zhang 1943</Option>
          <Option key="david">David Beckham 1943</Option>
        </Select>
        <Divider>Search</Divider>
        <UserRemoteSelect></UserRemoteSelect>
        <Divider>Remove after select</Divider>
        <SelectWithHiddenSelectedOptions />
        <Divider>Group</Divider>
        <Select defaultValue="lucy"
          style={{ width: 200 }}
          onChange={this.handleChange}>
          <OptGroup label="Manager">
            <Option value="jack">Jack</Option>
            <Option value="role">Rose</Option>
          </OptGroup>
          <OptGroup label="Engineer">
            <Option value="leslie">Leslie</Option>
            <Option value="dora">Dora</Option>
          </OptGroup>
        </Select>
        <Divider>扩展菜单</Divider>
        <ExtendSelect />
      </PageHeaderWrapper>
    )
  }
}

export default CascaderDemo
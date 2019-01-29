import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, AutoComplete, Divider, message, Icon, Button, Input } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
const Option = AutoComplete.Option;
const dataSourceFilter = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
import styles from './AutoCompleteDemo.less';

@Form.create()
class AutoCompleteDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { dataSource: [], result: [], dataSourceCatalog: [] }
    }

    onSelect = (val) => {
        console.info(val);
    }

    onSearch = (val) => {
        console.info(val);
        this.setState({
            dataSource: !val ? [] : [
                val,
                val + val,
                val + val + val
            ]
        })
    }

    onChildSearch = (val) => {
        let result;
        if (!val || val.indexOf('@') >= 0) {
            result = []
        } else {
            result = ['gmail.com', '163.com', 'viwehigh.com'].map(domain => `${val}@${domain}`);
        }
        this.setState({ result })
    }
    onFilterOption = (inputValue, option) => {
        return option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1 ? option.props.children : ""
    }

    onSelectCatalog = (value) => {
        console.info(value);
    }

    getRandomInt = (max, min = 0) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    renderOption = (item) => {
        console.info('renderOption -- 3');
        return (
            <Option key={item.catagory} text={item.catagory}>
                {item.query}在
                <a href={`https://s.taobao.com/search?q=${item.query}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    {item.catagory}
                </a>
                区块中
                <span className="global-search-item-count">约{item.count}个结果</span>
            </Option>
        )
    }

    generateSearchResult = (query) => {
        console.info('handleSearchCatalog -- 2');
        return (new Array(this.getRandomInt(5))).join('.').split('.')
            .map((item, idx) => ({
                query,
                catagory: `${query}${idx}`,
                count: this.getRandomInt(200, 100)
            }))
    }

    handleSearchCatalog = (val) => {
        console.info('handleSearchCatalog -- 1');
        this.setState({
            dataSourceCatalog: val ? this.generateSearchResult(val) : [],
        })
    }

    render() {
        const { dataSource, result, dataSourceCatalog } = this.state;
        const children = result.map(email => <Option key={email}>{email}</Option>)
        return (
            <PageHeaderWrapper title="Antd demo - auto complete" content="auto complete">
                <AutoComplete
                    dataSource={dataSource}
                    style={{ width: 200 }}
                    onSelect={this.onSelect}
                    onSearch={this.onSearch}
                ></AutoComplete>
                <Divider></Divider>
                <AutoComplete
                    style={{ width: 200 }}
                    onSearch={this.onChildSearch}
                >
                    {children}
                </AutoComplete>
                <Divider></Divider>
                <AutoComplete
                    style={{ width: 200 }}
                    dataSource={dataSourceFilter}
                    placeholder="try to type `b`"
                    filterOption={this.onFilterOption}>
                    <Input
                        suffix={(
                            <Button type="primary" size="small">
                                <Icon type="search"></Icon>
                            </Button>
                        )}>
                    </Input>
                </AutoComplete>
                <Divider></Divider>
                <div className="global-search-wrapper" style={{ width: 300 }}>
                    <AutoComplete
                        className="global-search"
                        size="large"
                        style={{ width: '100%' }}
                        dataSource={dataSourceCatalog.map(this.renderOption)}
                        onSelect={this.onSelectCatalog}
                        onSearch={this.handleSearchCatalog}
                        placeholder="input here"
                        optionLabelProp="text">
                        <Input
                            suffix={(
                                <Button className="search-btn" size="small" type="primary">
                                    <Icon type="search" />
                                </Button>
                            )}
                        ></Input>
                    </AutoComplete>
                </div>
            </PageHeaderWrapper>
        )
    }
}

// function mapStateToProps(){
//     return {
//         // tags: state.jenkins.tags
//     }
// }
// // // connect里的所有属性在UI层可以使用 this.props.xxx来使用.
// const _dropdownDemo = connect(mapStateToProps)(DropdownDemo)

export default AutoCompleteDemo
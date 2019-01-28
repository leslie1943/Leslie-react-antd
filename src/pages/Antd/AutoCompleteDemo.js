import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, AutoComplete, Divider, message, Icon, Button, Input } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
const Option = AutoComplete.Option;
const dataSourceFilter = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

@Form.create()
class AutoCompleteDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { dataSource: [], result: [] }
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

    render() {
        const { dataSource, result } = this.state;
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
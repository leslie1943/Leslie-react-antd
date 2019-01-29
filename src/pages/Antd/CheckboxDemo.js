import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Divider, message, Icon, Button, Input, Checkbox } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './CheckboxDemo.less'
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Orange', 'Pear'];
const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
];

const defaultCheckedList = ['Apple', 'Orange'];


@Form.create()
class CheckboxDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            now: "No",
            checked: true,
            disabled: false,
            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false,
        }
    }

    onChange = (e) => {
        if (e.target.checked) {
            this.setState({
                now: "Yes"
            })
        } else {
            this.setState({
                now: "No"
            })
        }
    }
    onChangeHandle = (vals) => {
        message.info(vals.join('.'));
    }

    onChangeControl = (e) => {
        console.info('checked = ' + e.target.checked)
        this.setState({
            checked: e.target.checked,
        })
    }

    toggleChecked = () => {
        this.setState({
            checked: !this.state.checked,
        })
    }
    toggleDisable = () => {
        this.setState({
            disabled: !this.state.disabled
        })
    }

    onCheckAllChange = (e) => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        })
    }

    onChangeAll = (checkedList) => {
        this.setState({
            checkedList: checkedList,
            // interminate: 有选中但不是全选.
            indeterminate: checkedList.length && checkedList.length < plainOptions.length,
            checkAll: checkedList.length === plainOptions.length,
        })
    }

    render() {
        const label = `
            ${this.state.checked ? 'Checked' : 'Unchecked'} - 
            ${this.state.disabled ? 'Disabled' : 'Enable'}
        `
        return (
            <PageHeaderWrapper title="Antd demo - checkbox" content="checkbox">
                <div>
                    <Checkbox onChange={this.onChange}>
                        <span className={this.state.now == "Yes" ? styles['yes'] : styles['no']}>{this.state.now}</span>
                    </Checkbox>
                    <Divider></Divider>
                    <Checkbox defaultChecked={false} disabled></Checkbox>
                    <br></br>
                    <Checkbox defaultChecked disabled></Checkbox>
                    <Divider></Divider>
                    <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.onChangeHandle}></CheckboxGroup>
                    <br /><br />
                    <CheckboxGroup options={options} defaultValue={['Pear']} onChange={this.onChangeHandle}></CheckboxGroup>
                    <br /><br />
                    <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={this.onChangeHandle}></CheckboxGroup>
                    <Divider></Divider>
                    <Checkbox
                        checked={this.state.checked}
                        disabled={this.state.disabled}
                        onChange={this.onChangeControl}
                    >{label}</Checkbox>
                    <p style={{ marginTop: 10 }}>
                        <Button type="primary" size="small" onClick={this.toggleChecked}>{this.state.checked ? 'Uncheck' : 'Check'}</Button>
                        <Button style={{ marginLeft: '10px' }} type="primary" size="small" onClick={this.toggleDisable}>{this.state.disabled ? 'Enable' : 'Disable'}</Button>
                    </p>
                    <Divider></Divider>
                    <Checkbox
                        indeterminate={this.state.indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={this.state.checkAll}
                    >Check all</Checkbox>
                    <br />
                    <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChangeAll}></CheckboxGroup>
                </div>
            </PageHeaderWrapper >
        )
    }
}

export default CheckboxDemo
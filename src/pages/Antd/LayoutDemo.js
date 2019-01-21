import React, { Component } from 'react';
import { connect } from 'dva';
import {Form, Row, Col,Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './GridDemo.less';


@Form.create()
class LayoutDemo extends Component{
    constructor(){
        super(); // 如果要使用this,必须有super()
    }

    render(){
        return(
            <PageHeaderWrapper title="Antd demo - Layout" content="layout">
                
            </PageHeaderWrapper>
        )
    }
}

function mapStateToProps(){
    return {
        // tags: state.jenkins.tags
    }
}

// // connect里的所有属性在UI层可以使用 this.props.xxx来使用.
const _layoutDemo = connect(mapStateToProps)(LayoutDemo)

export default _layoutDemo
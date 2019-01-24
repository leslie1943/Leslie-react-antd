import React, { Component } from 'react';
import { connect } from 'dva';
import { Form,Breadcrumb,Icon,Alert} from 'antd';
import styles from './BreadCrumbDemo.less';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@Form.create()
class BreadCrumbDemo extends Component{

    render(){
        return(
            <PageHeaderWrapper>
                <Breadcrumb separator='>'>
                    <Breadcrumb.Item><Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item><a href="/antd/grid"><Icon type="user" /> <span>Application Center</span></a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
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
const _breadCrumbDemo = connect(mapStateToProps)(BreadCrumbDemo)

export default _breadCrumbDemo
import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Divider, Row,Col,Button,Icon  } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import MenuComponent from './components/MenuComponent';

@Form.create()
class MenuDemo extends Component{
    constructor(){
        super(); //初始化 this
        this.state = {current: 'email'}
    }
    // state = {current: 'email'}

    handleClick = (e) =>{
        console.info('click',e);
        this.setState({
            current: e.key,
            collapsed: false,
        });
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    render(){
       return(
        <PageHeaderWrapper title="Antd demo - menu" content="menu">
        {/*
        <Component
            connectMethod={this.parentMethod} // 在子组件中直接使用 this.props.connectMethod 会执行父组件绑定的方法.
            connectProperty={this.state.parentProperty} // 
        >
        </Component> 
         */}
            <MenuComponent  
                connectHandle={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                theme="ligth">
            </MenuComponent>

            <Divider></Divider>
            <Row>
                <Col offset="2" span="6">
                    <MenuComponent  
                        connectHandle={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="vertical"
                        theme="dark">
                    </MenuComponent>
                </Col>
            </Row>
            <Divider></Divider>
            <Button type="primary" onClick={this.toggleCollapsed}>
                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}></Icon>
            </Button>
            <Row>
                <Col offset="2" span="6">
                    <MenuComponent  
                        connectHandle={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="inline"
                        theme="light"
                        collapsed={this.state.collapsed}>
                    </MenuComponent>
                </Col>
            </Row>
          
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
const _menuDemo = connect(mapStateToProps)(MenuDemo)

export default _menuDemo
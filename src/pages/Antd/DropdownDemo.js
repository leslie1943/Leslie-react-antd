import React, { Component } from 'react';
import { connect } from 'dva';
import { Form,Menu,Dropdown,Icon,message, Divider} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@Form.create()
class DropdownDemo extends Component{
    constructor(){
        super();
        this.state = {visible: true}
    }
    // Handler
    handleMenuClick = (val) =>{
        message.success(val.key);
    }

    render(){
        // 也可以在这里定义 Menu
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="alipay"><a targe="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">AliPay</a></Menu.Item>
                <Menu.Item key="taobao"><a targe="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">TaoBao</a></Menu.Item>
                <Menu.Item key="tianmao"><a targe="_blank" rel="noopener noreferrer" href="http://www.tianmao.com/">TianMao</a></Menu.Item>
                <Menu.Divider></Menu.Divider>
                <Menu.Item key="suzhen 1"><Icon type="user" />1st menu item</Menu.Item>
                <Menu.Item key="suzhen 2"><Icon type="user" />2nd menu item</Menu.Item>
                <Menu.Item  disabled key="suzhen 3"><Icon type="user" />3rd item</Menu.Item>
            </Menu>
        );
        return(
            <PageHeaderWrapper>
                <Divider></Divider>
                <div style={{textAlign:'center'}}>
                    {/* placement: bottomLeft,bottomCenter,bottomRight,topLeft,topCenter,topRight */}
                <Dropdown overlay={menu} placement="topCenter">
                <a className="ant-dropdown-link" href="#">
                Hover me <Icon type="down"></Icon>
                </a>
                </Dropdown>
                
                <Divider></Divider>

                <Dropdown overlay={menu} placement="topCenter" trigger={['contextMenu']}>
                <a className="ant-dropdown-link" href="#">
                Rigth Click on me <Icon type="down"></Icon>
                </a>
                </Dropdown>

               <Divider></Divider>

                <Dropdown
                 overlay={menu} placement="bottomCenter" trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                 Click on me <Icon type="down"></Icon>
                </a>
                </Dropdown>
               </div>
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
const _dropdownDemo = connect(mapStateToProps)(DropdownDemo)

export default _dropdownDemo
import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@Form.create()
class MenuComponent extends Component {
    // 构造方法可以不用.
    // constructor (props) {
    //     super(props)
    // }
    render() {
        return (
            <Menu
                subMenuCloseDelay={1} // 用户鼠标离开子菜单后关闭延时，单位：秒	
                subMenuOpenDelay={1} // subMenuOpenDelay
                onClick={this.props.connectHandle}
                selectedKeys={this.props.selectedKeys}
                mode={this.props.mode}
                theme={this.props.theme}
                // Warning: `inlineCollapsed` should only be used when Menu's `mode` is inline.
                inlineCollapsed={this.props.collapsed ? this.props.collapsed : false}
            >
                {/* Menu.Item 为单纯的主菜单 */}
                <Menu.Item key="email">
                    <Icon type="mail" /> Navigation One
                </Menu.Item>

                <Menu.Item key="app" disabled>
                    <Icon type="appstore" /> Navigation Two
                </Menu.Item>

                {/* Menu.SubMenu 带有子菜单的一级菜单 */}
                <Menu.SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>

                    {/* 菜单项分割线，只用在弹出菜单内 */}
                    <Menu.Divider></Menu.Divider> 

                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </Menu.SubMenu>

                {/* 分组的子菜单 */}
                <Menu.SubMenu title="Pure title SubMenu">
                    <MenuItemGroup title="Item 3">
                        <Menu.Item key="setting:31">Option 1</Menu.Item>
                        <Menu.Item key="setting:32">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 4">
                        <Menu.Item key="setting:41">Option 3</Menu.Item>
                        <Menu.Item key="setting:42">Option 4</Menu.Item>
                    </MenuItemGroup>
                </Menu.SubMenu>

                {/* 不分组的子菜单 */}
                <Menu.SubMenu title={<span><Icon type="wechat" />Tencent</span>}>
                    <Menu.Item key="wechat"><Icon type="wechat"></Icon>Wechat</Menu.Item>
                    <Menu.Item key="qq"><Icon type="qq"></Icon>QQ</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                </Menu.Item>

            </Menu>
        )
    }
}

// function mapStateToProps() {
//     return {
//         // tags: state.jenkins.tags
//     }
// }
// // // connect里的所有属性在UI层可以使用 this.props.xxx来使用.
// const _menuComponent = connect(mapStateToProps)(MenuComponent)

export default MenuComponent
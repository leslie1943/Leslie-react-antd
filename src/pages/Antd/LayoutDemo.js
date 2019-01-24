import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Row,Col,Form,Layout,Divider, Menu, Icon, Affix,Button} from 'antd';
import styles from './LayoutDemo.less';

const { Header,Footer,Sider,Content,} = Layout;

@Form.create()
class LayoutDemo extends Component{
    constructor(){
        super(); // 如果要使用this,必须有super()
        this.state = {
            collapsed:false,
            top:10,
            bottom:10
        }
    }
    toggle = () =>{
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render(){
        return(
            <PageHeaderWrapper title="Antd demo - Layout" content="Layout">
                <Affix offsetTop={this.state.top}>
                    <Button type="primary" onClick={()=>this.setState({top:this.state.top+10})}>We have Affix in this page...</Button>
                </Affix>
                <Divider></Divider>
               
                <Layout>
                    <Header style={{background:'#7dbcea'}}>Header</Header>
                    <Content style={{background:'rgba(16, 142, 233, 1)',textAlign:'center'}}>Content</Content>
                    <Footer style={{background:'#7dbcea'}}>Footer</Footer>
                </Layout>
                <Divider></Divider>

                <Layout>
                    <Header style={{background:'#7dbcea'}}>Header</Header>
                    <Layout>
                        <Sider style={{background:'pink'}}>Sider</Sider>
                        <Content style={{background:'rgba(16, 142, 233, 1)',textAlign:'center'}}>Content</Content>
                    </Layout>
                    <Footer style={{background:'#7dbcea'}}>Footer</Footer>
                </Layout>

                <Divider>Full Sider</Divider>
                <Layout>
                    <Sider>Sider</Sider>
                    <Layout>
                    <Header style={{background:'#7dbcea'}}>Header</Header>
                    <Content style={{background:'rgba(16, 142, 233, 1)',textAlign:'center'}}>Content</Content>
                    <Footer style={{background:'#7dbcea'}}>Footer</Footer>
                    </Layout>
                </Layout>

                <Divider>Trigger Sider</Divider>
                <Layout>
                    <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    >
                    <div className={styles.logo}></div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                            <Icon type="user"></Icon>
                            <span>nav 1</span>
                            </Menu.Item>

                            <Menu.Item key="2">
                            <Icon type="video-camera"></Icon>
                            <span>nav 2</span>
                            </Menu.Item>

                            <Menu.Item key="3">
                            <Icon type="upload"></Icon>
                            <span>nav 3</span>
                            </Menu.Item>
                        </Menu>
                    
                    </Sider>

                    <Layout>
                        <Header style={{background:'#fff',padding:0}}>
                            <Icon type={this.state.collapsed ? 'menu-unfold': 'menu-fold'} className={styles.trigger}
                            onClick={this.toggle}></Icon>
                        </Header>
                        <Content style={{margin:'24px 16px',padding:24,background:'#fff',minHeight:280}}>
                            
                        <Divider>Affix</Divider>
                        <Row>
                            <Col offset="4" span="4">
                                <Affix offsetTop={this.state.top}>
                                    <Button type="primary"
                                    onClick={()=>this.setState({top:this.state.top+10})}>Affix Top</Button>
                                </Affix>
                            </Col>
                            <Col offset="4" span="4">
                                <Affix offsetBottom={this.state.bottom}>
                                    <Button type="primary"
                                    onClick={()=>this.setState({bottom:this.state.bottom+10})}>Affix bottom</Button>
                                </Affix>
                            </Col>
                        </Row>
                        </Content>
                    </Layout>
                </Layout>
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
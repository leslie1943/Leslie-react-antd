import React, { Component } from 'react';
import { connect } from 'dva';
import {Form, Row, Col,Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './GridDemo.less';


@Form.create()
class GridDemo extends Component{
    constructor(){
        super(); // 如果要使用this,必须有super()
    }

    render(){
        return(
            <PageHeaderWrapper title="Antd demo - Grid" content="grid">
                {/* <p>
                    xs: <576px 响应式栅格，可为栅格数或一个包含其他属性的对象	
                    sm: ≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象	
                    md: ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象	
                    lg: ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象	
                    xl: ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象	
                    xxl:≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象	
                </p> */}
               <Row>
                    <Col xs={2} sm={4} md={6} lg={8} xl={12} className={styles.col_1} >xs={2} sm={4} md={6} lg={8} xl={12}</Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={12} className={styles.col_2} >xs={2} sm={4} md={6} lg={8} xl={12}</Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={12} className={styles.col_2} >xs={2} sm={4} md={6} lg={8} xl={12}</Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={12} className={styles.col_1} >xs={2} sm={4} md={6} lg={8} xl={12}</Col>
               </Row>
               <Divider></Divider>

               <Row>
                    <Col className={styles.col_1} span={8}>col-12</Col>
                    <Col offset={8} className={styles.col_2} span={8}>col-12</Col>
               </Row>
               <Divider></Divider>

               <Row>
                    <Col offset={6} className={styles.col_1} span={12}> offset-6 col-12</Col>
               </Row>
               <Divider></Divider>

               <Row>
                    <Col className={styles.col_1} span={18}  push={6} > push 栅格向右移动格数	 span-18 push-6</Col>
                    <Col className={styles.col_2} span={6}  pull={18} > pull 栅格向左移动格数	 span-6 pull-18</Col>
               </Row>
               <Divider></Divider>

               <Row gutter={16}>
                    <Col className={styles.col_1} span={8}>col-8</Col>
                    <Col className={styles.col_2} span={8}>col-8</Col>
                    <Col className={styles.col_1} span={8}>col-8</Col>
               </Row>
               <Divider></Divider>
               <Row>
                    <Col className={styles.col_1} span={6}>col-6</Col>
                    <Col className={styles.col_2} span={6}>col-6</Col>
                    <Col className={styles.col_1} span={6}>col-6</Col>
                    <Col className={styles.col_2} span={6}>col-6</Col>
               </Row>

               <p>sub-element align left</p>
                <Row type="flex" justify="start" type="flex" justify="start">
                <Col className={styles.col_1} span={4}>col-4</Col>
                <Col className={styles.col_2} span={4}>col-4</Col>
                <Col className={styles.col_1} span={4}>col-4</Col>
                <Col className={styles.col_2} span={4}>col-4</Col>
                </Row>

                <p>sub-element align center type="flex" justify="center"</p>
                <Row type="flex" justify="center">
                <Col className={styles.col_1} span={4}>col-4</Col>
                <Col className={styles.col_2} span={4}>col-4</Col>
                <Col className={styles.col_1} span={4}>col-4</Col>
                <Col className={styles.col_2} span={4}>col-4</Col>
                </Row>

                <p>sub-element align right type="flex" justify="end"</p>
                <Row type="flex" justify="end">
                <Col className={styles.col_1} span={4}>col-4</Col>
                <Col className={styles.col_2} span={4}>col-4</Col>
                <Col className={styles.col_1} span={4}>col-4</Col>
                <Col className={styles.col_2} span={4}>col-4</Col>
                </Row>

                <p>sub-element monospaced arrangement type="flex" justify="space-between"</p>
                <Row type="flex" justify="space-between">
                <Col className={styles.col_1} span={4}>col-4</Col>
                <Col className={styles.col_2} span={4}>col-4</Col>
                <Col className={styles.col_1} span={4}>col-4</Col>
                <Col className={styles.col_2} span={4}>col-4</Col>
                </Row>

                <p>sub-element align full  type="flex" justify="space-around" </p>
                <Row type="flex" justify="space-around">
                <Col className={styles.col_1} span={4}>col-4</Col>
                <Col className={styles.col_2} span={4}>col-4</Col>
                <Col className={styles.col_1} span={4}>col-4</Col>
                <Col className={styles.col_2} span={4}>col-4</Col>
                </Row>
                <Divider></Divider>

                <Row type="flex">
                    <Col className={styles.col_1} span={6} order={4}> 1 col-order-4</Col>
                    <Col className={styles.col_2} span={6} order={3}> 2 col-order-3</Col>
                    <Col className={styles.col_3} span={6} order={2}> 3 col-order-2</Col>
                    <Col className={styles.col_4} span={6} order={1}> 4 col-order-1</Col>
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
const _gridDemo = connect(mapStateToProps)(GridDemo)

export default _gridDemo
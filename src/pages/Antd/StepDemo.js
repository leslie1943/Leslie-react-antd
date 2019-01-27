import React, { Component } from 'react';
import { connect } from 'dva';
import { Form,Steps, Divider,message,Icon,Button} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './StepDemo.less';


const Step = Steps.Step;
const steps = [{
    title: 'First',
    content: 'First-content',
  }, {
    title: 'Second',
    content: 'Second-content',
  }, {
    title: 'Last',
    content: 'Last-content',
  }];

@Form.create()
class StepDemo extends Component{
    constructor(props){
        super(props);
        this.state = {current: 0,now:0}
    }
    next = () =>{
        const current = this.state.current + 1;
        this.setState({current})
    }
    prev = () => {
        const current = this.state.current - 1;
        this.setState({current})
    }
    doNext = () => {
        message.info(this.state.now);
        if(this.state.now == 2){
            this.setState({now:0})
        }else{
            const now = this.state.now + 1
            this.setState({
                now:now,
            })
        }
    }
    render(){
       const {current } = this.state;
    //    console.info(current)
        return(
            <PageHeaderWrapper title="Antd demo - Pagination" content="pagination">
               <Steps size="small" current={this.state.now}>
                    <Step title="Waiting" description="This is a description"></Step>
                    <Step title="In Progress" description="This is a description"></Step>
                    <Step title="Finish" description="This is a description"></Step>
               </Steps>
               <Button type="primary" onClick={this.doNext}>Next</Button>
               <Divider></Divider>

               <Steps size="small" progressDot current={1}>
                    <Step title="Waiting" description="This is a description"></Step>
                    <Step title="In Progress" description="This is a description"></Step>
                    <Step title="Finish" description="This is a description"></Step>
               </Steps>
               <Divider></Divider>

               <Steps size="small" current={2} status="error">
                    <Step title="Waiting" description="This is a description"></Step>
                    <Step title="In Progress" description="This is a description"></Step>
                    <Step title="Finish" description="This is a description"></Step>
               </Steps>
               <Divider></Divider>

               <Steps size="small" direction="vertical" current={0}>
                    <Step title="Waiting" description="This is a description"></Step>
                    <Step title="In Progress" description="This is a description"></Step>
                    <Step title="Finish" description="This is a description"></Step>
               </Steps>
               <Divider></Divider>

               <Steps current={0}>
                   <Step status="finish" title="Login" icon={<Icon type="user"></Icon>}></Step>
                   <Step status="finish" title="Verification" icon={<Icon type="solution"></Icon>}></Step>
                   <Step status="progress" title="Progress" icon={<Icon type="loading"></Icon>}></Step>
                   <Step status="wait" title="Done" icon={<Icon type="smile-o"></Icon>}></Step>
               </Steps>

               <Divider></Divider>

               <Steps current={current}>
                {steps.map(item => <Step title={item.title} key={item.title}></Step>)}
                </Steps>
                <div className={styles["steps-content"]}>{steps[current].content}</div>
                <div className={styles["steps-action"]}>
                    {
                        current < steps.length - 1 &&
                        <Button type="primary" onClick={this.next}>Next</Button>
                    }
                    {
                        current == steps.length - 1 &&
                        <Button type="primary" onClick={() => message.success('Progress complete!')}>Done</Button>
                    }
                    {
                        current > 0 && 
                        <Button type="primary" onClick={this.prev} style={{marginLeft:'8px'}}>Previous</Button>
                    }
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

export default StepDemo
import React, { Component } from 'react';
import { connect } from 'dva';
import { Form,Pagination, Divider,message} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@Form.create()
class PaginationDemo extends Component{
    constructor(){
        super();
        this.state = {current: 3}
    }
    onShowSizeChange = (current, pageSize) => {
        message.info("current:" + current + " --- pageSize:" + pageSize);
    }

    onChange = (pageNumber) => {
        message.info('pageNumber:' + pageNumber);
    }

    showTotal = (total) => {
        return `Total ${total} items`
    }

    itemRender = (current,type,originElement) => {
        if(type == 'prev'){
            return <a>Previous</a>
        }
        if(type == 'next'){
            return <a>Next</a>
        }
        return originElement;
    }
    onChangeControl = (page) => {
        message.info('page:' + page);
        this.setState(
            {current: page}
        )
    }

    render(){
       
        return(
            <PageHeaderWrapper title="Antd demo - Pagination" content="pagination">
                <Pagination defaultCurrent={1} total={50} showTotal={this.showTotal}></Pagination>
                <Divider></Divider>
                <Pagination defaultCurrent={6} total={500} showTotal={this.showTotal}></Pagination>
                <Divider></Divider>
                <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} pageSizeOptions={['10','20','30','40','50','100']} defaultCurrent={3} total={500} showTotal={this.showTotal}></Pagination>
                <Divider></Divider>
                <Pagination size="small" showQuickJumper defaultCurrent={2}  total={200} onChange={this.onChange} showTotal={this.showTotal}></Pagination>
                <Divider></Divider>
                <Pagination simple defaultCurrent={2} total={200} onChange={this.onChange}></Pagination>
                <Divider></Divider>
                <Pagination total={500} itemRender={this.itemRender}></Pagination>
                <Divider></Divider>
                <Pagination defaultCurrent={1} current={this.state.current} total={50} onChange={this.onChangeControl} ></Pagination>
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

export default PaginationDemo
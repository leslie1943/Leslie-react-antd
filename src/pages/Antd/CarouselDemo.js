import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Form, Switch, Divider, Icon, Carousel } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import layout from "@/utils/layout";
import styles from './LayoutDemo.less';

@Form.create()
class CarouselDemo extends Component {

  handleChange = (a, b, c) => {
    console.info(a, b, c);
  }

  render() {
    return (
      <PageHeaderWrapper title="Antd demo - carousel" content="carousel">
        <Carousel className={styles['slick-slide']} afterChange={this.handleChange}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
        </Carousel>

        <Divider />
        <Carousel vertical className={styles['slick-slide']} afterChange={this.handleChange}>
          <div ><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>

        <Divider />
        <Carousel effect="fade" className={styles['slick-slide']} afterChange={this.handleChange}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>

        <Divider />
        <Carousel dots={false} autoplay autoplaySpeed="100" effect="fade" className={styles['slick-slide']} afterChange={this.handleChange}>
          <div><h3>111</h3></div>
          <div><h3>222</h3></div>
          <div><h3>333</h3></div>
          <div><h3>444</h3></div>
        </Carousel>

      </PageHeaderWrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    // tags: state.jenkins.tags
  }
}

// connect里的所有属性在UI层可以使用 this.props.xxx来使用.
const _carouselDemo = connect(mapStateToProps)(CarouselDemo)
// 
export default _carouselDemo
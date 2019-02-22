import React, { Component } from 'react';
import { Form, message, Divider, Anchor, BackTop } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './styles.less'
const Link = Anchor.Link

let content = [];
for (let i = 0; i < 20; i++) {
  content.push(<p>content + {i}</p>)
}
@Form.create()
class AnchorDemo extends Component {
  render() {
    return (
      <PageHeaderWrapper title="Antd demo - anchor" content="anchor">
        <Anchor affix={false}>
          <Link href="#header" title="Header"></Link>
          <Link href="#body" title="Body"></Link>
          <Link href="#footer" title="Footer"></Link>
        </Anchor>
        <div id="header">
          header content
        </div>

        <div id="body">
          {content} {content}
        </div>

        <div id="footer">
          header content
        </div>

        <BackTop style={{ marginBottom: 50 }}>
          <div className={styles['ant-back-top-inner']}>UP</div>
        </BackTop>
        <BackTop />
        <Divider />
        <Divider>With text</Divider>
        <Divider orientation="left">Left Text</Divider>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
        <Divider orientation="right">Right Text</Divider>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>

        <Divider>Vertical</Divider>
        <div>
          text
          <Divider type="vertical" />
          <a href="#">Link</a>
          <Divider type="vertical" />
          <a href="#">Link</a>
        </div>
      </PageHeaderWrapper>
    )
  }
}

export default AnchorDemo
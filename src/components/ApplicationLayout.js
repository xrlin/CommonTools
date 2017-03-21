import React, {PropTypes} from 'react';
import {Link} from 'dva/router';
import {Layout, Menu, Icon} from 'antd';
import styles from './ApplicationLayout.css';

const {Header, Content, Sider} = Layout
const {SubMenu} = Menu

function ApplicationLayout({children}) {
  return (
    <Layout style={{height: '100%'}}>
    <Header className="header">
      <div className={styles.logo}>工具</div>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%' }}
        >
          <Menu.Item key="1"><Link to='/markdown'>Markdown编辑器</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/url-converter'>URL编码/解码</Link></Menu.Item>
          <Menu.Item key="3"><Link to='/encrypter'>加密/转码工具</Link></Menu.Item>
          <Menu.Item key="4"><Link to='/json-formatter'>JSON格式化</Link></Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ background: '#fff', margin: 0, minHeight: 280, display: 'flex' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
}

ApplicationLayout.protoTypes = {
  children: PropTypes.element.isRequired
}

export default ApplicationLayout;

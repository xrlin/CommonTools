import React, {PropTypes} from 'react';
import {Link, hashHistory} from 'dva/router';
import {Layout, Menu, Icon} from 'antd';
import styles from './ApplicationLayout.css';

const {Header, Content, Sider} = Layout

const menuMap = {
  'url-converter': 'URL编码转换',
  'markdown': 'Markdown编辑器',
  '': 'Markdown编辑器',
  'json-formatter': 'JSON格式化',
  'encrypter': '加密/转码' 
}

class ApplicationLayout extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {menu: 'markdown'}
  }

  componentWillMount() {
    hashHistory.listen((event) => {
      let pathName = event.pathname.split('/');
      if(pathName[1]) {
        this.state = {menu: pathName[1]};
      }
      document.title = menuMap[this.state.menu];
    });
  }

  render() {
    return (
      <Layout style={{height: '100%'}}>
        <Header className={styles.header}>
          <div className={styles.logo}>{menuMap[this.state.menu]}</div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['markdown']}
              selectedKeys={[this.state.menu]}
              style={{ height: '100%' }}
            >
              <Menu.Item key="markdown"><Link to='/markdown'><Icon type="edit" />Markdown编辑器</Link></Menu.Item>
              <Menu.Item key="url-converter"><Link to='/url-converter'><Icon type="global" />URL编码/解码</Link></Menu.Item>
              <Menu.Item key="encrypter"><Link to='/encrypter'><Icon type="lock" />加密/转码工具</Link></Menu.Item>
              <Menu.Item key="json-formatter"><Link to='/json-formatter'><Icon type="rocket" />JSON格式化</Link></Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ background: '#fff', margin: 0, minHeight: 280, height: '100%' }}>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
    </Layout>
    );
  }
}

ApplicationLayout.protoTypes = {
  children: PropTypes.element.isRequired
}

export default ApplicationLayout;

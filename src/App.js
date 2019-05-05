import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from '@/common/privateRoute';
import { Layout } from 'antd';
import Sider from './common/sider';
import Header from './common/header';
import BookPage from './pages/book';
import UserPage from './pages/user';

import './App.less';

class App extends Component {
  render () {
    return (
      <Layout>
        <Sider />
        <Layout style={{ marginLeft: 200 }}>
          <Header />
          <Layout.Content style={{ padding: 20 }}>
            <Switch>
              {/* 右侧内容 */}
              {/* 1. 图书管理 localhost:3000/ */}
              <PrivateRoute path="/book" exact component={BookPage}></PrivateRoute>
              {/* 2. 用户管理 localhost:3000/user */}
              <PrivateRoute path="/user" exact component={UserPage}></PrivateRoute>
              {/* 重定向 */}
              {/* <Redirect to="/book"></Redirect> */}
            </Switch>
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
}

export default App;


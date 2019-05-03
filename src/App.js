import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from './common/sider';
import Header from './common/header';
import BookPage from './pages/Book';
import UserPage from './pages/User';

import './App.less'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Layout>
          <Sider />
          <Layout style={{ marginLeft: 200 }}>
            <Header />
            <Layout.Content style={{ padding: 20 }}>
              <Switch>
                <Route path='/' exact component={BookPage}></Route>
                <Route path='/user' exact component={UserPage}></Route>
                <Redirect to="/"></Redirect>
              </Switch>
            </Layout.Content>
          </Layout>
        </Layout>
      </HashRouter>
    )
  }
}

export default App

import React, { Component } from 'react';
import { BrowserRouter, hashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from './common/components/Sider';
import Header from './common/components/Header';
import BookPage from './pages/Book';
import UserPage from './pages/User';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sider />
          <Layout style={{ marginLeft: 200 }}>
            <Header />
            <Layout.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                <Switch>
                  <Route path='/' exact component={BookPage}></Route>
                  <Route path='/user' exact component={UserPage}></Route>
                  <Redirect to="/"></Redirect>
                </Switch>
              </div>
            </Layout.Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App

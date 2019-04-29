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
            <Layout.Content style={{ padding: 20 }}>
              <Switch>
                <Route path='/' exact component={BookPage}></Route>
                <Route path='/user' exact component={UserPage}></Route>
                <Redirect to="/"></Redirect>
              </Switch>
            </Layout.Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App

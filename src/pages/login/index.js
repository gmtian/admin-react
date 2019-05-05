// 登陆组件
import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  render() {
    const { handleLogin } = this.props;
    return (
      <button onClick={ handleLogin }>点我就登陆</button>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    handleLogin: () => {
      // 修改仓库，派发一个动作
      dispatch({
        type: 'LOGIN'
      })

      // 跳转回首页
      // console.log(props);
      // 取出 url 地址身上的 redirect
      let redirect = props.location.search.substr(10);
      props.history.replace(redirect);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

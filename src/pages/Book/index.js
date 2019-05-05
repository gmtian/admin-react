// 这个是全新的 Book 容器组件
import React from 'react';
import { connect } from 'react-redux';
import { inputChagne, searchBookAction, pageClickAction, getBookListAction } from './store/createActions';
import BookUI from './ui';
import store from '@/store';

// const onPageChange = (page, pageSize) => {
//   pageClickAction
// }

/**
 * 返回一个对象，返回的内容就是 UI 组件 props 的内容
 * @param {Object} state 仓库的state数据
 */
const mapStateToProps = (state) => {
  return {
    inputVal: state.book.inputVal,
    list: state.book.list,
    columns: [{
      key: 'bookId',
      title: 'bookId',
      dataIndex: 'bookId'
    }, {
      key: 'bookName',
      title: '图书名',
      dataIndex: 'bookName'
    }, {
      key: 'author',
      title: '作者',
      dataIndex: 'author'
    }, {
      key: 'coverurl',
      title: '海报',
      dataIndex: 'coverurl',
      render: (text, record, index) => {
        return <img src={text} alt=""/>
      }
    }],
    pagination: {
      total: state.book.total, // 总条数
      pageSize: state.book.pageSize,
      onChange: (page, pageSize) => {
        store.dispatch(pageClickAction(page))
      }
    }
  }
}

/**
 * 返回一个对象，返回的内容每个key都是一个方法，UI 组件 可以通过 props 获取得到
 * @param {Function} dispatch store.dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    inputValChange: (e) => {
      let value = e.target.value;
      dispatch(inputChagne(value));
    },

    searchBtnClick: () => {
      dispatch(searchBookAction());
    },

    getBookList: () => {
      dispatch(getBookListAction());
    }
  }
}

// 暴露出去的是一个容器组件
// 第一个括号里面有两个参数   mapStateToProps   mapDispatchToProps
// mapStateToProps 函数，将 redux store state 数据映射到 UI组件的 props 里面去。
// mapDispatchToProps 函数，将 某写方法 映射到 UI 组件的 props 里面去。
// 第二个括号里面接受一个UI组件
export default connect(mapStateToProps, mapDispatchToProps)(BookUI);

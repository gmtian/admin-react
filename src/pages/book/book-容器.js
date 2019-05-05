// book组件的 容器组件
import React, { Component } from 'react';
// 引入 UI 组件
import BookUI from './ui';

import store from '@/store';
import { inputChagne, getBookListAction, searchBookAction, pageClickAction } from './store/createActions';


const columns = [{
  title: 'bookId',
  dataIndex: 'bookId',
  key: 'bookId',
  sorter: (a, b) => (a.bookId - b.bookId),
}, {
  title: '图书名',
  dataIndex: 'bookName',
  key: 'bookName',
}, {
  title: '作者',
  dataIndex: 'author',
  key: 'author',
}, {
  title: '海报',
  dataIndex: 'coverurl',
  key: 'coverurl',
  render: (text, record, index) => {
    return <img src={text} alt="" />
  }
}];

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: store.getState().book.list,
      inputVal: store.getState().book.inputVal,
      pageNum: store.getState().book.pageNum,
      pageSize: store.getState().book.pageSize,
      pagination: {
        total: store.getState().book.total, // 总条数
        pageSize: store.getState().book.pageSize,
        onChange: this.onPageChange.bind(this)
      }
    }

    store.subscribe(() => {
      this.setState(() => ({
        list: store.getState().book.list,
        inputVal: store.getState().book.inputVal,
        pageNum: store.getState().book.pageNum,
        pageSize: store.getState().book.pageSize,
        pagination: {
          total: store.getState().book.total, // 总条数
          pageSize: store.getState().book.pageSize,
          onChange: this.onPageChange.bind(this)
        }
      }))
    })
  }

  render() {
    return (
      <BookUI
        inputVal={this.state.inputVal}
        inputValChange={(e) => {
          let value = e.target.value;
          store.dispatch(inputChagne(value))
        }}
        searchBtnClick={() => { store.dispatch(searchBookAction()) }}
        list={this.state.list}
        columns={columns}
        pagination={this.state.pagination}
      />
    )
  }

  componentDidMount() {
    store.dispatch(getBookListAction());
  }

  onPageChange(page, pageSize) {
    store.dispatch(pageClickAction(page))
  }
}

export default Book;
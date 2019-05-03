import React, { Component } from 'react';
import { Input, Table, Button } from 'antd';
import { BookWrap, TopWrap, MainWrap } from './style';
import http from '@/utils/http.js'


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
      list: [],
      inputVal: '',
      pageNum: 1,
      pageSize: 1,
      pagination:{
        total: 1 ,
        defaultPageSize: 1,
        onChange:this.onPageChange.bind(this)
      }
    }

    this.getBookList = this.getBookList.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  render() {
    return (
      <BookWrap>
        <TopWrap>
          <div className="left">
            <Input
            placeholder="请输入图书名..."
            value= {this.state.inputVal}
            onChange= {this.onInputChange}
            />
            <Button type="primary" onClick={this.getBookList} >搜索</Button>
          </div>
          <div className="right"></div>
        </TopWrap>
        <MainWrap>
          <Table
            dataSource={this.state.list}
            columns={columns}
            rowKey="bookId"
            pagination={this.state.pagination}
          />
        </MainWrap>
      </BookWrap>
    )
  }

  componentDidMount() {
    this.getBookList();
  }

  onInputChange(e) {
    let value = e.target.value;
    this.setState(() => ({
      inputVal: value
    }))
  }

  async onPageChange(page, pageSize) {
  await this.setState(() => ({
      pageNum: page,
      pageSize: pageSize
    }))
    this.getBookList();
  }

  getBookList() {
    let { inputVal, pageNum, pageSize } = this.state;
    http.get('/api/book',{
      params: {
        bookName: inputVal,
        pageNum,
        pageSize
      }
    }).then(res => {
        if (res.code === 0) {
          this.setState((prevState) => ({
            list: res.data.list,
            pagination:
             {
              ...prevState.pagination,
              total: res.data.total
            }
          }))
        } else {
          alert("res.msg")
        }
        // console.log(res)
      })
  }
}
export default Book;
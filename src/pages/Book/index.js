import React, { Component } from 'react';
import { Input, Table } from 'antd';
import { BookWrap, TopWrap, MainWrap } from './style';


const dataSource = [{
  key: '1',
  name: '李钟硕',
  age: 29,
  address: '西湖区湖底公园1号',
  value: 0,
}, {
  key: '2',
  name: '李易峰',
  age: 26,
  address: '西湖区湖底公园1号',
  value: 1,
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  filters: [{
    text:'最帅的',
     value: 1
  }],
  onFilter: (value, record) => { return record.value === value},
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
  sorter: (a, b) => (a.age - b.age),
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];

class Book extends Component {
  render() {
    return (
      <BookWrap>
        <TopWrap>
          <div className="left">
            <Input placeholder="请输入..." />
          </div>
          <div className="right"></div>
        </TopWrap>
        <MainWrap>
          <Table dataSource={dataSource} columns={columns} />
        </MainWrap>
      </BookWrap>
    )
  }
}
export default Book;
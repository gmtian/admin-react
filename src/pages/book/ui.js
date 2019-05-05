// 这个就是 book 组件的 ui组件
import React from 'react';

import { BookWrap, TopWrap, MainWrap } from './style';
import { Input, Table, Button } from 'antd';

class BookUI extends React.Component {
  render() {
    const {
      inputVal,
      inputValChange,
      searchBtnClick,
      list,
      columns,
      pagination
    } = this.props;
    return (
      <BookWrap>
        <TopWrap>
          <div className="left">
            <Input
              placeholder="请输入..."
              value={ inputVal }
              onChange={ inputValChange }
              />
            <Button type="primary" onClick={ searchBtnClick }>搜索</Button>
          </div>
        </TopWrap>

        <MainWrap>
          <Table
            dataSource={ list }
            columns={ columns }
            rowKey="bookId"
            pagination={ pagination }
            >
          </Table>
        </MainWrap>
      </BookWrap>
    )
  }

  componentDidMount() {
    this.props.getBookList();
  }
}

export default BookUI;

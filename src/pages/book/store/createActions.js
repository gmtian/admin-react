// book 创建动作的文件
import http from '@/utils/http';
import { INPUTVALCHANGE, SETBOOKDATA, SETPAGENUM } from './actionTypes';

/**
 * 创建 inputval 修改的动作
 * @param {String} value 输入的内容
 */
export const inputChagne = (value) => {
  return {
    type: INPUTVALCHANGE,
    value
  }
}

/**
 * 创建 获取图书 的动作
 */
export const getBookListAction = () => {
  return (dispatch, getState) => {
    let { inputVal, pageNum, pageSize } = getState().book;
    http.get('/api/book', {
      params: {
        bookName: inputVal,
        pageNum,
        pageSize,
      }
    }).then(res => {
      if (res.code === 0) {
        dispatch({
          type: SETBOOKDATA,
          data: res.data
        })
      }
    })
  }
}

/**
 * 创建 搜索的动作
 */
export const searchBookAction = () => {
  return (dispatch) => {
    // 1. 先将 pageNum 设置为1
    dispatch({
      type: SETPAGENUM,
      value: 1
    })

    // 2. 发送ajax请求
    dispatch(getBookListAction());
  }
}

/**
 * 创建 分页点击的动作
 * @param {Number} page 当前点击的页码
 */
export const pageClickAction = (page) => {
  return (dispatch) => {
    // 1. 将 pageNum 设置为点击的页码
    dispatch({
      type: SETPAGENUM,
      value: page
    })

    // 2. 发ajax请求
    dispatch(getBookListAction());
  }
}

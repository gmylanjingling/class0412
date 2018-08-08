import React, {Component} from 'react';

import {increment, decrement} from '../../redux/actions';

class App extends Component {
  /*state = {
    count: 0
  }*/
  
  increment = () => {
    //获取下拉列表的值
    const {value} = this.select;
    //获取当前状态值
    // const {count} = this.state;
    //更新状态
    // this.setState({
    //   count: +value + count
    // })
    //调用actions函数得出action对象
    const action = increment(+value);
    //调用dispatch函数
    this.props.store.dispatch(action);
  }
  
  decrement = () => {
    //获取下拉列表的值
    const {value} = this.select;
    //获取当前状态值
    // const {count} = this.state;
    //更新状态
    /*this.setState({
      count: count - value
    })*/
    //调用actions函数得出action对象
    const action = decrement(+value);
    //调用dispatch函数
    this.props.store.dispatch(action);
  }
  
  incrementIfOdd = () => {
    //获取当前状态值
    // const {count} = this.state;
    const count = this.props.store.getState();
    //判断当前状态是否是奇数
    if (count % 2) {
      //获取下拉列表的值
      const {value} = this.select;
      //更新状态
      // this.setState({
      //   count: count + +value
      // })
      //调用actions函数得出action对象
      const action = increment(+value);
      //调用dispatch函数
      this.props.store.dispatch(action);
    }
  }
  
  incrementAsync = () => {
    setTimeout(() => {
      //获取下拉列表的值
      const {value} = this.select;
      //获取当前状态值
      // const {count} = this.state;
      //更新状态
      /*this.setState({
        count: +value + count
      })*/
      //调用actions函数得出action对象
      const action = increment(+value);
      //调用dispatch函数
      this.props.store.dispatch(action);
    }, 1000)
  }
  
  render () {
    // const {count} = this.state;
    const count = this.props.store.getState();
  
    return (
      <div>
        <h2>click {count} times</h2>
        <select ref={input => this.select = input}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;
        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.decrement}>-</button> &nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button> &nbsp;
        <button onClick={this.incrementAsync}>increment async</button> &nbsp;
      </div>
    )
  }
}

export default App;
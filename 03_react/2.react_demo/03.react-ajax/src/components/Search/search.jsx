import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  static propTypes = {
    fetchData: PropTypes.func.isRequired
  }
  
  search = () => {
    //获取输入框的值
    const value = this.msgInput.value.trim();
    if (value) {
      //调用方式更新状态
      this.props.fetchData(value);
    }
  }
  
  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={input => this.msgInput = input}/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}




export default Search;
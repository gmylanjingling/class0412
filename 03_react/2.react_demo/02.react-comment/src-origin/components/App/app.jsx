//引入依赖
import React, {Component} from 'react';
//引入组件
import AddComment from '../AddComment/addComment';
import CommentList from '../CommentList/commentList';

//定义组件
class App extends Component {
  constructor (props) {
    super(props);
    //初始化评论数据
    this.state = {
      commentsList: [
        {username: '周雨', comment: '太阳当头照'},
        {username: '史静静', comment: '花儿对我笑'}
      ]
    }
    //修正this指向
    this.updateComments = this.updateComments.bind(this);
    this.delComment = this.delComment.bind(this);
  }
  //修改/更新数据的方法
  updateComments (comment) {
    //获取当前的数据
    const {commentsList} = this.state;
    //更新数据
    commentsList.unshift(comment);
    this.setState({commentsList});
  }
  
  delComment (index) {
    //获取当前的数据
    const {commentsList} = this.state;
    console.log(index);
    //删除数据
    commentsList.splice(index, 1);
    //更新数据
    this.setState({commentsList});
  }
  
  render () {
    //获取数据
    const {commentsList} = this.state;
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <AddComment updateComments={this.updateComments} />
          <CommentList commentsList={commentsList} delComment={this.delComment}/>
        </div>
      </div>
    )
  }
}

//默认暴露
export default App;
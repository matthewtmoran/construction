import Posts from "./Posts";
import {connect} from 'react-redux'


const mapStateToProps = state => {
  return {
    posts: state.posts.byId,
  }
};



const PostContainer = connect(
  mapStateToProps,
)(Posts);

export default PostContainer

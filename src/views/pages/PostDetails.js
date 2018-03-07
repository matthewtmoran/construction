import React from 'react';
import styled from "styled-components";
import {connect} from 'react-redux'

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: column;
`;
const ImageRow = styled.div`
    //flex: 1;
  
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
`;
const ImageContainer = styled.div`
    flex-basis: calc(33.333% - 4rem);
    flex-grow: 1;
    flex-shrink: 0;
    margin: 0 .5rem .5rem .5rem;
    padding: 1rem;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
`;

const Hr = styled.hr`
    border: 0;
    clear:both;
    display:block;
    width: 96%;               
    background-color:#333;
    height: 1px
`;

const Comment = ({ comment }) => {
  const nestedComments = (comment.comments || []).map(comment => {
    return <Comment key={comment.id} comment={comment} />;
  });

  return (
    <div key={comment.id}>
      <h3>comment: {comment.id}</h3>
      <span>{comment.text}</span>
      {/*<a href={comment.author.url}>{comment.author.name}</a>*/}
      {nestedComments}
    </div>
  );
};

const details = ({posts, comments, ...props}) => {
  const { id } = props.match.params;
  const post = posts[id];
  return (
    <Container>

      <ImageRow>
        {post.images.map((url, i)=> <ImageContainer key={i}><Image src={url} alt=""/></ImageContainer>)}
      </ImageRow>

      <div>
        <h1>
          {post.title}
        </h1>
        <p>
          {post.description}
        </p>
      </div>

      <Hr/>

      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>


      {post.comments.map((id, i) => {
        return <Comment key={id} comment={comments[id]} />
      })}


    </Container>
  )
};


const mapStateToProps = state => {
  return {
    posts: state.posts.byId,
    comments: state.comments.byId
  }
};


const PostDetails = connect(
  mapStateToProps,
)(details);



export default PostDetails;
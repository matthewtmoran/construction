import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const GridItem = styled.div`
  flex-basis: calc(33.333% - 4rem);
  flex-grow: 1;
  flex-shrink: 0;
  margin: 2rem;
  padding: 2rem;
  border: 1px solid lightgray;
  background: white;
  box-shadow: 0 0 0 5px rgba(0,0,0,0.03);;
  position: relative;
`;

const GridImageWrap = styled.div`
  width: calc(100% + 4rem);
  margin-left: -2rem;
  margin-top: -2rem;
  max-width: none;
`;
const GridImage = styled.img`
    width: 100%;
    margin: 0;
`;



const Control = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Post = ({post}) => {

  return (
    <GridItem>

      <GridImageWrap>
        <Link  to={`/posts/${post.id}`}>
          <GridImage src={post.images[0]} alt=""/>
        </Link>
      </GridImageWrap>

      <div>
        <span>{post.title} - {post.neighborhood}</span>
      </div>
      <h1>{post.title}</h1>
      <Control>
        <button>Comments</button>
        <button>votes</button>
      </Control>
    </GridItem>
  )
};

export default Post;
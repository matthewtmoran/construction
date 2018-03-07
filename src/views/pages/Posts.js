import React from 'react';
import styled from "styled-components";
import Post from '../components/Post';
import FabButton from '../components/FabButton';


const GridList = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const Posts = ({posts}) => {
  return (
    <div>
      <GridList>
        {Object.keys(posts).map(key => <Post post={posts[key]} key={key}/>)}
      </GridList>

      <FabButton/>
    </div>
  )
};


export default Posts;
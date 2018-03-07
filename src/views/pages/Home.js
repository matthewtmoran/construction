import React from 'react';
import { Link } from 'react-router-dom';


import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
`;

const ButtonLink = styled(Link)`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    color: ${props => props.theme.colors.primary};
    border: 2px solid ${props => props.theme.colors.primary};
    background: white;
    &:hover{
        cursor: pointer;
    }
`;



const Home = () => {
  return (
    <Container>
      <h1>Welcome to Construction Watcher? Constructioner? Conster? Buildeerrrrr?</h1>
      <h2>...we need a better name...</h2>
      <ul>

        <li>Hero - w/ search</li>
        <li>explore - with topics</li>

      </ul>

      <ButtonLink to={'/posts'}>View Construction Projects</ButtonLink>
    </Container>
  )
};

export default Home;
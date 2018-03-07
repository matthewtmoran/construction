import React from 'react';
import styled from "styled-components";


const Container = styled.div`
    bottom: 0;
    padding: 23px 12px 23px 15px;
    pointer-events: none;
    position: fixed;
    right: 0;
    white-space: nowrap;
    z-index: 21;
`;


const FabButton = () => {

  return (
    <Container>
      <button>Create New</button>
    </Container>
  )
};

export default FabButton;
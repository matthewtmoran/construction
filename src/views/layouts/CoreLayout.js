import React from 'react';
import { Route } from "react-router-dom";
// import PropTypes from "prop-types";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import SideDrawer from "../components/SideDrawer";

import styled from 'styled-components';

const Container = styled.div`
  height: 100%;  
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CoreLayout = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Container >
        {/*<div className={classes.CoreLayout}>*/}
          <Navbar/>
          <Component {...props}/>
          <Footer/>
        </Container>
      )}
    />
  )
};

// CoreLayout.propTypes = {
//   component: PropTypes.func.isRequired
// };

export default CoreLayout;
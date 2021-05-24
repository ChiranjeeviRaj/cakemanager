import React, { Component } from 'react';
import '../App.css';
import AppNavbar from './AppNavbar';
import CakeList from  './CakeList'
import { Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
            <CakeList />
        </Container>
      </div>
    );
  }
}

export default Home;
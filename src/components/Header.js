import { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="light">
          <Container></Container>
        </Navbar>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <h1>City Explorer</h1>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { ImFilm } from 'react-icons/im';
import { IoPeopleCircle } from 'react-icons/io5';
import { IconName } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import logo from './logo.svg';
import './App.css';
//import MyButton from './Button.js';

function MyNavBar() {
  return (

    <Navbar bg="primary" variant="dark">
      <div class="container-fluid">
        <Navbar.Brand href="#home"><ImFilm /> Film Library</Navbar.Brand>
      </div>
      <div class="container-fluid">
        <Form className="d-flex" align="centre">
          <div>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </div>
        </Form>
      </div>
      <Navbar bg="primary" variant="dark">
        <div class="container-fluid">
          <Navbar.Brand href="#home"><FaUserCircle /></Navbar.Brand>
        </div>
      </Navbar>
    </Navbar>);
}

export default MyNavBar;
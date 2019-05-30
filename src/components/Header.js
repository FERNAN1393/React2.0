import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import dashboardRoutes from "../routes/dashboard.js";

class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false
    };
  }
  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function() {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  }
  getBrand() {
    var name;
    dashboardRoutes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        } else {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  }
  render() {
    const Signed ={
      marginLeft: '15px'
    }
    return (
      <div>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Titulo Pagina</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  href="#link">Bienvenido:<a style={Signed} href="#login">Mark Otto</a></Nav.Link>
    </Nav>
    <Nav.Link href="#deets">Ver Agenda</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Cerrar Sesion
      </Nav.Link>
  </Navbar.Collapse>
</Navbar>
      </div>
    );
  }
}

export default Header;

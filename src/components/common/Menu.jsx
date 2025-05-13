import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import '../../style/menu.css'
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'

const Menu = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-black">
        <Container fluid>
          <Navbar.Brand href="#home">
            <NavLink to={'/'} className="text-white  text-decoration-none">
              <img src={logo} alt="Logo Tiberio" width={70} />
             
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-3">
              <NavLink to={'/'} className="fw-bold text-white linksMenu">Inicio</NavLink>
              <NavLink to={'/candidatos'} className="text-white linksMenu fw-bold">Adheridos
              </NavLink>
              <NavLink to={'/administrador'} className="fw-bold text-white linksMenu">Administrador</NavLink>
              <NavLink to={'/login'} className="fw-bold text-white linksMenu"><i id="tamanioIconLogin" class="bi bi-person fw-bold text-white "></i>Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;

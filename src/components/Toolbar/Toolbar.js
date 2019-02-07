import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterLink} from "react-router-dom";

const Toolbar = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Quotes Central</NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={RouterLink} exact to='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterLink} to='/about'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterLink} to='/history'>History</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterLink} to='/site-map'>Site Map</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterLink} to='/general'>General</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterLink} to='/contacts'>Contacts</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterLink} to='/new-pages/admin'>Edit Page</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Toolbar;
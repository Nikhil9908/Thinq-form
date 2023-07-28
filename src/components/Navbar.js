import React, { useState } from 'react';
import { NavLink as ReactLink } from 'react-router-dom';
import logo from '../logo1.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';

export default function CustomNavbar(args){
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <Navbar 
        color='dark'
        dark
        expand='md'
        fixed='' {...args}
         >
          <NavbarBrand href="/"> <img src = {logo} alt='logo' style= {{ height: "50px", width: "50px" }} /> Thinq Form</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink  tag={ReactLink} to= "/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to= "https://github.com/Nikhil9908">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to= "/login">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to= "/signup">
                  SignUp
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={ReactLink} to = "/services">Services</DropdownItem>
                  <DropdownItem tag={ReactLink} to = "/career">Career</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Just make what you Thinq</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
}
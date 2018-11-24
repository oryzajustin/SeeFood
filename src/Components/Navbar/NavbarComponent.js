import React from 'react';
import "./Navbar.css";

import { 
  Navbar, 
  NavbarMenu, 
  NavbarEnd, 
  NavbarItem, 
  Field,
  Control,
  Button,
  Icon,
  withHelpersModifiers   
  } from 'bloomer';
import { NavLink } from "react-router-dom";

const NavbarComponent = (props) => (
  <Navbar id="navbar">
    <NavbarMenu>
      <NavbarEnd id="navbarend">
        <NavbarItem>
          <Field isGrouped>
            <Control>
              <Button isColor="dark" >
                <NavLink to="/">
                  Home
                </NavLink>
              </Button>
            </Control>
            <Control>
              <Button isColor="dark" >
                <NavLink to="/Menu">
                  Menu
                </NavLink>
              </Button>
            </Control>
            <Control>
              <Button isColor="dark" >
                <NavLink to="/AboutUs">
                 About Us
                </NavLink>
              </Button>
            </Control>
          </Field>
        </NavbarItem>
      </NavbarEnd>
    </NavbarMenu>
  </Navbar>
);

export default withHelpersModifiers(NavbarComponent);

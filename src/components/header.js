/**
 * Created by samhuber on 7/31/17.
 */
import React, {Component} from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import {isTokenDefined} from '../utils/util';

class Header extends Component {
  logout(){
    localStorage.removeItem('CompeteWithMeToken');
    window.location.replace("http://localhost:9000/login");
  }
  login(){
    window.location.replace("http://localhost:9000/login");
  }
  render(){
    let divStyle = {
      marginRight: '50px',
      paddingRight: '50px'
    };
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Compete With Me</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/">
              <NavItem className="">Home</NavItem>
            </LinkContainer>
            {
              (isTokenDefined()) ?
                <LinkContainer to="/drills">
                  <NavItem>Drills</NavItem>
                </LinkContainer> : ''
            }
            {/*<NavDropdown title="Practice Data" id="basic-nav-dropdown">*/}
              {/**/}
              {/*<LinkContainer to="/load/addupdate">*/}
                {/*<MenuItem>Add Load</MenuItem>*/}
              {/*</LinkContainer>*/}
            {/*</NavDropdown>className="btn btn-info log"*/}

          </Nav>

          <Nav pullRight style={divStyle}>
            <LinkContainer to="/login">
              {
                (isTokenDefined()) ?
                  (<NavItem onClick={this.logout.bind(this)}>Log Out</NavItem>)
                  : ( <NavItem onClick={this.login.bind(this)}>Log In</NavItem> )
              }
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

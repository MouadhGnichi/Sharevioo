import React from 'react'
import { Navbar, Nav, Container, Button, NavDropdown, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../assets/img/logo.png'
import './Header.css'

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' expand='lg'>
        <Container>
          <LinkContainer to='/' style={{ color: 'white' }}>
            <img className='logo' src={logo} alt='Sharevioo' style={{ width: '10px', height: '10px' }}>
            </img>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <LinkContainer to='/dashboard' style={{ color: 'white' }}>
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <Nav>
              <NavDropdown
                title={
                  <span className="text-light my-auto">My Space</span>
                }
                id='my-space'>
                <LinkContainer to='/my-questions'>
                  <NavDropdown.Item>My Questions</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/my-posts'>
                  <NavDropdown.Item>My Posts</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <LinkContainer to='/top-three' style={{ color: 'white' }}>
              <Nav.Link>Top Three</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact-us' style={{ color: 'white' }}>
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <Nav>
              <NavDropdown
                title={
                  <span className="text-light my-auto">Shared Space</span>
                }
                id='shared-space'>
                <LinkContainer to='/my-questions'>
                  <NavDropdown.Item>My Questions</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/my-posts'>
                  <NavDropdown.Item>My Posts</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav className='ms-auto'>

              {/* <LinkContainer to='/search' style={{ color: 'white' }}>
                <Nav.Link className='justify-content-end'>
                  <col>
                    <div class="input-group">
                      <div class="form-outline">
                        <input type="search" id="form1" class="form-control" />
                        <label class="form-label" for="form1">Search</label>
                      </div>
                      <button type="button" class="btn btn-primary">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </col>
                </Nav.Link>
              </LinkContainer> */}
              <div className='search-box'>
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><i class="fa fa-search"></i></button>
              </div>
              <LinkContainer to='/login' style={{ color: 'white' }}>
                <Nav.Link className='justify-content-end'>
                  <Col>
                    <i className='fas fa-user'></i> Login
                  </Col>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

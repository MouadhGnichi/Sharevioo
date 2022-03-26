import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' expand='lg'>
        <Container>
          <LinkContainer to='/' style={{ color: 'white' }}>
            <Navbar.Brand>Sharevioo</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <LinkContainer to='/top-three' style={{ color: 'white' }}>
              <Nav.Link>Top Three</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact-us' style={{ color: 'white' }}>
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/shared-space' style={{ color: 'white' }}>
              <Nav.Link>Shared Space</Nav.Link>
            </LinkContainer>
            <Nav className='ms-auto'>
              <LinkContainer to='/login' style={{ color: 'white' }}>
                <Nav.Link className='justify-content-end'>
                  <i className='fas fa-user'></i> Login
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

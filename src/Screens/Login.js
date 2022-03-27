import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import history from '../history.js'

const Login = () => {

  const submitHanbdler = (e) => {
    // e.preventDefault()
    // history.push('/')
  }

  return (
    <div>
      <Container>
        <Form onSubmit={submitHanbdler}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='jhon.doe@gmail.com' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <LinkContainer to={'/'}>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </LinkContainer>
        </Form>
      </Container>
    </div>
  )
}

export default Login

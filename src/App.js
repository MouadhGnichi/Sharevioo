import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './Screens/HomeScreen'
import TopThree from './Screens/TopThree'
import ContactUs from './Screens/ContactUs'
import SharedSpace from './Screens/SharedSpace'
import Login from './Screens/Login'

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main className='py-3'>
          <Container fluid>
            <Routes>
              <Route path='/' element={<HomeScreen />} exact />
              <Route path='/top-three' element={<TopThree />} />
              <Route path='/contact-us' element={<ContactUs />} />
              <Route path='/shared-space' element={<SharedSpace />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  )
}

export default App

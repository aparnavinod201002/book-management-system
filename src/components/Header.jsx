import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>
        <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#home" className='text-danger'> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/1200px-Open_book_nae_02.svg.png"  style={{width:"4%"}} alt="" />Book Management System</Navbar.Brand>
       
        <Navbar.Collapse id="basic-navbar-nav">
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header

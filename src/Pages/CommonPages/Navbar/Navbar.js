import React, { useContext } from 'react';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
// import logo from '../../../assets/hero-cars-logo.webp'

const MenuBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err))
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          {/* <img style={{width: 70}} src={logo} alt="" /> */}
          <span className='fw-bold'>HERO</span>
          <span className='text-warning fw-bold'>CARS</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link className='text-decoration-none text-white fw-semibold mx-3' to='/cars'>Cars</Link>
            <Link className='text-decoration-none text-white fw-semibold mx-3' to='/blog'>Blog</Link>
          </Nav>
          <Nav>
            {
              user?.uid ?
                <Link className='text-decoration-none text-white fw-semibold mx-3'><button className='btn btn-warning' onClick={handleLogout}>Logout</button></Link>
                :
                <>

                  <NavDropdown title="Login" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link to='/login' className='text-decoration-none fw-semibold mx-3'>
                        Seller Account
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to='/buyer' className='text-decoration-none fw-semibold mx-3'>
                        Buyer Account
                      </Link>
                    </NavDropdown.Item>

                  </NavDropdown>


                </>
            }
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default MenuBar;
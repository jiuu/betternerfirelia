import React from 'react'
import {
    BrowserRouter as Router,

  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form, } from 'react-bootstrap'



function MyNav(props){

    return(

                <div>
                    <Router>
                        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand href="/">BetterNerfIrelia</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                <Nav.Link href="/contact">Contact</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/search">Search Summoner</Nav.Link>
                                <NavDropdown title="Login" >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                </Nav>
                                <Form inline>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>
                        <br />
                    </Router>
                </div>

    )  

}

export default MyNav;
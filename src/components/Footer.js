import React from "react"
import Navbar from 'react-bootstrap/Navbar'
function Footer() {
    return(
        <Navbar sticky="bottom" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Clicky Game'}
        </Navbar.Brand>
      </Navbar>
    )
}
export default Footer;
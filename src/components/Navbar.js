import { Link } from 'react-router-dom';
import React, { useState } from "react";
// import { Fade } from 'react-reveal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../images/Social media kit/Social-Media-Kit2_FB cover page.jpg'




const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navbarLinks = [
    {
      id: 1,
      title: "Home",
      link: "/"

    },
    {
      id: 2,
      title: "About Us",
      link: "/about"
    },
    {
      id: 3,
      title: "Our Clothes",
      link: "/inventory"

    },
    {
      id: 4,
      title: "Cart",
      link: "/order"
    },
    
  ]
    return (
      <div>
        {/* <Fade duration={2000}> */}



        <nav className="navbar navbar-expand py-3 shadow-lg fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h3 className="text-primary rounded-4 mx-5 px-4 font-28 company-name-full hide-l-1400">
              {/* <strong>Peyton & Friends</strong> */}
              <img src={logo} className="navbar-logo"></img>
            </h3>
            <h3 className="text-primary rounded-4 mx-5 px-4 font-36 company-name-abreviated hover-grow hide-l-1000 hide-g-1400"><strong>PDM</strong></h3>

            </Link>
            <div className="hide-l-1200">
              {/* <Social /> */}

            </div>
            <div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 hide-l-1000">
              {navbarLinks.map(link => {
                return (
                <li className="nav-item text-align-center nav-bar-item" key={link.id}>
                  <Link className="nav-link active fs-5 mx-3 px-4 rounded-4 hover-button align-text-bottom text-light hover-grow"
                    aria-current="page" 
                    to={link.link}>
                    {link.title}
                    </Link>
                  
                </li>
                  )

              })}

              
              
             
              <li className="nav-item dropdown">  
                {/* <Link className="nav-link mx-5 px-4 rounded-5 btn btn-primary hover-grow text-dark hire-button" to="/contact" role="button" aria-expanded="false">
                  Contact Me
                </Link> */}
              
              </li>
            </ul>

            </div>
          </div>
        </div>

      <div className="menu-button-container">
        <button className="menu-button hide-g-1000" onClick={handleShow}>
          {/* <img src={menu} className="menu-button-img m-4" alt="menu button"/> */}
        </button>

      </div>
      <div>
      <Offcanvas show={show} onHide={handleClose} className="offCanvas">
        <Offcanvas.Header >
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="container-fluid">        
        
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex bd-highlight mb-2 mb-lg-0">

              {navbarLinks.map((item) => {
                return <li key={item.id} className="nav-item text-align-center font-18 bd-highlight text-light">
                  <Link className="nav-link px-4 hover-button align-text-bottom font-24 "
                    to={item.link}
                    onClick={handleClose}>
                      {item.title}
                  </Link>
                </li>
              })}

            
              <li className="py-4">

              {/* <Social /> */}
              </li>

              <li className="nav-item py-4">  
                {/* <Link className="nav-link rounded-5 btn btn-primary hover-grow text-dark hire-button" to="/contact" role="button" aria-expanded="false">
                  Contact Me
                </Link> */}
              
              </li>
              
            

             
            </ul>

          </div>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
      </nav>

      {/* </Fade> */}


      </div>

    )
  }

  export default Navbar;
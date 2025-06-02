import React from 'react'
import { Link,Route,Routes,BrowserRouter } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Blog from './Blog'
import Services from './Services'
import Shop from './Shop'

export default function Nav() {
  return (
    <>
 <BrowserRouter>
  <nav
    className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
    arial-label="Furni navigation bar"
  >
    <div className="container">
     <Link to='/home' className="navbar-brand">Furni</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsFurni"
        aria-controls="navbarsFurni"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li className="nav-item active">
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li>
          <Link to="/shop" className="nav-link">Shop</Link>
          </li>
          <li>
          <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li>
          <Link to="/service" className="nav-link">Services</Link>
          </li>
          <li>
          <Link to="/blog" className="nav-link">Blog</Link>
          </li>
          <li>
          <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          <li>
            <a className="nav-link" href="#">
              <img src="images/user.svg" />
            </a>
          </li>
          <li>
            <a className="nav-link" href="cart.html">
              <img src="images/cart.svg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* End Header/Navigation */}
  <Routes>
    <Route path='/home' element = {<Home />}></Route>
    <Route path='/shop' element = {<Shop />}></Route>
    <Route path='/about' element = {<About />}></Route>
    <Route path='/service' element = {<Services />}></Route>
    <Route path='/blog' element = {<Blog />}></Route>
    <Route path='/Contact' element = {<Contact />}></Route>
  </Routes>
  </BrowserRouter>
</>

 
  )
}

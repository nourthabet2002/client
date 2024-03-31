import React from 'react';

const Header = () => {
  return (
    <div>
    {/* ======= Top Bar ======= */}
<div id="topbar" className="d-flex align-items-center fixed-top">
  <div className="container d-flex justify-content-between">
    <div className="contact-info d-flex align-items-center">
      <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">contact@example.com</a>
      <i className="bi bi-phone" /> +1 5589 55488 55
    </div>
    <div className="d-none d-lg-flex social-links align-items-center">
   
    </div>
  </div>
</div>
{/* ======= Header ======= */}
<header id="header" className="fixed-top">
  <div className="container d-flex align-items-center">
    <h1 className="logo me-auto"><a href="index.html">Protrio</a></h1>
    {/* Uncomment below if you prefer to use an image logo */}
    {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Acceuil</a></li>
        <li><a className="nav-link scrollto" href="#about">Qui nous sommes</a></li>
        {/* <li><a className="nav-link scrollto" href="#services">Services</a></li> */}
        <li><a className="nav-link scrollto" href="#departments">Réservation</a></li>
        <li><a className="nav-link scrollto" href="#doctors">votre avis</a></li>
        <li className="dropdown"><a href="#services"><span>Services</span> <i className="bi bi-chevron-down" /></a>
          <ul>
            <li><a href="#">Drop Down 1</a></li>
            
            <li><a href="#">Drop Down 2</a></li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
          </ul>
        </li>
        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>{/* .navbar */}
    <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Connecter</span></a>
  </div>
</header>{/* End Header */}
{/* ======= Hero Section ======= */}
<section id="hero" className="d-flex align-items-center">
  <div className="container">
    <h1>Welcome to Medilab</h1>
    <h2>We are team of talented designers making websites with Bootstrap</h2>
    <a href="#about" className="btn-get-started scrollto">Get Started</a>
  </div>
</section>{/* End Hero */}

    </div>
  );
};

export default Header;
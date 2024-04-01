import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Header = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:7000/service');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const handleConnecterClick = () => {
    navigate('/Login'); // Navigate to the login route when "Connecter" is clicked
  };

  return (
    <div>
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">contact@example.com</a>
            <i className="bi bi-phone" /> +1 5589 55488 55
          </div>
        </div>
      </div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto"><a href="index.html">Protrio</a></h1>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Acceuil</a></li>
              <li><a className="nav-link scrollto" href="#about">Qui nous sommes</a></li>
              <li><a className="nav-link scrollto" href="#departments">Réservation</a></li>
              <li><a className="nav-link scrollto" href="#doctors">votre avis</a></li>
              <li className="dropdown">
                <a href="#services"><span>Services</span> <i className="bi bi-chevron-down" /></a>
                <ul>
                  {services.map(service => (
                    <li key={service._id}><a href="#">{service.name}</a></li>
                  ))}
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* Use handleConnecterClick function to navigate to the login route */}
          <button onClick={handleConnecterClick} className="appointment-btn scrollto">
            <span className="d-none d-md-inline">Connecter</span>
          </button>
        </div>
      </header>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>Welcome to Protrio</h1>
          <h2>We are team of talented designers making websites with Bootstrap</h2>
          <a href="#about" className="btn-get-started scrollto">Get Started</a>
        </div>
      </section>
    </div>
  );
};

export default Header;




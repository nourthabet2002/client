import React, { useState, useEffect } from "react";
import axios from "axios";
import FlipCard from './FlipCard';
import {useLocation} from 'react-router-dom';
import Headercl from "./Headercl";
import Navigercl from "./Navigercl";
// import { Navigate } from 'react-router-dom';
import { Link, useNavigate, Navigate } from "react-router-dom";




const Naviger = () => {
  const [avisData, setAvisData] = useState([]);
  const { state } = useLocation();
  const [service, setService] = useState([]);
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:7000/avis');
        setAvisData(response.data);
      } catch (error) {
        console.error('Error fetching avis:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    // Fetch data from your backend endpoint
    axios.get('http://localhost:7000/servicessss')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the services!', error);
      });
  }, []);
  const stateEmail = state && state.email; 

  // Function to fetch services from the backend
  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:7000/services');
      setService(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  // useEffect hook to fetch services when the component mounts
  useEffect(() => {
    fetchServices();
  }, []); // Empty dependency array means it will run only once on component mount

  // Function to render services dynamically
  const renderServices = () => {
    return service.map((service, index) => (
      <div key={index} className="icon-box">
        <div className="icon"><i className="bx bx-fingerprint"></i></div>
        <h4 className="title"><a href="#">{service.name}</a></h4>
        <p className="description">
          {service.categories.map((category, index) => (
            <span key={index}>{category.name}</span>
          ))}
        </p>
      </div>
    ));
  };

  useEffect(() => {
    // Ensure the DOM is fully loaded before accessing elements
    const container = document.querySelector('.icon-boxes-container');
    if (container) {
      container.innerHTML = ''; // Clear previous content
      renderServices().forEach(element => container.appendChild(element));
    }
  }, [service]);

  return (
    <div>
 <main id="main">
  {/* ======= Why Us Section ======= */}
  <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>Bienvenue  à Protrio</h1>
          {/* <h1>Welcome to Protrio{email && `, ${email}`}{stateEmail && `, ${stateEmail}`}</h1> Display both props and state email */}

          {/* <h2>We are team of talented designers making websites with Bootstrap</h2>
          <a href="#about" className="btn-get-started scrollto">Get Started</a> */}
        </div>
      </section>
  <section id="why-us" className="why-us">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 d-flex align-items-stretch">
          <div className="content">
            <h3> Pourquoi choisir Protrio?</h3>
            <p>
            Notre société offre une solution de réservation en ligne facile et pratique pour les services de décoration, plomberie et électricité, permettant aux clients de planifier rapidement et efficacement leurs projets domestiques avec des professionnels qualifiés
            </p>
            <div className="text-center">
              <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-8 d-flex align-items-stretch">
          <div className="icon-boxes d-flex flex-column justify-content-center">
            <div className="row">
              {/* <div className="col-xl-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0">
                  <i className="bx bx-receipt" />
                  <h4>Corporis voluptates sit</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
              </div> */}
              <div className="col-xl-4 d-flex align-items-stretch">
                {/* <div className="icon-box mt-4 mt-xl-0">
                  <i className="bx bx-cube-alt" />
                  <h4>Ullamco laboris ladore pan</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div> */}
              </div>
              <div className="col-xl-4 d-flex align-items-stretch">
                {/* <div className="icon-box mt-4 mt-xl-0">
                  <i className="bx bx-images" />
                  <h4>Labore consequatur</h4>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div> */}
              </div>
            </div>
          </div>{/* End .content*/}
        </div>
      </div>
    </div>
  </section>{/* End Why Us Section */}
  {/* ======= About Section ======= */}
  <section id="about" className="about">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
          <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXyVq9389rMe3BThExK5j_jAQyWIrCz19HQ&s" className="glightbox  mb-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXyVq9389rMe3BThExK5j_jAQyWIrCz19HQ&s" alt="Description of the image" />
</a>
        </div>
        {/* <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
          <h3>Protrio</h3>
          <p>Découvrez Protrio, votre partenaire de confiance pour des réservations en ligne simples et rapides dans les domaines de la décoration, de la plomberie et de l'électricité. Simplifiez vos projets et laissez-nous transformer votre vision en réalité !"</p>
          <div className="icon-box">
            <div className="icon"><i className="bx bx-fingerprint" /></div>
            <h4 className="title"><a href>Lorem Ipsum</a></h4>
            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="bx bx-gift" /></div>
            <h4 className="title"><a href>Nemo Enim</a></h4>
            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="bx bx-atom" /></div>
            <h4 className="title"><a href>Dine Pad</a></h4>
            <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
          </div>
        </div> */}
     <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
    <h3>Protrio</h3>
    <p>Découvrez Protrio, votre partenaire de confiance pour des réservations en ligne simples et rapides dans les domaines de la décoration, de la plomberie et de l'électricité. Simplifiez vos projets et laissez-nous transformer votre vision en réalité !</p>
    <div className="icon-boxes-container">
      {renderServices()} {/* Call the renderServices function */}
    </div>
  </div>
      </div>
    </div>
  </section>{/* End About Section */}
  {/* ======= Counts Section ======= */}
  <section id="counts" className="counts">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          {/* <div className="count-box">
            <i className="fas fa-user-md" />
            <span data-purecounter-start={0} data-purecounter-end={85} data-purecounter-duration={1} className="purecounter" />
            <p>Doctors</p>
          </div> */}
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
          {/* <div className="count-box">
            <i className="far fa-hospital" />
            <span data-purecounter-start={0} data-purecounter-end={18} data-purecounter-duration={1} className="purecounter" />
            <p>Departments</p>
          </div> */}
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          {/* <div className="count-box">
            <i className="fas fa-flask" />
            <span data-purecounter-start={0} data-purecounter-end={12} data-purecounter-duration={1} className="purecounter" />
            <p>Research Labs</p>
          </div> */}
        </div>
        {/* <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="fas fa-award" />
            <span data-purecounter-start={0} data-purecounter-end={150} data-purecounter-duration={1} className="purecounter" />
            <p>Awards</p>
          </div>
        </div> */}
      </div>
    </div>
  </section>{/* End Counts Section */}
  {/* ======= Services Section ======= */}
  <section id="services" className="services">
    <div className="container">
      <div className="section-title">
        <h2>Services</h2>
        
      </div>
      <div className="row">
        
        
        {/* : */}
        {/* <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon"><i className="fas fa-dna" /></div>
            <h4><a href>Nemo Enim</a></h4>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
          </div>
        </div> */}
        {/* <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon"><i className="fas fa-wheelchair" /></div>
            <h4><a href>Dele cardo</a></h4>
            <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
          </div>
        </div> */}
        {/* <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon"><i className="fas fa-notes-medical" /></div>
            <h4><a href>Divera don</a></h4>
            <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
          </div>
        </div> */}

{services.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <FlipCard
                  frontContent={<div><h4>{service.name}</h4></div>}
                  backContent={
                    <div>
                      <h4>Categories</h4>
                      <ul>
                        {service.categories.map((category, idx) => (
                          <li key={idx}>{category}</li>
                        ))}
                      </ul>
                    </div>
                  }
                />
              </div>
            ))}
      </div>
    </div>
  </section>
  {/* ======= Appointment Section ======= */}
  
     
      {/* <form action="forms/appointment.php" method="post" role="form" className="php-email-form">
        <div className="row">
          <div className="col-md-4 form-group">
            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div className="validate" />
          </div>
          <div className="col-md-4 form-group mt-3 mt-md-0">
            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
            <div className="validate" />
          </div>
          <div className="col-md-4 form-group mt-3 mt-md-0">
            <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div className="validate" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 form-group mt-3">
            <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div className="validate" />
          </div>
          <div className="col-md-4 form-group mt-3">
            <select name="department" id="department" className="form-select">
              <option value>Select Department</option>
              <option value="Department 1">Department 1</option>
              <option value="Department 2">Department 2</option>
              <option value="Department 3">Department 3</option>
            </select>
            <div className="validate" />
          </div>
          <div className="col-md-4 form-group mt-3">
            <select name="doctor" id="doctor" className="form-select">
              <option value>Select Doctor</option>
              <option value="Doctor 1">Doctor 1</option>
              <option value="Doctor 2">Doctor 2</option>
              <option value="Doctor 3">Doctor 3</option>
            </select>
            <div className="validate" />
          </div>
        </div>
        <div className="form-group mt-3">
          <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
          <div className="validate" />
        </div>
        <div className="mb-3">
          <div className="loading">Loading</div>
          <div className="error-message" />
          <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
        </div>
        <div className="text-center"><button type="submit">Make an Appointment</button></div>
      </form> */}
    
 {/* End Appointment Section */}
  {/* ======= Departments Section ======= */}
  {/* <section id="departments" className="departments">
    <div className="container">
      <div className="section-title">
        <h2>Departments</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="row gy-4">
        <div className="col-lg-3">
          <ul className="nav nav-tabs flex-column">
            <li className="nav-item">
              <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Cardiology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Neurology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Hepatology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Pediatrics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Eye Care</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-9">
          <div className="tab-content">
            <div className="tab-pane active show" id="tab-1">
              <div className="row gy-4">
                <div className="col-lg-8 details order-2 order-lg-1">
                  <h3>Cardiology</h3>
                  <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                  <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                </div>
                <div className="col-lg-4 text-center order-1 order-lg-2">
                  <img src="assets/img/departments-1.jpg" alt className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-2">
              <div className="row gy-4">
                <div className="col-lg-8 details order-2 order-lg-1">
                  <h3>Et blanditiis nemo veritatis excepturi</h3>
                  <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                  <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                </div>
                <div className="col-lg-4 text-center order-1 order-lg-2">
                  <img src="assets/img/departments-2.jpg" alt className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-3">
              <div className="row gy-4">
                <div className="col-lg-8 details order-2 order-lg-1">
                  <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                  <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                  <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                </div>
                <div className="col-lg-4 text-center order-1 order-lg-2">
                  <img src="assets/img/departments-3.jpg" alt className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-4">
              <div className="row gy-4">
                <div className="col-lg-8 details order-2 order-lg-1">
                  <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                  <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                  <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                </div>
                <div className="col-lg-4 text-center order-1 order-lg-2">
                  <img src="assets/img/departments-4.jpg" alt className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-5">
              <div className="row gy-4">
                <div className="col-lg-8 details order-2 order-lg-1">
                  <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                  <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                  <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                </div>
                <div className="col-lg-4 text-center order-1 order-lg-2">
                  <img src="assets/img/departments-5.jpg" alt className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>End Departments Section */}
  <section id="doctors" className="doctors">
  <div className="container">

    <div className="row">
      <div className="col-lg-6 mt-4">
        <div className="member d-flex align-items-start">
          {/* <div className="pic"><img src="assets/img/doctors/doctors-1.jpg" className="img-fluid" alt="" /></div> */}
          <div className="member-info">
  {avisData.map((avis) => {
    // Check if clientId exists and contains the nom property
    const clientName = avis.clientId && avis.clientId.nom ? avis.clientId.nom : null;

    return (
      <div key={avis._id}> {/* Use avis._id as the key */}
        <h4>{clientName}</h4> {/* Display the client's name */}
        <p>{avis.commentaire}</p> {/* Display the commentaire */}
        <p>{avis.date}</p>
      </div>
    );
  })}
</div>



        </div>
      </div>

      {/* Avis Component */}
     
      {/* End Avis Component */}

      {/* <div className="col-lg-6 mt-4 mt-lg-0">
        <div className="member d-flex align-items-start">
          <div className="pic"><img src="assets/img/doctors/doctors-2.jpg" className="img-fluid" alt="" /></div>
          <div className="member-info">
            <h4>Sarah Jhonson</h4>
            <span>Anesthesiologist</span>
            <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
            <div className="social">
              <a href="#"><i className="ri-twitter-fill" /></a>
              <a href="#"><i className="ri-facebook-fill" /></a>
              <a href="#"><i className="ri-instagram-fill" /></a>
              <a href="#"><i className="ri-linkedin-box-fill" /></a>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="col-lg-6 mt-4">
        <div className="member d-flex align-items-start">
          <div className="pic"><img src="assets/img/doctors/doctors-3.jpg" className="img-fluid" alt="" /></div>
          <div className="member-info">
            <h4>William Anderson</h4>
            <span>Cardiology</span>
            <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
            <div className="social">
              <a href="#"><i className="ri-twitter-fill" /></a>
              <a href="#"><i className="ri-facebook-fill" /></a>
              <a href="#"><i className="ri-instagram-fill" /></a>
              <a href="#"><i className="ri-linkedin-box-fill" /></a>
            </div>
          </div>
        </div>
      </div> */}
{/* 
      <div className="col-lg-6 mt-4">
        <div className="member d-flex align-items-start">
          <div className="pic"><img src="assets/img/doctors/doctors-4.jpg" className="img-fluid" alt="" /></div>
          <div className="member-info">
            <h4>Amanda Jepson</h4>
            <span>Neurosurgeon</span>
            <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
            <div className="social">
              <a href="#"><i className="ri-twitter-fill" /></a>
              <a href="#"><i className="ri-facebook-fill" /></a>
              <a href="#"><i className="ri-instagram-fill" /></a>
              <a href="#"><i className="ri-linkedin-box-fill" /></a>
            </div>
          </div>
        </div>
      </div> */}
    </div>

  </div> {/* End container */}
</section> {/* End section */}
{/* ======= Doctors Section ======= */}{/* End Doctors Section */}
  {/* ======= Frequently Asked Questions Section ======= */}
  <section id="faq" className="faq section-bg">
    <div className="container">
      <div className="section-title">
        <h2>Frequently Asked Questions</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="faq-list">
        <ul>
          <li data-aos="fade-up">
            <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
            <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={100}>
            <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
            <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={200}>
            <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
            <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
              <p>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={300}>
            <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
            <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay={400}>
            <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
            <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
              <p>
                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>{/* End Frequently Asked Questions Section */}
  {/* ======= Testimonials Section ======= */}
  <section id="testimonials" className="testimonials">
    <div className="container">
      <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
          </div>{/* End testimonial item */}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>{/* End Testimonials Section */}
  {/* ======= Gallery Section ======= */}
  <section id="gallery" className="gallery">
    <div className="container">
      <div className="section-title">
        <h2>Gallery</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row g-0">
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="assets/img/gallery/gallery-1.jpg" className="galelry-lightbox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NZgN8NOhq4FAcaZ3xq7oi0K6T3m0-D5GIw&s" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="assets/img/gallery/gallery-2.jpg" className="galelry-lightbox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDLCRN6UO8H-zWvkXKHgLnrUbDURndtetQA&s" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="assets/img/gallery/gallery-3.jpg" className="galelry-lightbox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXTf_wKsdnbL0JOIdfagSXaXRKQFnvo2S9Q&s" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="assets/img/gallery/gallery-4.jpg" className="galelry-lightbox">
              <img src="data:image/jpeg;base64,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" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="assets/img/gallery/gallery-5.jpg" className="galelry-lightbox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE38K6e3tBQWbv4h7onP4ECkHsWbpZuhmxoA&s" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="assets/img/gallery/gallery-6.jpg" className="galelry-lightbox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsyqF3XByFHXdX5tywa2IoRUtoRez2XVeNA&s" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="assets/img/gallery/gallery-7.jpg" className="galelry-lightbox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDVFN4v9NN0nlr2jCLe0Q0EDn--4PyfLI5Q&s" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="assets/img/gallery/gallery-8.jpg" className="galelry-lightbox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVF3KLNDnwQQ_g4gmT8UgNS-ux3CO3AX02Bg&s" alt className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End Gallery Section */}
  {/* ======= Contact Section ======= */}
  <section id="contact" className="contact">
    <div className="container">
      <div className="section-title">
        <h2>Contact</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
    </div>
    <div>
      <iframe style={{border: 0, width: '100%', height: 350}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} allowFullScreen />
    </div>
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-4">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt" />
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
            <div className="email">
              <i className="bi bi-envelope" />
              <h4>Email:</h4>
              <p>Protrio@example.com</p>
            </div>
            <div className="phone">
              <i className="bi bi-phone" />
              <h4>Call:</h4>
              <p>+216 25447600</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 mt-5 mt-lg-0">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>
      </div>
    </div>
  </section>{/* End Contact Section */}
</main>{/* End #main */}

</div>
  );
};

export default Naviger;
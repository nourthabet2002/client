import React, { useState, useEffect } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';



const Naviger = () => {
  const [avisData, setAvisData] = useState([]);
  const { state } = useLocation();
  const [service, setService] = useState([]);

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
          <h1>Welcome to Protrio</h1>
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
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="icon-box">
            {/* <div className="icon"><i className="fas fa-heartbeat" /></div> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NZgN8NOhq4FAcaZ3xq7oi0K6T3m0-D5GIw&s" alt="Description of the image" />
            <h4><a href>Decoration</a></h4>
            {/* <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p> */}
            <ul>
              <li>couleur et teinte</li>
              <li>eclairage décoraatif</li>
              <li>art mural</li>
              <li>sol(tapis/parquet)</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
          <div className="icon-box">
            {/* <div className="icon"><i className="fas fa-pills" /></div> */}
            <img src="data:image/jpeg;base64,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" alt="Description of the image" />
            <h4><a href>Plomberie</a></h4>
            {/* <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p> */}
            <ul>
              <li>réparation de fuite</li>
              <li>installation de conduite d'eau</li>
              <li>installation de systéme de filtration d'eau</li>
              <li>détectation des fuites invisibles</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
          <div className="icon-box">
            {/* <div className="icon"><i className="fas fa-hospital-user" /></div> */}
            <img src="data:image/jpeg;base64,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" alt="Description of the image" />
            <h4><a href>Electricite</a></h4>
            {/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p> */}
            <ul>
              <li>installation electrique</li>
              <li>installation de systéme domestique</li>
              <li>dépannage electrique</li>
              <li>installation de systéme d'energie renouvelable</li>
            </ul>
          </div>
        </div>
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
      </div>
    </div>
  </section>{/* End Services Section */}
  {/* ======= Appointment Section ======= */}
  <section id="appointment" className="appointment section-bg">
    <div className="container">
      <div className="section-title">
        <h2>Make an Appointment</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
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
    </div>
  </section>{/* End Appointment Section */}
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
import React, { useState, useEffect } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';



const Naviger = ({ nom }) => {
  const [avisData, setAvisData] = useState([]);
  const { state } = useLocation();
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    date: '',
    lieu: '',
    categorieId: '',
    clientId: '',
    nom:''
  });
  const clientId = localStorage.getItem('clientId');

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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:7000/categorie');
        setCategories(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

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

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post('http://localhost:7000/resclient/add', formData);
      console.log(response.data); // Log the response from the server
      // Optionally, you can reset the form after successful submission
      setFormData({
        date: '',
        lieu: '',
        categorieId: '',
        clientId: localStorage.getItem('clientId'),
        nom:''
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle errors if needed
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const StorageName = localStorage.getItem('clientNom');
  const   StorageAdresse  = localStorage.getItem('clientAdresse');
  const   StorageNumtel  = localStorage.getItem('clientNumtel');
  console.log("Nom value:", nom);
  return (
    <div>
 <main id="main">
  {/* ======= Why Us Section ======= */}
  <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>Welcome to Protrio</h1>
          {/* <h1>Welcome to Protrio{email && `, ${email}`}{stateEmail && `, ${stateEmail}`}</h1> Display both props and state email */}

          <h2>We are team of talented designers making websites with Bootstrap</h2>
          <a href="#about" className="btn-get-started scrollto">Get Started</a>
        </div>
      </section>
  <section id="why-us" className="why-us">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 d-flex align-items-stretch">
          <div className="content">
            <h3>Why Choose Protrio?</h3>
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
              <div className="col-xl-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0">
                  <i className="bx bx-receipt" />
                  <h4>Corporis voluptates sit</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
              </div>
              <div className="col-xl-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0">
                  <i className="bx bx-cube-alt" />
                  <h4>Ullamco laboris ladore pan</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
              </div>
              <div className="col-xl-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0">
                  <i className="bx bx-images" />
                  <h4>Labore consequatur</h4>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
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
        <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
          <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
          <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>
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
        </div>
      </div>
    </div>
  </section>{/* End About Section */}
  {/* ======= Counts Section ======= */}
  <section id="counts" className="counts">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="fas fa-user-md" />
            <span data-purecounter-start={0} data-purecounter-end={85} data-purecounter-duration={1} className="purecounter" />
            <p>Doctors</p>
          </div>
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
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="fas fa-award" />
            <span data-purecounter-start={0} data-purecounter-end={150} data-purecounter-duration={1} className="purecounter" />
            <p>Awards</p>
          </div>
        </div>
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
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon"><i className="fas fa-dna" /></div>
            <h4><a href>Nemo Enim</a></h4>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon"><i className="fas fa-wheelchair" /></div>
            <h4><a href>Dele cardo</a></h4>
            <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon"><i className="fas fa-notes-medical" /></div>
            <h4><a href>Divera don</a></h4>
            <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="section-title">
        <h2>Make an Appointment</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <form onSubmit={handleFormSubmit} className="php-email-form">
        <div className="row">
        <div className="col-md-4 form-group">
        <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder={StorageName}
            data-rule="minlen:4"
            data-msg="Please enter at least 4 chars"
            value={StorageName}
            onChange={(e) => {}} 
        />

    
    <div className="validate" />
</div>

          <div className="col-md-4 form-group mt-3 mt-md-0">
            <input             value={StorageAdresse}
            type="adresse" className="form-control" name="adresse" id="adresse" placeholder="votre adresse" data-rule="adresse" data-msg="saisir adresse" />
            <div className="validate" />
          </div>
          <div className="col-md-4 form-group mt-3 mt-md-0">
            <input  value={StorageNumtel}type="tel" className="form-control" name="numtel" id="numtel" placeholder="votre numtel" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div className="validate" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 form-group mt-3">
            <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="choisissez la Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div className="validate" />
          </div>
          <div className="col-md-4 form-group mt-3">
      <select name="categorie" id="categorie" className="form-select">
        <option value="">Select Category</option>
        {categories.map(category => (
          <option key={category._id} value={category._id}>{category.name}</option>
        ))}
      </select>
      <div className="validate" />
    </div>
    <div className="col-md-4 form-group mt-3">
        <select
          name="service"
          id="service"
          className="form-select"
          value={selectedService}
          onChange={handleServiceChange}
        >
          <option value="">Select Service</option>
          {services.map((service) => (
            <option key={service._id} value={service._id}>{service.name}</option>
          ))}
        </select>
        <div className="validate" />
      </div>
          {/* <div className="col-md-4 form-group mt-3">
            <select name="doctor" id="doctor" className="form-select">
              <option value>Select Doctor</option>
              <option value="Doctor 1">Doctor 1</option>
              <option value="Doctor 2">Doctor 2</option>
              <option value="Doctor 3">Doctor 3</option>
            </select>
            <div className="validate" />
          </div> */}
          
        </div>
        {/* <div className="form-group mt-3">
          <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
          <div className="validate" />
        </div> */}
        {/* <div className="mb-3">
          <div className="loading">Loading</div>
          <div className="error-message" />
          <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
        </div> */}
        <div className="text-center"><button type="submit">Réserver</button></div>
      </form>
    </div>
  </section>{/* End Services Section */}
  {/* ======= Appointment Section ======= */}
  <section id="appointment" className="appointment section-bg">
    <div className="container">
      <div className="section-title">
        <h2>Votre avis</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <form action="forms/appointment.php" method="post" role="form" className="php-email-form">
        <div className="row">
          <div className="col-md-4 form-group">
            <input type="text" name="name" className="form-control" id="name" placeholder="votre nom" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div className="validate" />
          </div>
          <div className="col-md-4 form-group">
            <input type="text" name="avis" className="form-control" id="avis" placeholder="partagez avec nous votre avis" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div className="validate" />
          </div>
          {/* <div className="col-md-4 form-group mt-3 mt-md-0">
            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
            <div className="validate" />
          </div> */}
          {/* <div className="col-md-4 form-group mt-3 mt-md-0">
            <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div className="validate" />
          </div> */}
        </div>
        {/* <div className="row">
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
        </div> */}
        {/* <div className="form-group mt-3">
          <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
          <div className="validate" />
        </div> */}
        {/* <div className="mb-3">
          <div className="loading">Loading</div>
          <div className="error-message" />
          <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
        </div> */}
        <div className="text-center"><button type="submit">envoyer</button></div>
      </form>
    </div>
  </section>End Appointment Section
  {/* ======= Departments Section ======= */}
  


  <section id="departments" className="departments">
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
  </section>{/* End Departments Section */}
  {/* ======= Doctors Section ======= */}
  {/* <section id="doctors" className="doctors">
    <div className="container">
      <div className="section-title">
        <h2>Doctors</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="member d-flex align-items-start">
            <div className="pic"><img src="assets/img/doctors/doctors-1.jpg" className="img-fluid" alt /></div>
            <div className="member-info">
            {avisData.map((avis, index) => (
        <React.Fragment key={index}>
          <h4>Guest {index + 1}</h4>
          <p>{avis.commentaire}</p>
          <div className="social">
            <a href="#"><i className="ri-twitter-fill" /></a>
            <a href="#"><i className="ri-facebook-fill" /></a>
            <a href="#"><i className="ri-instagram-fill" /></a>
            <a href="#"><i className="ri-linkedin-box-fill" /></a>
              </div>
              </React.Fragment>
               ))}
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
          <div className="member d-flex align-items-start">
            <div className="pic"><img src="assets/img/doctors/doctors-2.jpg" className="img-fluid" alt /></div>
            <div className="member-info">
              <h4>Sarah Jhonson</h4>
              <span>Anesthesiologist</span>
              <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
              <div className="social">
                <a href><i className="ri-twitter-fill" /></a>
                <a href><i className="ri-facebook-fill" /></a>
                <a href><i className="ri-instagram-fill" /></a>
                <a href> <i className="ri-linkedin-box-fill" /> </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4">
          <div className="member d-flex align-items-start">
            <div className="pic"><img src="assets/img/doctors/doctors-3.jpg" className="img-fluid" alt /></div>
            <div className="member-info">
              <h4>William Anderson</h4>
              <span>Cardiology</span>
              <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
              <div className="social">
                <a href><i className="ri-twitter-fill" /></a>
                <a href><i className="ri-facebook-fill" /></a>
                <a href><i className="ri-instagram-fill" /></a>
                <a href> <i className="ri-linkedin-box-fill" /> </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4">
          <div className="member d-flex align-items-start">
            <div className="pic"><img src="assets/img/doctors/doctors-4.jpg" className="img-fluid" alt /></div>
            <div className="member-info">
              <h4>Amanda Jepson</h4>
              <span>Neurosurgeon</span>
              <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
              <div className="social">
                <a href><i className="ri-twitter-fill" /></a>
                <a href><i className="ri-facebook-fill" /></a>
                <a href><i className="ri-instagram-fill" /></a>
                <a href> <i className="ri-linkedin-box-fill" /> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>End Doctors Section */}
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
              <img src="data:image/jpeg;base64,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" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="assets/img/gallery/gallery-2.jpg" className="galelry-lightbox">
              <img src="data:image/jpeg;base64,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" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="assets/img/gallery/gallery-3.jpg" className="galelry-lightbox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CuNEJlUkXBoqXCXl8aqgwK0mzcgEy-Z0Jg&s" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="assets/img/gallery/gallery-4.jpg" className="galelry-lightbox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh48IFZNwpGy4CedFfzfLPaSkMnlRwe-x2RQ&s" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="assets/img/gallery/gallery-5.jpg" className="galelry-lightbox">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFhUXGBgYGRgYGB0YGhgaGBcXGhgYHxgYHSggGBonHRcYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0mICYtLS0tLS0tLS0rLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJgBTQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAQIHAAj/xABJEAABAwIDBQQHBAgDBwQDAAABAgMRACEEEjEFBkFRYRMicYEykaGxwdHwBxQjQjNSYnKSouHxFUOCJFNjk7LC0haDo+IXc8P/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAyEQACAgEDBAADBgUFAAAAAAAAAQIRAxIhMQQTQVFhkfAiMkJxgdFSU6Gx4QUUIzND/9oADAMBAAIRAxEAPwDsyjceNWqooMrFXSaCAiJtFycoEngZnroL1MKr4ZIiwR/p091SzFBBZvVXaLZUgpSUgkj0k502IJlMidOYrL2IvlTc8TwFVEYFOfNmVPHvW9t/bSuXhGKu8GAU9huwQUpUSNEkJsZNhOW/jXlOfdMMMyc6wAlKE6rXFkz7SeABoyDFVvu4U52ih6NkzwHE+J58gKSS8rkeL8MG7JRjVJzPltJP5QnT20TQgjVV+gqbOBqapu49EkDWpNxguSiTk9kWEM6nnc1o62LWFtOlaHE/hhXMA+sTS7ittKCwOtJlzKCKY8DmxhGFTlKQSAdYNV14FCQmM1uJj4UP3d2n2r7iJnLJjpKY99MGIiKMZa4akJKGiWli9jXVHMpNlJNiKIF4K7F4c4PTMMvvNUM4Lq0gRYT1mflUmzBKFtnT56+2jjlav62JzjTDeJZStKkKEpUCCOhEUo7N2gWycKv0m+6D+sn8p9VMrWKhpSzcoSrMOZSJ9ov51yI47FPo+/OnVcJygAJTHdAi8SFCTNHM+Gh8PlHRBiJHhah+0selCJJpYwe8s+lYgXHMfOroxLeJX3VDIgAzzJ+FSlK0Xiqe4BxG2FhebKpCDfMpBIPXMAfbVXFbedaSXkBleUSF5RPeIESINFNt7edYSQlKFJ0k3Pqrn20FhxQIASTqBpfUkVGEbZ0yklF+y/iMerEEOPKgak8hyHU6V1rYm+uBwuDGZ0EN5AvIlaggqQCEkoSQNI8jXOdjYrCts9mthCzb8Q+kPC8RTRu9iMI2hakuAhxORTSkgcyf3xr667cOmOx52eUp7nN98942MRinHWVLShRBAvygxIkA6waAK2gjmo+I/rTNv05hpPZNIT+6APdSSkV0sguAzhNspQQQ2ox0HxmmTBfaDiUABLBMaGWxH/xH30m4dNF8OLUjSCdV+yzezEYvGZHklICCU3SZJ19FI6VSxWLPaYZoGAjaDpV1lwgD2+2qP2TuRj0dQRW285S3jUgccYD/APMOtrz66H4X9eANcFr7QHVtIDjcZku2mYghQMwQdeRrmKsfi+Lqz/7rnwVXTftJnIBw7T/t+c+uuauUuN7DSW5VVjcR+ur/AJjn/nUS8a/pmP8AGs+9VTkVA4KqCiBWLd0JJ/1K+dZwTau0SrKYnWDEHryrVxNHWt78YYQXBBhJOUAwYSTI0MVjfkE2kFJBPkOf9KMtQsd8BXiAffQ1TxJg8KvYNdcsiqN3NgpzIcYKWSBfImM1yOBA9l/KgW8SnsMA2h1UqUXM3gSYgzeYM06YZwZR5++fjQHb+zDipSkwoXT8R9cq0J77mcdghuBtRx5WZ0qU4EKVmMQUrLQSIAAFmx5U7Z7mlXcbYasM2ouemvKPBKbAfXIUyu4xpHpuISTwUQNKnkdydASpD/hVS4PA1fdVAJkCxudB1PShmzv0h/dPvFEcQuEkyEwNTcDqa7lwTI2FAjVB6p095qHG4jKkBMZlGBHvqVt4ZZzpVbUDX2mggxJW6on8tvA8vYRSSl4NReBygJFyfaeZqwgQI9tK22d6UYRaUFBccUCrumIHC/U0MZ+0BwkpVhACP2yPYU1JzQdLHwvJBAKhcwJ4mCYHOwPqqvtXaQbFrmkvB7ScexCHVwIslGgQknvRzMcegph2g1KTxMVLLOTg9JfDGOpajfYu0vvDSlDgtaD0KTce2oHcPlUVTzoZuo+pp/ENKAyuEPNkHiEpQ6OhkIPXN0NXdsYruk1GdPCn5o6fu5Wo8B166BPIe6lfaaUgijOFxWfDtq5oT64v8aUt5MTlProdTL7Ko3Tr7VGv2aN/7Zi3pJBkA8LuEx/KKdto7TABrmP2T4pQefSZlSEqgniFEGP4xTZthEkXIvGtM7jjSRTJCLyt3ZbwePSpxXeTmGUxImOccqsuOlKpQRHG/Ca5HtN3EoxHaALSheVKVBQCVAE6kKEXJ1ijD2z9piO44J/46D7nKSOTIlSjf6jvpOnl9qWSr8UdN+9hOY6gpMgayBpHOJ9lc7b2FjRs4MZAHEPFRHaJIW2lBykd611Rl1lMxeh2Kwm1EwC08oHihWcDxyrMedBnduOJklZkTYKk21ETIpnlyv8AANHoumW6zonxWxca4kKThl35wg+YWQaG4fZW0mSczfZg6AqTbzSTUw3qVaVHnBJ43FiRUqduvqBUlK1AGO5Kr6xCSTy4VLu5Vto+Z1LocEt3l+RVxGDxKzKlN6aZj7stV2tjOalbV/2494oiNv4k/wCW+f8A23PlWTt7FadliP8AlOf+NFZc64gaXQ9L/MKB2apMfiNfxz7hRzZ2wHljMMsGAnvcPVQ87exX+6xH/Lc/8ahO8b3XwNiPEKrPJn/hB/sekr/sL+3NyS9lPaIQY1uQTxkQPCQeFA3/ALPn0nuvsKFpJUpEHiIyn11aO8S+OWev9qrYjeJyYDaD1yg+Uq0p8ebqbppCZuh6WEdUW38Eao3OeT6T2G8nFH/sq9ht2XDYPME/vL59UUOw2OfC86VISD+RVwLRplIHOQaJO4lS0gqU3nv4Xj18dedW1ZH+JfL/ACccsOJf+Uvm/wBhp3M2AvDYhvEOOIhJMJTJmRpJAjgam2zsJpbxfDyirti8Gy2BBz5gMwcPhMeVJewFYhpeYKZUmZOcBagb+ilWUaHSR40T3kxrymkpluScx7AlpSSCe6r0hcXgKI05VRN7rUvr9Tmnjpr/AI5L6/IPb4q+8IyDKlUz3ibEW/VtrXP8VsV9InKFD9laVHySDmPkKjecxX+8XHIuZjpzqbD4p0JJW5xACSZPG/KNONJqnBWmmUhhxzlpcZL4/SBLrak2UlST1BHvqu5Rva2ZTSFqMhSzEm9hcxrxFdH3C+zILbRiHyAlQCk8SUkSD+yI46+FdGObkrrc5c+NY5tJ2jkbOyXlmEoJJ0AEn1C9H9g7ovrbUvJABINgdPPW4tXWd5Ns7M2ahSG20qdI9EGL8CogFR8SPOljZu+QXszF5EJaUl1N02/SZDPeUZPcPlwp6b2JJiw9s91HpJNtTH1FS4Ynhfwv7qZd0sacQ0tLj4SrNF0pUVASZ1HMDQ1dO67QUXCpC1cyCDHkYHqrnb9lExa+8HLA1k/Ci+xWIudTVjE7FGoQkj95Q9yTVVOEyXhSTayCTx8BSNWHUY3u2kWcOQhWVxzuJI1H6xEcQPeKSNlwoKIWUExbNlsBAm9zApw25ukcUElKiXU2QSSNTpfS/HWwpz3e3dwTDDacY2j7wpMuApCiDJE8YB19dVxxTjSElLcbtkH8Q/u/EUTxToShSioJAE5iJA6xQrZKvxD+6feKl3mj7s4SrLb1ngKs3UWzVub4jHJ7JSgsLMcBE0AYxIZSSVgE5lqUdAOM9BV/A7JAZBR6ZTaSYJiubbdxTpUpkpKAFQoGxgXA8Jg9YHnJy2th070ipjdq9riF4hQUZICDcd0WGhBBOvnUr+2m1CQmFjQyTPjM++qTYKfRJHQaHy0Naunmknwb/wDrUGy2kyNoLzApUcw5UfwG+JbayvgqULJIiSDwItpz+VKy3kc1gTEJAv0BkxWNg4JT61WupQCRrzjyAk1uQ1QXwm01feQ+kKOUkhMgAgiFCPA0a2tvMytJQlULIsFAj4Vfw25eWIe8e78zUu09xsO8UklSSNSIk9ehrLC6qtgvLvbAe7O8KkIOHcUDlJKVAyIUZynlcm/XhFCt5catTuWO9oB4/WtND+57TMrbUtRIy96DYSQTA1tE1WXhCrLa4ETyqc8e9MpHNW5a3fwOHaUlxIh1KAlUEwqwmR4iaq7xbZSvMhJOab8Annc61cLSWkSNedJO8DhQsqI7rgkHmeI8Z4Vpq1QME7k7ZT2httawGUJzTCUpAknkABqa6Zgg4llhLvppbSFcbgXE8aGbp7GQw2lZSO2WJWTqmdEDkAInmZ6UaxPpJp4xUUTzZNTpBTBwElSjb5UkLwOGcW48thrLeBkTeJMm1yaYNt4zIxA1NBWWwGhPiffTyl4RBIqP4dtrDOPONtqcUCqShJgn0UiRYAQAOQpe3Y2UMinV6AE9LDlRTfDEZmkNj8ygkdYuo+En2Vffw/Z4JSBqpIR/HCfjS+BrYsYnCKRh2FEnMpKSb6kgE++gOOxBSoCSOOt/CnHepWVTaY7qUAdJOg/l9lJGLC1uFeQ8gIMACkVWdUXLSnYQwazxUZPMkx5cT7qeN3NlMONlS2WyBqpaEqPmSPZXP8Ei/fPkLV0rdvCF5CQe40nRCdOpJ4nrRi1q2Bk1ad2ar2LhlTlYajo2n3xUext08K2o/hAzclzvxlnTN6OvCmtWCEWkAUP2glVm0eksxPJI1NWcWjm1FTE4fChtbn3dooTzbT31flSLWE8KI4Hd/CpQM2Fw+aO8eyQe8dY7uk2oPvM+Eu4PDDQuoKh0Bt7RTUpUUYrczk65Eff7ZuHbSjs2GkEpN0oSkz2jMaDkT6zSl9o2FabZwRbSlBUhzMUAJKvxlAExcwBEmuhb04PtnG2/+GtQ65XGSfG01yrfN7O3hjmBCWgmJ0JcWogjge/VoLkSUnsHftCwLLaMMGmm2ypcKUlATbIdcouJIPlSu5iEyhttExCQQJUtRt6yTYeVPv2ibPLmCQ8kjKjKozyUIEdZI9tc52RjPxEmCCJJUASU2jNYWN7HQKKTwqbjqSKY8jitzOIwy3cYG0wo5g2kpFlEQlUH80KkZhrArp+/P2i9g2nBYQ99KQgqTomABlB4kcSOOkelXPWP9kbLyU5VqAS3eSmRB8FG5OmpAsTUuwSjDNfeFjPiHDKJElObQJH651J4AgDjLtqC/ohVGWR1ZVb3cxj3fcQo5jMrITJOp7xknrRXEbPGFwLkryqW4Af1VQLHSYAzwedNWH3SxTyM+KxCmQoSUNjMsTwKjZPgAfLSlrevc7sUAtYhbjajcOXUk/rd2AR5VBZW5JNoq8SUbSYssrSAD2hChJBSCRfrMjTlRRnbeLA7rnapHKFEeIEKHmKhZ2e2EhJSFRxUATVtnZbJiUaaEFSY8IIiulo5rLeD30ULLkdRPu4Ucw+2ioAoVIPIzQZe7zDnpZ/EKv6zNS4fdpKO17N1QS2hK7wSSorEcP1R66WkKyXbO9jyMqW0wRqqInkOvjW6t4A+lC3VPdrlIUQEkZQteQWAvdXkR1pY29tVxoFmM3AOKvwBUAIsRmHHjQ47QKAkSQoDvdeI9hori0g0fTmx3PxY/ZPwoxjGEuIUhQkKEGl/ZSofT5j2GmMqpWUKWycyU5F/lsDzHCtdr7FZxAHaJ7w0WLKHTqOhq4a8TS+KYfNiNj9yliSiHByByq9SjH81LeP3dxk5U4NYH6ylBz+FtKimeptXWyqtSqp9uI6mziw3Sxy+/wDd1gCwCoSenpEU57m7u/dkSuC6dYuE9AeJ69adVKtQRBpoxSA5NlzNWM1QhZrBdpxSPaCj2ZI4KSffQ3Lfpr8qNONfgz+so+y1BXhl8qSSNYJ2y9+Wa9s+D4Cge1sYCvKDeaM7MsgComLrmKKb1sNoIUZUoChmOxQFzrwFBMWsmJOtYwZ2jixiHUpSfwkXJ5n5VI6sr7shIsAOcCaCM40IB48h161hDoUJUMxjiLCf7xWZjd/K/jW0CcjKJPUqPyAp7weGRkJWlKgNAQDccb8aTNzcLm7V6PTXCf3U2FM28G0QyzAN4pltubkUN99o5nA0jSAVAcSJygxrEk0uobXwSo+Ro1urtNkqWp3LmUoxKc1hAF4PI+ujmI2g0kqKiAgRGVCZ0vOYCvLn1045XjUP1bpf2PYx9BGUU1Lx43JWw0dnNIcCM4JkKjMBmVzuOFDdsKVhsOy7s9Ki8Vw4hJUpJRlXfJMC4Tcc6wvbuGMlC4HCWlA+xJHtqniNsSO6qfBQHsJFB9XnUt8a+f7HVj/03G4/fa+vTRIj7TMS2P8AasGtI/WykD1mI9tYw/2oMFUlv1kj2xAoQra7wJjBofSRcOCfMEAiqru08Kf0ux0D/wDWuPckV7HT6smNSnszxutxww5XCG69l7bG8AxOIbxDWXMgiE5p5iJtz1py3c3rbxEJUQF6RpfqOvPQ1zYu7JUe9gcUj91ZP/8AT4VIz/hCFBxtzGMqGkpkeB/DVIq/b+Jx6vgP32iKfZbaxLKigtqKVKEGEuQJPTMlI/1VzHEYRWIQSDLgJzAnUa5pPLjyidCY6Fs91bjJyYguJcE5XZUChWghXo28DS03hlYNxS3GwUnguezPgsXbPI8OvCKypOi/ZlVlXZO9LrTX3LGJCmIKTmQoqKLd0FJBFphXCxB0orhHd3wnN2D8xGUuK4zeM0G/wtTJhN1mn20ulKmgsZg2V5ssie8UQTOsyetCtrbpKRcNKUBxbUlRj91xJJ8ATW78EJ2ZsQdvPh0lQSoNpPdHGCbnxi1P+6mO2W3K1PBTuVakGCkIj0UjPBk2BI5RQNOyWlJGZxTRPB1hI46TCTNaf+lhdX4a080pWr+VK59QovJjnyHROA1Y7fJJVY2t7L0ubQ2uHRHjbxpQ2qotrUlOiSEwJjism9/zjW404VjY+L7ysytdPbU49LvbZafVLTSQyKyT6PtqdlSf1T6/6UJW8as4d011M4UHGFjl7a1GKKk4hI9LOykQTJSUqVBGkSCZ8KpDEQKg2ftBCHHAr/MyqJJgDs8w/wC40r4MuTOIwIcTiUG6kqCh4ltBt109VJ7eynVFRWQk/tGJ8OldBRsx51ansOEKSoJCgladUiJF4uAPVVPEbNdCiHG1BXUR7dDU1JxKVZ17BuQ6g9R7bU0ZqSkO+irkQfVThmpmFG+atSa0CwTlGsT9HTyrVDoVMEGLHoeXShuFNG5Na5qwTWs0tj0bTQVJufE0XJoKowtQ6msmaiXNWAZtztWhNT7KbzODkm5+Htpk7dAeyCWORCEp5QKBbSb7qiOR91G9ruWHjVF1mU00lZJM5ynDYcJzKkKPiozRLDqhE0J22hLLwbUoCO8ZMRyqLE7eZCYSoqPQGPWa5qZQkxmMAJJ0oM9jwpUjThVTFu5zJmsIbpqMTIcJPvq594SkRnufPWqDrcQa1pWMojTg97mmUpZaZUcoiVEJHjAn4VjaOIOIQVKseQ0pNxLkEGiuE2jCDWDSK+zn/u6zaxFSvbTClExrEjUWoZtB6TNUS6a530sXPX5PQh1ko49HgY0NtqQtWYpI0SOPPwqi4iQMsk8ZqgjEmIols50cadYIoV9XkrkovYJeskeFVodGjivWaanFpI0od2SSquiEtKo48n23b5AZxj4/PPiAfeKydouxdKT/AKflVnEs9+KjW1VVMloCu6OIxLhUEMyhPpLByhPEDvGFHoL05Jx6SgoXCzoUqFKOxN5VYdjsgiQVEk85jUcdIqLFbWL8kd1QIykajpHI8q4ssW53VHo4mu3Tdjbh96y272bhCRwOluVMWC2qgpJJt0rkGOxilHK8O8PzDQ/KoE7QcbEJcOU/lm1HtNrZi64na2dqNLBnTrp7aqu4HCOpI7JAnigZD/EmCK5Vht6lAZTbwvRFnfJttN1H4k0vamvAtwfkX97MCnDYlaErUqSVSoyb6X4/0oRhNKi2ptFT7q3FfmPqHAVswq1elBNRSZwTpydF9nGlNjce6i+GdBEg0tk1cwOZMK0QTe024kCRJseI0otCBl1+osPhu0NyQeBGoqqXLzIKCSARx5HzHCjmyGxQYHsQt7BxCCFtKzHmlWRX150S7HaK4lS7CBLgB99z1o3hhRBs2pbEbHjZO6qUtgLdWryA+deY2uyJQV99JKFAAkhSCUmQB09tMin0JHeUkeJA99LwCO2dykFKlBQIgiSkBVx1HtpeobSuKOjEk3uyhiXmysrZLqHTqUtqyrjQLSuEq0F9eRqQbZywl9PZHg4P0R5d4wWz0VbhmNEltxehu18YEIP4efoTHtg1LHlzL70dhp48b4e5eViFC0TyIE66GJvUbTi1D9IP9KQP+omuTYjfTE4R05W0oZmQ3JWgc+RTx9DKL3Bpv2Bvdh8YUgK7N06JJEK/dWICvAwfGqyxqatCKUoc7ji2gjUk9T/QUN2hiMM2SVvNtq6rSJ8pkmhu3tnNPjI4XOWZBKMvignKrzFJGO3EeQZYcQ4kzY9xXmLj21z9ma8llli/A6/47hzOVzN+6D7zFU1b6JaJKEE88yomx5TzpPa2NjG9WHP9IzD+Wahf2biD/kO/8tfxFVWwr3Cm2vtDxSz3A2jwTmPrUSPZS1jN5cY7ZeIcI5BWUfwogeypTsHEq0ZX/qGX/qipE7p4rikJ8VD4TRcgUkCE3rZtNGVbrYlIkJC+iTf1ECfKh/YkGIg8Ry8eVDUCjdsVMuLVolFSqRalsaiQpzJoe5RNkWqji0UApFF82tUTb0CtniaqXooNG7701XUo1JetYNEJhKqI4V01SbbNW2gaIC4cQa07a81CQRrUea9A1EhMuTVkoqugQRVoXopgaZVLIobiW4VblR/IKoY5oCSa2pAUWAMRjlAQRPWqascKtYzvG1UjhqpHSCTZg4nlUKlVKnDXAGp0HGjGD3SxTkfh5BzcOX+W6z5JqlpCOwCmr+EaUs5UpKj0+PIdTTbgdymkGHFKcX+oAR/InvHxJSKl2jj8Nhu4IzDRprKTP7Sh3EfzqvwoavQoKwmxgnvOXIGaOAHMk2jqYT46UK2vtALORF0g6iYtwHMdTrFgBW+0Me7iLKhDcyEJmJ5qJutXUzWmDwWZSUDiYnkOJ8AJPlQvyagqtnLgkr4932kH3KFFtgvpUO6dNQdR8/H+1Y3pQlvDNoiCpQtxiMx9SQ0PEml3CLUghSSQRoRQW6A1Z0vDKoi2bUt7B2mHRlV3V8uB6j5UworEnsNGNTeptnOVHjKiwi4NNItHgYlKkUJ2o3mSavtLkVXfFZ8AXJzbbOCBkEAikt/ZDrTgXhlELzCANCSYAI06V1Ta47I9r2YcCCFlB/OEmSn1CvYz7T8IcM72DKmXoARKEkXI7wKSRYSbgVOEXdplnNVVF597EiEpbCiABmyKMkACdelSObw4hsXwbSTxKlhI4AiCkEAmbEnXWgmyt98Bi4bxilMOH84UoNKPW/4Z8bdeFF8R9nbBGdpRIVcKBnrII1p5KS3IFF3fPE6LSwkX9Hve4qt5cKhZ3paSO8lajfT5qi1Cd6GFYZkJLSlEHL2kiLglOYRmJsRYgWGpNJeK2RinAMq8iImVPAfyBRV7KRO/Ix0XF72ADMMMSJi7yU+OqdfCtdnb0IdXkLJTrftUq0E6QJ051zdG5zOrmJJ0ns2p16uKST6qtYDdrCNvNqTiXQoLSRmaQBY6Ehzug84NGomOvBxCUhcjLqDSPvK80rEqyGZQlSo0mVD4Cp8TiAtpaL5Qb5YJGpkAkXkR4HpSgxjJxClAZQRlygzABEX4nmeZNSktiuOgyG63yCtgJg/X15VMxGZMi0iZ43qCZdomb2TiCJDLkRbuH5UK2kwpJhaSkjgoEH1V1Be3TeA2QOJzC38dLeH3fVjsS8tSwB2mUJTYhKWGlWkG0qi/I1Vx9Eo5F5OeOfX1oKrLF+vt/pXVl/Zm3N3HU6CTEXIAuG7a1RxP2VuZglD6TYE92RckaiPHT3xW0y9FO5D2c1CalCPo8af/AP8AF2I17UfwKMd0nSedvP1ZP2Xvi5eFv+GrgkG146T05XoVL0bXD2Irbc29nOr7eHgTx93SnJv7N3E6vazfs+GYCe8sQCL+A8Kst7loSAFvq8SG0gQSOLpOsfxCb0yTFc4+zm+ITwqAWv6q6QrcvCSQp1RPAB1IkmIBytqgZs6dfyjnFWP/AEps8kDsysTwW8okSYsnILwfMEcIrNMHcictSu+v9BVlp71nTw510trY2DSDGFbAj0ltSm6AQZfWscQrj3TpaKw5tRpsQlbLWvouNt2Gf/cJHIAX4o52Oli9xCMxs/Eru3h3lDgQ2ognnMRUL26uMWe+G2h+26idf1UFS+PKmvae9eDvnxCFm/opW9xXF3TpceSulBMb9oOFR6AeXBsCUNpIlWuQTdKogdfIqDB3GVGdxdC6/rwabJGk+m8W4On5TqKvYTdXBpnuLeI/WWpen7LASPWTal7E7+uKnssM0P2lAuG4AJ75i8TpY0Lxe3ce8O/iFhM+ik5R6kwKfTXLFtsf3XmMKDdnDiASCUoUrxQ0CtXgo0v4/fRkSGUrcPT8Fv8AllavNQpTRs8XKrmYvU/ZgSI50Lig6Gb4/bGJfGVSwhs/5bYyJ8wPS85qo1h0pAipFm/nWUD2zRcgqJ4DUcqaN0tkSS6sd2AfFJ+KvRHTMeVU93dgLfIWRCBe9s3X9y1zx0HEpbN4tqJwbAyWWR+GLTfu9oRwmCEjhBIsmhzshJMUd8sb2mIyTIbBBjTOoyr4DwAoU0ajSk6nU3PjUiKc1FtpwiCkkH1dQQedN+yN5kFEPEhQ4hJIVrfuix5/QCYgxW5rCuNna8DtFL7SXEmxGnI8RWFvhIJ5UibibTKCWj6J08abdqqX2SigZlC4TpmjUA8DEwecVnKxnHTwAXNt7Rxi1IwghsEpK9B6zr7alTuvtSL4pE8tf+2o9ib+4VhPZqBbgnuqBSQSZM2IJnrV7FfahgwO7JPQE+4fGtTF2I8I3jmTkxACwSAlYVKTe4vcK48BahG8bLOXMAiFjMCAJMixkXqB/buL2ivIw2pCdM5tlB1jgm3G55UT23uwoIaQ3cNthH8PSkk6KRjfJzlakFUa+w0f2Jtx/C/oHXG/3VnL5tqlB9VC9r7Dg3lJ9XuoTmfa/aHWmjkvhhljrlHTXN8VPpyYppLhggLR+Gq4IuLpUJvoOB4UrMYfEkArfyDkhI95B99CMPvAgQHELSekH3xRjDkLJIJynmY916nk1LcbGot0au7Ob/O44o9Vk+yfhUZ2KwrQH/Uon4++iKcOOX18fOsqZA+vh86h3Jezo0R9A7DY1eDXF3GdCNVJHTmOlBsDjc+IJHokwPgaaFMhQIAih+E2YlC8xEXqiy7b8k3it7B9owkW9fyqdN7zB4GqAf5VO059H5fOoFqGfaO2cOwstrdaKh6QuL68AYpJf3oeaxTy2H1pCimC2e7AbA0MXmRpQfGbIDjilkkSokkkmZJ051jD7DSDoT0J9/KuhZII5lgkMZ3+xhEKx7gBEGUaeaEk+YFUhvStonK+HM6ZKglRIJBGWV5SDYG1pynWaqf4Mg6JB+uA1UayjYCQboP7vE9TyrPPHzYew36CB3+d/wB5PpfkI1IPBVr3HIzzrdf2jOG3cInQtn9fMNVSI4R+soUOXsoE2bHqsOg5nrUX+EjQIE+GnzNZZo+jPB8QiftAdVHdbju2yWsVGNZiDljimxtWjm/OIIspseCE2OQp4pM6nWZtyquzsSbZQOZ99bjZ1ydANBzJ0+fhQ70fRux8SNzffGXyuG8yQm5mBrA4JSPKqOI3lxy5lx05uazfXr1J8SaIf4cEi5018eXlp41qjDJ1PH2cvrwo970jdlewKt3FLspZjXUkA6+uw9VQ/clmSVf3phWhCRFpJ+jUanEyIFhc+N4od6TG7MUBBsyTEk+cVK3s5PIDX30QQ5qfH5CsMD68bCi5SBpRXThRPnWwb7oq4ReeVbOsxl+uX9aVsakD8nHrUC/nRDD4da4S2hS1TMJSSY520F9aYNnbiOKAXiFhlBkgAgqIMRe4AuDYLPSitwNpITGmFLWlCElSiYAAknyFOGxN0AIXiI1kIFx5x6fgO71VcBx2RsdtpB7FtKE3KnnLC0q1UST6OhkWMJANC95N62cL+iVKj/mkZlqix7Fs6JJH6RVoFptVEm+Dnc/Ra2nj2cGgl0DNAPZnRIjuqcjnACUC5jgK5ZjccvEuqeXNySAdb/mPXSwsAABpUWMxDr5zOEhIMhMk3OqlE3Ws8VH2CBUqE6fX1cGn2iqRox9mFcPrpWEG9YWfYakSmSTS2NRuK3rUVnzinELuBxBSoEEWPj7hXRNmY7OgHj6q5qhQ6eFH9iY0oMHT1VBOjokrHB/ZGGeMuNpJ4kWPrF6mwm52BTcMgnqSfearYV6fqaM4d76/tTqiTtFpplDYyoSEjkBHuqJ0zUpNQLVTMVAXbWxkOifzc9J86ScdssoMFPsj23mukLVVHGMpULpHxqUoFoTo5q9s0K/KPVAqzs5pKUxFxpy9ZpnxGyxykfXCh+IwqU6VJ2lRVNNlMfUVk6ax0/tWi9a8pufq1KOYDgm3nxrXEgWOvj9aVIEngI6ke4fOsKT18ePrPypbGo80Cefj9afWtStuBJj+58qhUomIsOfDyFbsqg2Bv5k/IUAs6LsvZGEcZSopGYi86z8KD7xbIZbgtgAceX9aH7Ox5bEH1DQeJrTH44r4z15eFO2mtkQUZKW7NmsUhJkJA8rny4CoMdtAEDKAkX+utDlqjr0+dRuGbrMDkPcKWitImVjFHSw61oh8kW04nT1dKiIkSbDgKjfcMX0nTn8/Clu9iiijZ3Fz0SLePLyqFTp4m/riT7TUuBaC1gECBBIJjUxrzvPkaIDCJSTmQJB0PP8AtVIolKSToBlyTE2HvrQK4nQaDn/ejuIw6SMsCDpAvVcbuYhxWQZUQAe+rLZX5oN709PgTXFK2A+0N1q4+ysK7qep+vr+lN+H3LQVoQ5ikCVJHdBVANr0XxX2fMNupQ86tQkkltPCLE3tB4a0yixHlic5AGXrYCpcFh3HCQ2hazyQkqM8PRFda2du5gmwOywjmIUMqpUiBIMG7mayjw6WowWX0WCMOwO9GY51QjvAjNOiiIgW9VMot/Vk3mXhHNNjbm4t0SUBCTluozYnLMImBNjMRBmIo2zunhGyDiHs5uMiCCZGaQUtkxEA+ncHQRRrH7TYH6bFu4gwCEMg5SFJ9KfRylZSOhilvHfaBh2LNIbbEESVB13vJyyIlIUCib6hQ5zTqBNzbGZvCFCIZZTh2eK3MqQDmTBg92cyLGCrrehGP21hGkF0KD6gRLjhKGhYER+ZwSlaIElJ4RXNtt78YjEqMSomxU53hcJkJR6KU5gSBBielB3WXXTnfcUs31JMfKm0xXIFFsYN4d+XX1Q2SvL6KlJCG0aQUMiw01Vm46TQFnDEqK3FFS1icyr38amQyBYDh8K3QLJPIxSyna2Kxglya5efG3qrCDbwMVI4LnyNYi/RX1NKmM0R5L342qdpu1/D5VM0xI+tR9eyvK99vA0yYjIimsTWVGD76wE04habAB+dXGH4NreAmvV6uavJ134GLZmNJAv66YMJiTz9Ver1NFk5IJNuzXlKmvV6q2RrchWedV1mvV6kY6Kjy+QoXi2Zr1eqcikSiGOFYUgcT9ePCvV6o8suuCJZ1Av7vM8ahKDqSD14DwHGvV6txsGzbsyrXup5nU/IVJZIsIHM+kry+NZr1KtwvY0BJsBHHp5njW+a0JMnia9XqYWjXME9VVpljvr1+rCsV6g+aGXBE7NidTonkKqvvQeZAjoPKvV6jBWabopYl2EmYUSL2mOvjaPOjWJ3pcWlohLYIQkZi2Co5bXKrcOVer1dcUqOHK3qIU7cfOrqh0TCf+kCnDZO2C820QlJfbQWisjMCgSUyOJvE9K9XqLRIkeeGr2JbbHVTaPUPSpYxu9DrDjyWMSpxEtlKiSRYSuM944cq9Xqaqr4hSNMd9qD6kwp9ZsRDcNi103TJBn2COMhexO+7qlFSUySpK5JPpAXVAsM03gaW4mcV6qtUKkDHMXisQcqlkJP5RZIuVeiOpJ86jZ2ZxN69Xq53kldHSsaqwqjDpSEwIv8K3Rzi0msV6pXsV8keTj4RXkegpPEfXwr1epvAj5N3zcHmK0It4GvV6jEEiwh2wNRxqOdYr1OiZqFTWHRXq9TieD/2Q==" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="assets/img/gallery/gallery-6.jpg" className="galelry-lightbox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3ZISazlSmnnenBdp_q09hkRoHdDBIt_Hdw&s" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="assets/img/gallery/gallery-7.jpg" className="galelry-lightbox">
              <img src="data:image/jpeg;base64,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" alt className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a href="assets/img/gallery/gallery-8.jpg" className="galelry-lightbox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudjKzNOnigYPDqJgVDOQtdlhXyn951jQiVQ&s" alt className="img-fluid" />
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
              <p>info@example.com</p>
            </div>
            <div className="phone">
              <i className="bi bi-phone" />
              <h4>Call:</h4>
              <p>+1 5589 55488 55s</p>
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
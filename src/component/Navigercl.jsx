import React, { useState, useEffect } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';



const Naviger = () => {
  const [avisData, setAvisData] = useState([]);
  const { state } = useLocation();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
          <div className="count-box">
            <i className="far fa-hospital" />
            <span data-purecounter-start={0} data-purecounter-end={18} data-purecounter-duration={1} className="purecounter" />
            <p>Departments</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="fas fa-flask" />
            <span data-purecounter-start={0} data-purecounter-end={12} data-purecounter-duration={1} className="purecounter" />
            <p>Research Labs</p>
          </div>
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
      <form action="forms/appointment.php" method="post" role="form" className="php-email-form">
        <div className="row">
          <div className="col-md-4 form-group">
            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div className="validate" />
          </div>
          <div className="col-md-4 form-group mt-3 mt-md-0">
            <input type="adresse" className="form-control" name="adresse" id="adresse" placeholder="votre adresse" data-rule="adresse" data-msg="saisir adresse" />
            <div className="validate" />
          </div>
          <div className="col-md-4 form-group mt-3 mt-md-0">
            <input type="tel" className="form-control" name="numtel" id="numtel" placeholder="votre numtel" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
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
          <option key={category._id} value={category.name}>{category.name}</option>
        ))}
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
  </section>{/* End Appointment Section */}
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
  <section id="doctors" className="doctors">
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
  </section>{/* End Doctors Section */}
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
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrEK9k_U6DSmQZ-azyTMJIupd2nLdaI_lDQ&s" alt className="img-fluid" />
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
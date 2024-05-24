import React, { useState } from 'react';
import axios from 'axios';

function Avisform() {
  const [avisData, setAvisData] = useState({
      commentaire: '',
      date: new Date().toISOString().split('T')[0] // Defaults to today's date
  });

  const handleAvisChange = (event) => {
      const { name, value } = event.target;
      setAvisData(prevData => ({
          ...prevData,
          [name]: value
      }));
  };

  const handleAvisSubmit = async (event) => {
      event.preventDefault();
      const clientId = localStorage.getItem('clientId'); // Get clientId from localStorage
      if (!clientId) {
          console.error('Client ID is missing');
          return;
      }
      try {
          const response = await axios.post('http://localhost:7000/avis/add', {
              ...avisData,
              clientId: clientId
          });
          console.log('Avis added:', response.data);
          // Reset avis form or handle further
          setAvisData({ commentaire: '', date: new Date().toISOString().split('T')[0] });
      } catch (error) {
          console.error('Failed to submit avis:', error);
      }
  };

  return (
      <form onSubmit={handleAvisSubmit} className="php-email-form">
          <div className="row">
              <div className="col-md-4 form-group">
                  <input
                      type="text"
                      name="commentaire"
                      className="form-control"
                      id="avis"
                      placeholder="Partagez avec nous votre avis"
                      value={avisData.commentaire}
                      onChange={handleAvisChange}
                      required
                      minLength="4"
                  />
                  <div className="validate" />
              </div>
              <div className="col-md-4 form-group">
                  <input
                      type="date"
                      name="date"
                      className="form-control"
                      id="date"
                      value={avisData.date}
                      onChange={handleAvisChange}
                      readOnly
                  />
                  <div className="validate" />
              </div>
          </div>
          <div className="text-center">
              <button type="submit">Envoyer</button>
          </div>
      </form>
  );
}

export default Avisform;
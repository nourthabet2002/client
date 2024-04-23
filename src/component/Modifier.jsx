
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modifier = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Fetch clients from the backend
    axios.get('http://localhost:7000/client')
      .then(response => {
        setClients(response.data);
      })
      .catch(error => {
        console.error('Error fetching clients:', error);
      });
  }, []);

  return (
    <div>
      <h2>Client List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Numéro de téléphone</th>
            <th>Adresse</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client._id}>
              <td>{client._id}</td>
              <td>{client.nom}</td>
              <td>{client.prénom}</td>
              <td>{client.email}</td>
              <td>{client.numtel}</td>
              <td>{client.adresse}</td>
              <td>
                <UpdateClientForm client={client} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const UpdateClientForm = ({ client }) => {
  const [formData, setFormData] = useState({
    nom: client.nom,
    prénom: client.prénom,
    email: client.email,
    numtel: client.numtel,
    adresse: client.adresse
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:7000/client/${client._id}`, formData);
      console.log('Client updated successfully');
      // Optionally, you can update the client list or show a success message
    } catch (error) {
      console.error('Error updating client:', error);
      // Handle error: show error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
      </label>
      <label>
        Prénom:
        <input type="text" name="prénom" value={formData.prénom} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Numéro de téléphone:
        <input type="tel" name="numtel" value={formData.numtel} onChange={handleChange} />
      </label>
      <label>
        Adresse:
        <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} />
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

export default Modifier;


// import React, { useState } from 'react';
// import axios from 'axios';

// const Modifier = () => {
//   const [formData, setFormData] = useState({
//     nom: '',
//     prénom: '',
//     email: '',
//     numtel: '',
//     adresse: ''
//   });
//   const [client, setClient] = useState(null);
//   const [error, setError] = useState('');

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleGetClient = async () => {
//     try {
//       const response = await axios.get(`http://localhost:7000/client/${formData.email}`);
//       setClient(response.data);
//       setError('');
//     } catch (error) {
//       setClient(null);
//       setError('Client not found');
//     }
//   };

//   const handleUpdateClient = async () => {
//     try {
//       await axios.put(`http://localhost:7000/client/${client._id}`, formData);
//       console.log('Client updated successfully');
//     } catch (error) {
//       console.error('Error updating client:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Modifier Client</h2>
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </label>
//       <button onClick={handleGetClient}>Envoyer</button>
//       {error && <p>{error}</p>}
//       {client && (
//         <form>
//           <label>
//             Nom:
//             <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
//           </label>
//           <label>
//             Prénom:
//             <input type="text" name="prénom" value={formData.prénom} onChange={handleChange} />
//           </label>
//           <label>
//             Numéro de téléphone:
//             <input type="tel" name="numtel" value={formData.numtel} onChange={handleChange} />
//           </label>
//           <label>
//             Adresse:
//             <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} />
//           </label>
//           <button type="button" onClick={handleUpdateClient}>Mise à jour</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Modifier;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Modifier = () => {
//   const [formData, setFormData] = useState({
//     id: '',
//     nom: '',
//     prénom: '',
//     email: '',
//     password: '',
//     numtel: '',
//     adresse: ''
//   });

//   useEffect(() => {
//     // Fetch client data from the front port 7000 or your desired endpoint
//     axios.get('http://localhost:7000/client/{client_id}')
//       .then(response => {
//         const clientData = response.data;
//         setFormData({
//           id: clientData.id,
//           nom: clientData.nom,
//           prénom: clientData.prénom,
//           email: clientData.email,
//           password: clientData.password,
//           numtel: clientData.numtel,
//           adresse: clientData.adresse
//         });
//       })
//       .catch(error => {
//         console.error('Error fetching client data:', error);
//       });
//   }, []);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:7000/client/${formData.id}`, formData);
//       console.log('Client updated successfully:', response.data);
//       // Optionally, you can redirect the user or show a success message
//     } catch (error) {
//       console.error('Error updating client:', error);
//       // Handle error: show error message to the user
//     }
//   };

//   return (
//     <div>
//       <h2>Update Client</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Nom:
//           <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
//         </label>
//         <label>
//           Prénom:
//           <input type="text" name="prénom" value={formData.prénom} onChange={handleChange} />
//         </label>
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         </label>
//         <label>
//           Password:
//           <input type="password" name="password" value={formData.password} onChange={handleChange} />
//         </label>
//         <label>
//           Numéro de téléphone:
//           <input type="tel" name="numtel" value={formData.numtel} onChange={handleChange} />
//         </label>
//         <label>
//           Adresse:
//           <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} />
//         </label>
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default Modifier;

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



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Modifier = ({ email }) => {
//   const [client, setClient] = useState(null);
//   const [formData, setFormData] = useState({
//     nom: '',
//     prénom: '',
//     numtel: '',
//     adresse: ''
//   });

//   useEffect(() => {
//     // Fetch client data based on the logged-in user's email
//     axios.get(`http://localhost:7000/client?email=${email}`)
//       .then(response => {
//         if (response.data.length > 0) {
//           setClient(response.data[0]);
//           setFormData({
//             nom: response.data[0].nom,
//             prénom: response.data[0].prénom,
//             numtel: response.data[0].numtel,
//             adresse: response.data[0].adresse
//           });
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching client data:', error);
//       });
//   }, [email]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:7000/client/${client._id}`, formData);
//       console.log('Client updated successfully');
//       // Optionally, you can show a success message or update the client data
//     } catch (error) {
//       console.error('Error updating client:', error);
//       // Handle error: show error message to the user
//     }
//   };

//   if (!client) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Modifier Client</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Nom:
//           <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
//         </label>
//         <label>
//           Prénom:
//           <input type="text" name="prénom" value={formData.prénom} onChange={handleChange} />
//         </label>
//         <label>
//           Numéro de téléphone:
//           <input type="tel" name="numtel" value={formData.numtel} onChange={handleChange} />
//         </label>
//         <label>
//           Adresse:
//           <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} />
//         </label>
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default Modifier;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Modifier = () => {
//   const [client, setClient] = useState(null);
//   const [formData, setFormData] = useState({
//     nom: '',
//     prénom: '',
//     numtel: '',
//     adresse: ''
//   });

//   useEffect(() => {
//     // Fetch user's email from local storage or any other means of authentication
//     const userEmail = localStorage.getItem('userEmail'); // Assuming you store the email in localStorage
//     if (userEmail) {
//       // Fetch client data based on the user's email
//       axios.get(`http://localhost:7000/client?email=${userEmail}`)
//         .then(response => {
//           if (response.data.length > 0) {
//             setClient(response.data[0]);
//             setFormData({
//               nom: response.data[0].nom,
//               prénom: response.data[0].prénom,
//               numtel: response.data[0].numtel,
//               adresse: response.data[0].adresse
//             });
//           }
//         })
//         .catch(error => {
//           console.error('Error fetching client data:', error);
//         });
//     }
//   }, []);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:7000/client/${client._id}`, formData);
//       console.log('Client updated successfully');
//       // Optionally, you can show a success message or update the client data
//     } catch (error) {
//       console.error('Error updating client:', error);
//       // Handle error: show error message to the user
//     }
//   };

//   if (!client) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Modifier Client</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Nom:
//           <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
//         </label>
//         <label>
//           Prénom:
//           <input type="text" name="prénom" value={formData.prénom} onChange={handleChange} />
//         </label>
//         <label>
//           Numéro de téléphone:
//           <input type="tel" name="numtel" value={formData.numtel} onChange={handleChange} />
//         </label>
//         <label>
//           Adresse:
//           <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} />
//         </label>
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default Modifier;

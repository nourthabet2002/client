
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Modifier = () => {
//   const [clients, setClients] = useState([]);

//   useEffect(() => {
//     // Fetch clients from the backend
//     axios.get('http://localhost:7000/client')
//       .then(response => {
//         setClients(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching clients:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Client List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Nom</th>
//             <th>Prénom</th>
//             <th>Email</th>
//             <th>Numéro de téléphone</th>
//             <th>Adresse</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {clients.map(client => (
//             <tr key={client._id}>
//               <td>{client._id}</td>
//               <td>{client.nom}</td>
//               <td>{client.prénom}</td>
//               <td>{client.email}</td>
//               <td>{client.numtel}</td>
//               <td>{client.adresse}</td>
//               <td>
//                 <UpdateClientForm client={client} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const UpdateClientForm = ({ client }) => {
//   const [formData, setFormData] = useState({
//     nom: client.nom,
//     prénom: client.prénom,
//     email: client.email,
//     numtel: client.numtel,
//     adresse: client.adresse
//   });

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
//       // Optionally, you can update the client list or show a success message
//     } catch (error) {
//       console.error('Error updating client:', error);
//       // Handle error: show error message to the user
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Nom:
//         <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
//       </label>
//       <label>
//         Prénom:
//         <input type="text" name="prénom" value={formData.prénom} onChange={handleChange} />
//       </label>
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </label>
//       <label>
//         Numéro de téléphone:
//         <input type="tel" name="numtel" value={formData.numtel} onChange={handleChange} />
//       </label>
//       <label>
//         Adresse:
//         <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} />
//       </label>
//       <button type="submit">Update</button>
//     </form>
//   );
// };

// export default Modifier;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { Navigate } from 'react-router-dom';

const storedId = localStorage.getItem('clientId');

const Modifier = () => {
    const [email, setEmail] = useState(localStorage.getItem('clientEmail') || '');
    const [password, setPassword] = useState(localStorage.getItem('clientPassword') || '');
    const [numtel, setNumtel] = useState(localStorage.getItem('clientNumtel') || '');
    const [adresse, setAdresse] = useState(localStorage.getItem('clientAdresse') || '');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newNumtel, setNewNumtel] = useState('');
    const [newAdresse, setNewAdresse] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const storedId = localStorage.getItem('clientId');
        const storedEmail = localStorage.getItem('clientEmail');
        const storedPassword = localStorage.getItem('clientPassword');
        const storedNumtel = localStorage.getItem('clientNumtel');
        const storedAdresse = localStorage.getItem('clientAdresse');

        if (storedEmail && storedPassword && storedNumtel && storedAdresse) {
            setEmail(storedEmail);
            setPassword(storedPassword);
            setNumtel(storedNumtel);
            setAdresse(storedAdresse);
        }
    }, []);

    const handleModify = () => {
        setIsEditMode(true);
        setNewEmail('');
        setNewPassword('');
        setNewNumtel('');
        setNewAdresse('');
    };

    const handleSave = async () => {
        try {
            const res = await axios.put("http://localhost:7000/updateUser", {
                id: storedId,
                email: newEmail || email,
                password: newPassword || password,
                numtel: newNumtel || numtel,
                adresse: newAdresse || adresse
            });

            console.log("User updated:", res.data);
            setError(null); // Clear any previous errors
            setIsEditMode(false);

            // Update local storage with new values
            localStorage.setItem('clientEmail', newEmail || email);
            localStorage.setItem('clientPassword', newPassword || password);
            localStorage.setItem('clientNumtel', newNumtel || numtel);
            localStorage.setItem('clientAdresse', newAdresse || adresse);
        } catch (error) {
            console.error("Error updating user:", error);
            setError("Error updating user. Please try again."); // Set error state
            setIsEditMode(false);
        }
        window.location.reload(); 
    };

    return (
        <div style={{ marginTop: '250px', border: '4px solid black', width:"500px" , margin: "200px auto" }}>
            <h1>Bienvenue</h1>
            {!isEditMode ? (
                <div >
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Numéro de téléphone: {numtel}</p>
                    <p>Adresse: {adresse}</p>
                    <button onClick={handleModify}>Modifier</button>
                </div>
            ) : (
                <div>
                    <label>
                        New Email:
                        <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        New Password:
                        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Numéro de téléphone:
                        <input type="text" value={newNumtel} onChange={(e) => setNewNumtel(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Adresse:
                        <input type="text" value={newAdresse} onChange={(e) => setNewAdresse(e.target.value)} />
                    </label>
                    <br />
                    {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
                    <button onClick={handleSave}>Save</button>
                </div>
            )}
        </div>
    );
};

export default Modifier;





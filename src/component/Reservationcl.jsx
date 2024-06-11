// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Reservationcl() {
//     const [reservations, setReservations] = useState([]);
//     const [projects, setProjects] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchReservationsAndProjects = async () => {
//             try {
//                 const userId = localStorage.getItem('clientId');
//                 if (!userId) {
//                     console.error('User ID is not set in localStorage.');
//                     return;
//                 }
//                 const resReservations = await axios.post(`http://localhost:7000/resclientcl`, { userId });
//                 const resProjects = await axios.post(`http://localhost:7000/projetcl`, { userId });
//                 setReservations(resReservations.data);
//                 setProjects(resProjects.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 setError(error.message);
//                 setLoading(false);
//             }
//         };
//         fetchReservationsAndProjects();
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div style={styles.container}>
//             <div style={styles.section}>
//                 <h2 style={styles.header}>Vos Reservations</h2>
//                 <ul style={styles.list}>
//                     {reservations.map(reservation => (
//                         <li key={reservation._id} style={styles.listItem}>
//                             {reservation.lieu} le {reservation.date}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <div style={styles.section}>
//                 <h2 style={styles.header}>Vos Projets</h2>
//                 <ul style={styles.list}>
//                     {projects.map(project => (
//                         <li key={project._id} style={styles.listItem}>
//                             {project.lieu} de {project.datedebut} catégorie {project.categorieId.name}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         padding: '20px',
//         margin: '200px auto',
//         maxWidth: '600px',
//         backgroundColor: '#f0f0f0',
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
//     },
//     section: {
//         marginBottom: '20px'
//     },
//     header: {
//         borderBottom: '2px solid #333',
//         paddingBottom: '10px',
//         color: '#333',
//         fontSize: '24px'
//     },
//     list: {
//         listStyleType: 'none',
//         padding: 0
//     },
//     listItem: {
//         backgroundColor: '#fff',
//         padding: '10px 15px',
//         margin: '5px 0',
//         borderRadius: '5px',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
//     },
//     loading: {
//         textAlign: 'center',
//         fontSize: '18px',
//         color: '#666'
//     },
//     error: {
//         color: 'red',
//         textAlign: 'center',
//         fontSize: '18px'
//     }
// };

// export default Reservationcl;
import React, { useState, useEffect } from "react";
import axios from "axios";

function Reservationcl() {
    const [reservations, setReservations] = useState([]);
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userId = localStorage.getItem('clientId');
                if (!userId) {
                    console.error('User ID is not set in localStorage.');
                    return;
                }
                const [resReservations, resProjects, resCategories] = await Promise.all([
                    axios.post(`http://localhost:7000/resclientcl`, { userId }),
                    axios.post(`http://localhost:7000/projetcl`, { userId }),
                    axios.get(`http://localhost:7000/categorie`) // Fetching categories
                ]);
                setReservations(resReservations.data);
                setProjects(resProjects.data);
                setCategories(resCategories.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const getCategoryName = (id) => {
        const category = categories.find(cat => cat._id === id);
        return category ? category.name : 'Unknown Category';
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={styles.container}>
            <div style={styles.section}>
                <h2 style={styles.header}>Vos Reservations</h2>
                <ul style={styles.list}>
                    {reservations.map(reservation => (
                        <li key={reservation._id} style={styles.listItem}>
                            {reservation.adresse} le {reservation.date} catégorie {getCategoryName(reservation.categorieId)}
                        </li>
                    ))}
                </ul>
            </div>
            <div style={styles.section}>
                <h2 style={styles.header}>Vos Projets</h2>
                <ul style={styles.list}>
                    {projects.map(project => (
                        <li key={project._id} style={styles.listItem}>
                            {project.adresse} de {project.datedebut} catégorie {getCategoryName(project.categorieId)} etat{project.etat}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        margin: '200px auto',
        maxWidth: '600px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    section: {
        marginBottom: '20px'
    },
    header: {
        borderBottom: '2px solid #333',
        paddingBottom: '10px',
        color: '#333',
        fontSize: '24px'
    },
    list: {
        listStyleType: 'none',
        padding: 0
    },
    listItem: {
        backgroundColor: '#fff',
        padding: '10px 15px',
        margin: '5px 0',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
    },
    loading: {
        textAlign: 'center',
        fontSize: '18px',
        color: '#666'
    },
    error: {
        color: 'red',
        textAlign: 'center',
        fontSize: '18px'
    }
};

export default Reservationcl;


                       

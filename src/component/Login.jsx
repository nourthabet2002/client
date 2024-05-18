// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle the login logic, like sending a request to your backend
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // You can also navigate to another page after successful login
//     // Example: navigate('/dashboard');
//   };

//   return (
//     <div className='login'>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;




// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import { useNavigate, Link } from "react-router-dom"


// function Login() {

//     const history=useNavigate();

//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')

//     async function submit(e){
//         e.preventDefault();

//         try{

//             await axios.post("http://localhost:7000/",{
//                 email,password
//             })
//             .then(res=>{
//                 if(res.data=="exist"){
//                     history("/home",{state:{id:email}})
//                 }
//                 else if(res.data=="notexist"){
//                     alert("User have not sign up")
//                 }
//             })
//             .catch(e=>{
//                 alert("wrong details")
//                 console.log(e);
//             })

//         }
//         catch(e){
//             console.log(e);

//         }

//     }


//     return (
//         <div className="login">

//             <h1>Login</h1>

//             <form action="POST">
//                 <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
//                 <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
//                 <input type="submit" onClick={submit} />

//             </form>

//             <br />
//             <p>OR</p>
//             <br />

//             <Link to="/signup">Signup Page</Link>

//         </div>
//     )
// }

// export default Login
// Import necessary dependencies
// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// function Login() {
//     const history = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     async function submit(e) {
//         e.preventDefault();

//         try {
//             const res = await axios.post("http://localhost:7000/", { email, password });

//             if (res.data === "exist") {
//                 // Navigate to both Header and Naviger components
//                 history("/header");
//                 history("/naviger");
//             } else if (res.data === "notexist") {
//                 alert("User have not signed up");
//             }
//         } catch (e) {
//             alert("Wrong details");
//             console.log(e);
//         }
//     }

//     return (
//         <div className="login">
//             <h1>Login</h1>
//             <form onSubmit={submit}>
//                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//                 <input type="submit" value="Login" />
//             </form>
//             <br />
//             <p>OR</p>
//             <br />
//             <Link to="/Signup">Signup Page</Link>
//         </div>
//     );
// }

// export default Login;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';

function Login() {
    const navigate = useNavigate(); // Using navigate from useNavigate hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [numtel, setNumtel] = useState('');
    const [adresse, setAdresse] = useState('');
    const [nom, setNom] = useState('');


    useEffect(() => {
        const storedNom = localStorage.getItem('clientNom');
        if (storedNom) {
            setNom(storedNom);
            console.log("Nom value set:", storedNom); // Log the nom value after setting
        }
    }, []);




    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:7000/", { email, password });
            console.log('Server response:', res.data);

            if (res.data.status === "exist") {
                console.log('User exists. Storing email, password, numtel, and adresse in local storage...');
                setEmail(res.data.email);
                setPassword(res.data.password);
                setNumtel(res.data.numtel); // Store numtel in state
                setAdresse(res.data.adresse); // Store adresse in state
                setNom(res.data.nom);
                // Store in localStorage as well if needed
                localStorage.setItem('clientId', res.data.id);
                localStorage.setItem('clientEmail', res.data.email);
                localStorage.setItem('clientPassword', res.data.password);
                localStorage.setItem('clientNumtel', res.data.numtel); // Store numtel
                localStorage.setItem('clientAdresse', res.data.adresse); // Store
                localStorage.setItem('clientNom', res.data.nom);
                console.log("Data stored in state and localStorage:", {
                    email: res.data.email,
                    password: res.data.password,
                    numtel: res.data.numtel,
                    adresse: res.data.adresse,
                    nom: res.data.nom
                });
                navigate("/headercl_and_navigercl");
            } else if (res.data.status === "notexist") {
                alert("User has not signed up");
            }
        } catch (e) {
            alert("Wrong details");
            console.log(e);
        }
    }
    const Navigercl = ({ nom }) => (
        <div>
            <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
                value={nom}
                onChange={(e) => {}} 
            />
            {/* Other content of the Navigercl component */}
        </div>
    );

    return (
        <div style={{ marginTop: '200px', border: '4px solid black', width:"450px" , margin: "0 auto" ,marginBottom:"15000px", padding:"5px"}}>
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                {/* <Navigercl nom={nom} /> */}
                <input type="submit" value="Login" />
            </form>
            <br />
            <p>OR</p>
            <br />
            <Link to="/Signup">Signup Page</Link>
        </div>
    </div>
    );
}

export default Login;
// return (
//     <div className="login-container"> {/* Added className */}
//         <h1 className="login-title">Login</h1> {/* Added className */}
//         <form className="login-form" onSubmit={submit}> {/* Added className */}
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="login-input" /> {/* Added className */}
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="login-input" /> {/* Added className */}
//             <input type="submit" value="Login" className="login-submit-btn" /> {/* Added className */}
//         </form>
//         <br />
//         <p className="login-or">OR</p> {/* Added className */}
//         <br />
//         <Link to="/Signup" className="login-signup-link">Signup Page</Link> {/* Added className */}
//     </div>
// );
// }

// export default Login;

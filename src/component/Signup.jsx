// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// function Signup() {
//     const history = useNavigate();

//     const [nom, setNom] = useState("");
//     const [prenom, setPrenom] = useState("");
//     const [numtel, setNumtel] = useState("");
//     const [adresse, setAdresse] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     async function submit(e) {
//         e.preventDefault();

//         try {
//             const res = await axios.post("http://localhost:7000/signup", {
//                 nom,
//                 prenom,
//                 numtel,
//                 adresse,
//                 email,
//                 password,
//             });

//             if (res.data === "exist") {
//                 setError("User already exists");
//             } else if (res.data === "notexist") {
//                 history("/naviger", { state: { id: email } });
//             }
//         } catch (e) {
//             setError("Something went wrong");
//             console.error(e);
//         }
//     }

//     return (
//         <div className="login">
//             <h1>Signup</h1>
//             <form onSubmit={submit}>
//                 <input
//                     type="text"
//                     value={nom}
//                     onChange={(e) => setNom(e.target.value)}
//                     placeholder="Nom"
//                 />
//                 <input
//                     type="text"
//                     value={prenom}
//                     onChange={(e) => setPrenom(e.target.value)}
//                     placeholder="Prénom"
//                 />
//                 <input
//                     type="text"
//                     value={numtel}
//                     onChange={(e) => setNumtel(e.target.value)}
//                     placeholder="Numéro de téléphone"
//                 />
//                 <input
//                     type="text"
//                     value={adresse}
//                     onChange={(e) => setAdresse(e.target.value)}
//                     placeholder="Adresse"
//                 />
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Email"
//                 />
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                 />
//                 <input type="submit" value="Submit" />
//             </form>
//             {error && <p>{error}</p>}
//             <br />
//             <p>OR</p>
//             <br />
//             <Link to="/">Login Page</Link>
//         </div>
//     );
// }

// export default Signup;








// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import { useNavigate, Link } from "react-router-dom"


// function Signup() {
//     const history=useNavigate();

//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')

//     async function submit(e){
//         e.preventDefault();

//         try{

//             await axios.post("http://localhost:7000/signup",{
//                 email,password
//             })
//             .then(res=>{
//                 if(res.data=="exist"){
//                     alert("User already exists")
//                 }
//                 else if(res.data=="notexist"){
//                     history("/home",{state:{id:email}})
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

//             <h1>Signup</h1>

//             <form action="POST">
//                 <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
//                 <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
//                 <input type="submit" onClick={submit} />

//             </form>

//             <br />
//             <p>OR</p>
//             <br />

//             <Link to="/">Login Page</Link>

//         </div>
//     )
// }

// export default Signup


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// function Signup() {
//     const history = useNavigate();

//     const [nom, setNom] = useState("");
//     const [prenom, setPrenom] = useState("");
//     const [numtel, setNumtel] = useState("");
//     const [adresse, setAdresse] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     async function submit(e) {
//         e.preventDefault();

//         try {
//             const res = await axios.post("http://localhost:7000/signup", {
//                 nom,
//                 prenom, // Corrected field name
//                 numtel,
//                 adresse,
//                 email,
//                 password,
//             });

//             if (res.data === "exist") {
//                 setError("User already exists");
//             } else if (res.data === "notexist") {
//                 history("/naviger", { state: { id: email } });
//             }
//         } catch (e) {
//             setError("Something went wrong");
//             console.error(e);
//         }
//     }

//     return (
//         <div className="login">
//             <h1>Signup</h1>
//             <form onSubmit={submit}>
//                 <input
//                     type="text"
//                     value={nom}
//                     onChange={(e) => setNom(e.target.value)}
//                     placeholder="Nom"
//                 />
//                 <input
//                     type="text"
//                     value={prenom}
//                     onChange={(e) => setPrenom(e.target.value)}
//                     placeholder="Prénom"
//                 />
//                 <input
//                     type="text"
//                     value={numtel}
//                     onChange={(e) => setNumtel(e.target.value)}
//                     placeholder="Numéro de téléphone"
//                 />
//                 <input
//                     type="text"
//                     value={adresse}
//                     onChange={(e) => setAdresse(e.target.value)}
//                     placeholder="Adresse"
//                 />
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Email"
//                 />
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                 />
//                 <input type="submit" value="Submit" />
//             </form>
//             {error && <p>{error}</p>}
//             <br />
//             <p>OR</p>
//             <br />
//             <Link to="/">Login Page</Link>
//         </div>
//     );
// }

// export default Signup;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const history = useNavigate();

    const [nom, setNom] = useState("");
    const [prénom, setPrénom] = useState(""); // Using prénom instead of prenom
    const [numtel, setNumtel] = useState("");
    const [adresse, setAdresse] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:7000/signup", {
                nom,
                prénom, // Sending prénom to backend
                numtel,
                adresse,
                email,
                password,
            });

            if (res.data === "exist") {
                setError("User already exists");
            } else if (res.data === "notexist") {
                history("/naviger", { state: { id: email } });
            }
        } catch (e) {
            setError("Something went wrong");
            console.error(e);
        }
    }

    return (
        <div className="login">
            <h1>Signup</h1>
            <form onSubmit={submit}>
                <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Nom"
                />
                <input
                    type="text"
                    value={prénom}
                    onChange={(e) => setPrénom(e.target.value)} // Setting prénom
                    placeholder="Prénom"
                />
                <input
                    type="text"
                    value={numtel}
                    onChange={(e) => setNumtel(e.target.value)}
                    placeholder="Numéro de téléphone"
                />
                <input
                    type="text"
                    value={adresse}
                    onChange={(e) => setAdresse(e.target.value)}
                    placeholder="Adresse"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <input type="submit" value="Submit" />
            </form>
            {error && <p>{error}</p>}
            <br />
            <p>OR</p>
            <br />
            <Link to="/">Login Page</Link>
        </div>
    );
}

export default Signup;

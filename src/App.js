import "./App.css";
import Header from "./component/Header";
import Naviger from "./component/Naviger";
// import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route, Link,Navigate } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Headercl from "./component/Headercl";
import Modifier from "./component/Modifier";
import Navigercl from "./component/Navigercl";


export function onEnter(nextState, transition, callback) {
  console.log("test");
  const { pathname } = nextState.location;
  const isLoggedIn = localStorage.getItem('clientNom') !== null; // Check if clientId exists in localStorage
  if (pathname === '/' && isLoggedIn) {
    transition('/headercl_and_navigercl'); // Redirect to Home component
  }
  return callback(); // Continue with the navigation
}



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Naviger />} onEnter={onEnter} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/headercl_and_navigercl" element={<div><Headercl /><Navigercl /></div>} />
            <Route path="/Modifier" element={<Modifier />} />
          </Routes>
        </div>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

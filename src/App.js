import "./App.css";
import Header from "./component/Header";
import Naviger from "./component/Naviger";
// import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./component/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Naviger />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

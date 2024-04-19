// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import All from './All';
import Cybersecurity from './Cybersecurity';
import Datascience from './Datascience';
import Fullstackdevelopment from './Fullstackdevelopment';
import Career from './Career';

function App() {
  const [imageVisibility, setImageVisibility] = useState({
    all: true,
    fullstackdevelopment: true,
    datascience: true,
    cybersecurity: true,
    career: true,
  });

  const handleLinkClick = (category) => {
    // Set the visibility of the clicked category to true
    setImageVisibility((prevVisibility) => ({
      ...prevVisibility,
      [category.toLowerCase()]: true,
    }));
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Router>
      <div className="container" style={containerStyle}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/All" className="navbar-brand">
              All
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/Fullstackdevelopment"
                    className="nav-link"
                    onClick={() => handleLinkClick('Fullstackdevelopment')}
                  >
                    FULL STACK DEVELOPMENT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Datascience"
                    className="nav-link"
                    onClick={() => handleLinkClick('Datascience')}
                  >
                    DATA SCIENCE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Cybersecurity"
                    className="nav-link"
                    onClick={() => handleLinkClick('Cybersecurity')}
                  >
                    CYBER SECURITY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Career" className="nav-link">
                    CAREER
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<All visible={imageVisibility.all} />} />
        <Route path="/All" element={<All visible={imageVisibility.all} />} />
        <Route
          path="/Fullstackdevelopment"
          element={<Fullstackdevelopment visible={imageVisibility.fullstackdevelopment} />}
        />
        <Route path="/Datascience" element={<Datascience visible={imageVisibility.datascience} />} />
        <Route
          path="/Cybersecurity"
          element={<Cybersecurity visible={imageVisibility.cybersecurity} />}
        />
        <Route path="/Career" element={<Career visible={imageVisibility.career} />} />
      </Routes>
    </Router>
  );
}

export default App;

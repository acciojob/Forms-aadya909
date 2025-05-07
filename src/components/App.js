import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '20px' }}>
        <Link id="form-link" to="/">Form</Link> | 
        <Link id="form-ref-link" to="/form-ref">Form with useRef</Link> | 
        <Link id="form-state-link" to="/form-state">Form with useState</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form-ref" element={<FormRef />} />
        <Route path="/form-state" element={<FormState />} />
      </Routes>
    </Router>
  );
}

export default App;



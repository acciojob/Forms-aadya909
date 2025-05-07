import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/form" id="form-link">Form</Link></li>
            <li><Link to="/form-ref" id="form-ref-link">Form Ref</Link></li>
            <li><Link to="/form-state" id="form-state-link">Form State</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/form" component={Form} />
          <Route path="/form-ref" component={FormRef} />
          <Route path="/form-state" component={FormState} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;




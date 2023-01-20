import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './fns/scroll';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);

// ReactDOM.render(<App />, document.getElementById('root'))
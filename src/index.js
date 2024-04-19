// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
  
//       <App />
   
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming App is your root component

const root = document.getElementById('root');

// Update ReactDOM.render to use createRoot
const rootElement = ReactDOM.createRoot(root);
rootElement.render(<App />);

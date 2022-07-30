import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter }  from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <PhotoUploader /> */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

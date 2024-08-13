import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import Result from './Result';
import Header from './Header';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoreResults from './MoreResults';
import Login from './Login';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/result" element={<Result />} />
        <Route path="/moreResults" element={<MoreResults />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

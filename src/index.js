import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import Navbar from './Navbar';

const navbar = ReactDOM.createRoot(document.getElementById('navbar'));
navbar.render(<Navbar />);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
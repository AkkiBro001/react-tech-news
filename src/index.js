import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';


const root = createRoot(document.getElementById('root'))
root.render(
    <App/>
);
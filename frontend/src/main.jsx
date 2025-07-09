import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router'; // ← fixed here
import {Toaster} from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster /> {/* 👈 This is what actually displays the toast */}
    </BrowserRouter>
  </StrictMode>
);

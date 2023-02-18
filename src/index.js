import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import './assets/styles/reset.css';
import './assets/fonts/fonts.css';
import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

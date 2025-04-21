import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 👈 Importamos BrowserRouter
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/EcoSwap"> {/* 👈 basename agregado */}
    <App />
  </BrowserRouter>
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router'
import CV from './pages/CV.tsx';
import GrandadSermons from './pages/GrandadSermons.tsx';
import Home from './pages/Home.tsx';
import SoftwareProjects from './pages/SoftwareProjects.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/grandadssermons" element={<GrandadSermons />} />
        <Route path="/projects" element={<SoftwareProjects />} />
      </Routes>
    </App>
    </BrowserRouter>
  </StrictMode>,
)

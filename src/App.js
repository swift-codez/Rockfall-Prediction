
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { FaBars, FaTimes } from 'react-icons/fa';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Mode from './pages/Mode';
import AlertSystem from './pages/AlertSystem';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="App">
        <Sidebar isOpen={isSidebarOpen} />
        <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/mode" element={<Mode />} />
            <Route path="/alerts" element={<AlertSystem />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

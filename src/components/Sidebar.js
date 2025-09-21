import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import {
  FaTachometerAlt,
  FaCog,
  FaChartBar,
  FaBell,
  FaExchangeAlt,
} from 'react-icons/fa';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h3>Rockfall FX</h3>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/" className="nav-item" end>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/mode" className="nav-item">
          <FaExchangeAlt />
          <span>Mode</span>
        </NavLink>
        <NavLink to="/alerts" className="nav-item">
          <FaBell />
          <span>Alert System</span>
        </NavLink>
        <NavLink to="/reports" className="nav-item">
          <FaChartBar />
          <span>Reports</span>
        </NavLink>
        <NavLink to="/settings" className="nav-item">
          <FaCog />
          <span>Settings</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
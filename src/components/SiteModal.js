
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './SiteModal.css';

const SiteModal = ({ site, onClose }) => {
  if (!site) return null;

  const chartData = site.data.history.map((value, index) => ({
    time: index,
    probability: value,
  }));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Site: {site.name}</h2>
        <p>Current Risk Probability: {site.data.history[site.data.history.length - 1]}</p>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" label={{ value: 'Time Index', position: 'insideBottom', offset: -5 }} />
              <YAxis label={{ value: 'Probability', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="probability" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SiteModal;

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './TopPerformersChart.css';

const TopPerformersChart = ({ data }) => {
  return (
    <div className="top-performers-container">
      <h3 className="chart-heading">Darkstore's Performance</h3>
      
      <div className="chart-placeholder">
        <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="efficiency" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopPerformersChart;

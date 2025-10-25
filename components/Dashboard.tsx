
import React from 'react';
import type { Kpi } from '../types';

interface DashboardProps {
  kpis: Kpi[];
}

const Dashboard: React.FC<DashboardProps> = ({ kpis }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">Dashboard de Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <div key={index} className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="bg-slate-700 p-3 rounded-full">
                 <i className={`${kpi.icon} text-cyan-400 text-2xl`}></i>
              </div>
              <div>
                <p className="text-gray-400 text-sm">{kpi.label}</p>
                <p className="text-3xl font-bold text-white">{kpi.value}</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-3">{kpi.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

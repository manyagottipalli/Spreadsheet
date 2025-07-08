// BottomTabs.tsx
import React from 'react';
import { TabName } from './types';

interface Props {
  activeTab: TabName;
  setActiveTab: (tab: TabName) => void;
}

const tabs: TabName[] = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

const BottomTabs: React.FC<Props> = ({ activeTab, setActiveTab }) => (
  <div className="flex border-t border-gray-200 bg-white p-2 text-sm text-gray-600">
    {tabs.map((tab) => (
      <button
        key={tab}
        className={`px-4 py-2 rounded-md transition-colors duration-200 ${
          activeTab === tab ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-gray-100'
        }`}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default BottomTabs;

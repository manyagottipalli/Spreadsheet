import React, { useState } from 'react';
import { TabName } from './types';
import { dummyData } from './dummydata';
import TopNavBar from './NavBar';
import Toolbar from './Toolbar';
import OverviewGrid from './OverviewGrid';
import TableHeader from './TableHeader';
import DataRow from './DataRow';
import BottomTabs from './BottomTabs';

const SpreadsheetDesign: React.FC = () => {
  const [activeBottomTab, setActiveBottomTab] = useState<TabName>('All Orders');

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans">
      <TopNavBar />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex flex-col flex-1 bg-white">
          <Toolbar />
          <OverviewGrid />
          <TableHeader />
          <div className="flex-1 overflow-y-auto">
            {dummyData.map((row) => (
              <DataRow key={row.id} row={row} />
            ))}
            {/* Empty rows to fill up to 20 */}
            {Array.from({ length: 20 - dummyData.length }).map((_, index) => (
              <div
                key={`empty-${index + dummyData.length}`}
                className="grid grid-cols-[33px_1.5fr_1fr_1fr_1.2fr_1.5fr_1.2fr_0.8fr_1fr_1.2fr_0.5fr] border-b border-gray-200 hover:bg-gray-50 text-sm items-center"
              >
                <div className="p-2 text-gray-400 text-center">
                  {dummyData.length + index + 1}
                </div>
                <div className="p-2 border-l border-gray-200"></div>
                <div className="p-2 border-l border-gray-200"></div>
                <div className="p-2 border-l border-gray-200"></div>
                <div className="p-2 border-l border-gray-200"></div>
                <div className="p-2 border-l border-gray-200"></div>
                <div className="p-2 border-l border-gray-200"></div>
                <div className="p-2 border-l border-gray-200"></div>
                <div className="p-2 border-l border-gray-200"></div>
                <div className="p-2 border-l border-gray-200"></div>
                <div className="p-2 border-l border-gray-200"></div>
              </div>
            ))}
          </div>
          <BottomTabs activeTab={activeBottomTab} setActiveTab={setActiveBottomTab} />
        </main>
      </div>
    </div>
  );
};

export default SpreadsheetDesign;

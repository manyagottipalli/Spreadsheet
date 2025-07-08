// DataRow.tsx
import React from 'react';
import { SpreadsheetRow } from './types';
import StatusBadge from './StatusBadge';
import PriorityText from './PriorityText';

const DataRow: React.FC<{ row: SpreadsheetRow }> = ({ row }) => (
  <div className="grid grid-cols-[33px_1.5fr_1fr_1fr_1.2fr_1.5fr_1.2fr_0.8fr_1fr_1.2fr_0.5fr] border-b border-gray-200 hover:bg-gray-50 text-sm items-center">
    <div className="p-2 text-gray-700 font-medium text-center">{row.id}</div>
    <div className="p-2 border-l border-gray-200 text-gray-900 whitespace-normal">{row.jobRequest}</div>
    <div className="p-2 border-l border-gray-200 text-gray-700">{row.submitted}</div>
    <div className="p-2 border-l border-gray-200"><StatusBadge status={row.status} /></div>
    <div className="p-2 border-l border-gray-200 text-gray-700">{row.submitter}</div>
    <div className="p-2 border-l border-gray-200 text-blue-600 truncate">{row.url}</div>
    <div className="p-2 border-l border-gray-200 text-gray-700">{row.assigned}</div>
    <div className="p-2 border-l border-gray-200"><PriorityText priority={row.priority} /></div>
    <div className="p-2 border-l border-gray-200 text-gray-700">{row.dueDate}</div>
    <div className="p-2 border-l border-gray-200 text-gray-700">
      {row.estValue.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
    </div>
    <div className="p-2 flex items-center justify-center border-l border-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-400 hover:text-gray-700 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12h.01M12 12h.01M18 12h.01"
        />
      </svg>
    </div>
  </div>
);

export default DataRow;

// StatusBadge.tsx
import React from 'react';
import { SpreadsheetRow } from './types';

interface Props {
  status: SpreadsheetRow['status'];
}

const getStatusClasses = (status: SpreadsheetRow['status']) => {
  switch (status) {
    case 'In-process':
      return 'bg-blue-100 text-blue-800';
    case 'Need to start':
      return 'bg-yellow-100 text-yellow-800';
    case 'Complete':
      return 'bg-green-100 text-green-800';
    case 'Blocked':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-200 text-gray-800';
  }
};

const StatusBadge: React.FC<Props> = ({ status }) => (
  <span className={`px-3 py-0.5 rounded-full text-xs font-medium ${getStatusClasses(status)}`}>
    {status}
  </span>
);

export default StatusBadge;

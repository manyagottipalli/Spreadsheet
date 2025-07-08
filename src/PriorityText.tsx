// PriorityText.tsx
import React from 'react';
import { SpreadsheetRow } from './types';

interface Props {
  priority: SpreadsheetRow['priority'];
}

const getPriorityClasses = (priority: SpreadsheetRow['priority']) => {
  switch (priority) {
    case 'High':
      return 'text-red-600';
    case 'Medium':
      return 'text-orange-600';
    case 'Low':
      return 'text-blue-600';
    default:
      return 'text-gray-800';
  }
};

const PriorityText: React.FC<Props> = ({ priority }) => (
  <span className={`font-semibold ${getPriorityClasses(priority)}`}>{priority}</span>
);

export default PriorityText;

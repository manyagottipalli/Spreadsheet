import React from 'react';

const TopNavBar: React.FC = () => (
  <nav className="flex items-center justify-between p-3 bg-white border-b border-gray-200 shadow-sm">
    <div className="flex items-center space-x-4">
      <div className="flex items-center text-sm font-medium text-gray-700">
        <span>Workspace</span>
        <span className="mx-1 text-gray-400">/</span>
        <span>Folder 2</span>
        <span className="mx-1 text-gray-400">/</span>
        <span className="font-semibold text-gray-900">Spreadsheet 3</span>
        <button className="ml-2 text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search within sheet"
          className="pl-8 pr-3 py-1 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm placeholder-gray-500"
        />
        <svg
          className="w-4 h-4 text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div className="flex items-center space-x-4">
        <img
          src="https://placehold.co/30x30/FF6347/FFFFFF?text=JD"
          alt="User Avatar"
          className="w-8 h-8 rounded-full border border-gray-300"
        />
        <span className="text-sm font-medium text-gray-800">John Doe</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  </nav>
);

export default TopNavBar;

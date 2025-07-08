import React from 'react';

const OverviewGrid: React.FC = () => (
  <div className="grid grid-cols-[30px_1.5fr_1fr_1fr_1.2fr_1.5fr_1.2fr_0.8fr_1fr_1.2fr_0.5fr] items-center border-b border-gray-200">
    <div className="col-span-5 flex items-center space-x-2 text-sm text-gray-700 pl-3 py-3 bg-gray-100 h-full">
      <div className="flex items-center space-x-1 bg-gray-100 rounded-full px-2 py-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.724l-.212-.212M9.257 13.743l.212.212M14.828 10.172l-.212.212m-3.951-3.951l.212.212M12 21.5l-4-4m0 0l4-4m0 4l-4 4m0-4h14" />
        </svg>
        <span>Q3 Financial Overview</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 text-red-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.928c.677 0 1.282.32 1.637.818a1.272 1.272 0 01-.798 2.158l-.132-.016a1.272 1.272 0 01-1.614-.805L16.023 9.348zM12 16.5V20M12 4v3.5M4 16.5H2c-.677 0-1.282-.32-1.637-.818a1.272 1.272 0 01.798-2.158l.132-.016a1.272 1.272 0 011.614.805L4 16.5z"/>
        </svg>
      </div>
    </div>
    <div className="bg-white h-full flex items-center justify-center border-l border-gray-200"></div>
    <div className="bg-green-100 h-full flex items-center justify-center border-l border-gray-200">
      <button className="flex items-center space-x-1 px-3 py-1 rounded-md text-green-800 text-sm font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span>ABC</span>
      </button>
    </div>
    <div className="col-span-2 bg-blue-100 h-full flex items-center justify-center border-l border-gray-200">
      <button className="flex items-center space-x-1 px-3 py-1 rounded-md bg-blue-100 text-purple-800 text-sm font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z" />
        </svg>
        <span>Answer a question</span>
      </button>
    </div>
    <div className="bg-orange-100 h-full flex items-center justify-center border-l border-gray-200">
      <button className="flex items-center space-x-1 px-3 py-1 rounded-md bg-orange-100 text-orange-800 text-sm font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>Extract</span>
      </button>
    </div>
    <div className="bg-white h-full flex items-center justify-center border-l border-gray-200">
      <button className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-gray-100">
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  </div>
);

export default OverviewGrid;

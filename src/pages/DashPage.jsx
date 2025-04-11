import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import guardknobLogo from '../assets/guardknob.svg';

function DashPage() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="mb-8">
        <img src={guardknobLogo} className="h-32 hover:scale-110 transition-transform" alt="GuardKnob logo" />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">This will be the dash page</h2>
         
        <button
          onClick={() => navigate('/')}
          className="mt-4 w-full text-gray-600 hover:text-gray-800 text-sm transition-colors"
        >
          Back to Main Page (Home?)
        </button>
      </div>
    </div>
  );
}

export default DashPage;
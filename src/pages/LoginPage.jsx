import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import guardknobLogo from '../assets/guardknob.svg';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    if(username === 'admin' && password === 'password123'){
      console.log('Login Successful');
      navigate('/count2');
    }
    else{
      console.log('Login Failed');
      alert('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="mb-8">
        <img src={guardknobLogo} className="h-32 hover:scale-110 transition-transform" alt="GuardKnob logo" />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">LOGIN (IDK WHAT TO NAME IT FOR NOW) Dashboard Login??</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password 'show password' perchance"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
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

export default LoginPage;
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen">
      <form className="w-96 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2 text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block font-medium mb-2 text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600"
        >
          Login
        </button>
        <p className="text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <a href="#" className="text-indigo-500 hover:underline">
            Sign up
          </a>
        </p>
        <p className='text-sm text-gray-600 mt-4'>Back to <Link className='text-indigo-500 hover:underline' to="/">Home</Link></p>
      </form>
    </div>
    );
};

export default Login;
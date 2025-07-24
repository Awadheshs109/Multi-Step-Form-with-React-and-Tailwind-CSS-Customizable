import React from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { login } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = React.useState({ username: '', password: '' });
  const redirectPath = location.state?.from || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.username, form.password);
      navigate(redirectPath);
    } catch (error) {
      alert("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-8 ">
          Use <span className="font-semibold text-blue-600">emilys</span> as
          username and{" "}
          <span className="font-semibold text-blue-600">emilyspass</span> as
          password to check the application.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

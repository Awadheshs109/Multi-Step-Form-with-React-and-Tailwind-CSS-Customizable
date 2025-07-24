import React, { useEffect, useState } from "react";
import axiosInstance from "../API/axiosInstance";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get("/auth/me");
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return (
      <div className="text-center mt-10 font-semibold">Loading profile...</div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center space-x-4">
        <img
          src={user.image}
          alt={user.username}
          className="w-16 h-16 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-xl font-bold">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default Dashboard;

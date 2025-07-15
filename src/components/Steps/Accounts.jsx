import React from "react";

const Accounts = ({ formData, setFormData }) => {
  return (
    <div>
      <label className="block mb-2 font-semibold">Email *</label>
      <input
        type="email"
        className="border rounded p-2 w-full mb-4"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <label className="block mb-2 font-semibold">Password *</label>
      <input
        type="password"
        className="border rounded p-2 w-full"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
    </div>
  );
};

export default Accounts;

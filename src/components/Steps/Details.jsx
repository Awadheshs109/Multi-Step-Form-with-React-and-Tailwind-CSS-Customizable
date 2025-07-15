import React from "react";

const Details = ({ formData, setFormData }) => {
  return (
    <form autoComplete="on" className="space-y-4">
      <div>
        <label className="block mb-1 font-semibold">First Name *</label>
        <input
          type="text"
          name="given-name"
          autoComplete="given-name"
          className="border rounded-lg p-3 w-full"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Last Name *</label>
        <input
          type="text"
          name="family-name"
          autoComplete="family-name"
          className="border rounded-lg p-3 w-full"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Phone Number *</label>
        <input
          type="tel"
          name="tel"
          autoComplete="tel"
          className="border rounded-lg p-3 w-full"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Address *</label>
        <input
          type="text"
          name="street-address"
          autoComplete="street-address"
          className="border rounded-lg p-3 w-full"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">PIN Code *</label>
        <input
          type="text"
          name="postal-code"
          autoComplete="postal-code"
          className="border rounded-lg p-3 w-full"
          value={formData.pincode}
          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
        />
      </div>
    </form>
  );
};

export default Details;

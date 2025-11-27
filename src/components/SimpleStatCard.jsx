// src/components/SimpleStatCard.jsx
import React from "react";

const SimpleStatCard = ({ label, value }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-sm text-gray-600 mb-3">{label}</p>
      <h3 className="text-4xl font-bold text-gray-900">{value}</h3>
    </div>
  );
};

{
  /* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <SimpleStatCard label="Active Loans" value="18" />
  <SimpleStatCard label="Pending Applications" value="3" />
  <SimpleStatCard label="This Month Collection" value="₦234,500" />
</div>; */
}

export default SimpleStatCard;

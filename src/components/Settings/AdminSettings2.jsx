// src/components/settings/LoanOfficerManagement.jsx
import React, { useState } from "react";
import { Users } from "lucide-react";

const AdminSettings2 = () => {
  const [officers] = useState([
    {
      id: "L0001",
      name: "John Okafor",
      email: "john.okafor@charismfb.com",
      phone: "0809828282",
      idNumber: "L0001",
      branch: "Lagos Main",
      activeGroups: "8 Groups",
      status: "Active",
    },
    {
      id: "L0002",
      name: "John Okafor",
      email: "john.okafor@charismfb.com",
      phone: "0809828282",
      idNumber: "L0001",
      branch: "Lagos Main",
      activeGroups: "8 Groups",
      status: "Active",
    },
    {
      id: "L0003",
      name: "John Okafor",
      email: "john.okafor@charismfb.com",
      phone: "0809828282",
      idNumber: "L0001",
      branch: "Lagos Main",
      activeGroups: "8 Groups",
      status: "Active",
    },
  ]);

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-300 p-8">
      {/* Section Header */}
      <div className="flex items-start gap-3 mb-8 pb-4 border-b border-gray-200">
        <Users className="w-5 h-5 text-gray-800 mt-1" />
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Loan Officer Management
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Manage loan officers and their assignments
          </p>
        </div>
      </div>

      {/* Officers Grid - separated cards (show 3 per row on medium/large screens) */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {officers.map((officer) => (
          <div
            key={officer.id}
            className="bg-white rounded-lg shadow-md border border-gray-200 p-6 space-y-3"
          >
            {/* Officer Header */}
            <div className="mb-3 pb-3 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold text-gray-900">
                  Officer Details :
                </span>
                <span className="text-sm font-medium text-gray-900">
                  {officer.name}
                </span>
              </div>
            </div>

            {/* Officer Details */}
            <div className="space-y-2">
              {/* Email */}
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-gray-900">
                  Email :
                </span>
                <span className="text-sm text-gray-700">{officer.email}</span>
              </div>

              {/* Phone Number */}
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-gray-900">
                  Phone Number :
                </span>
                <span className="text-sm text-gray-700">{officer.phone}</span>
              </div>

              {/* ID Number */}
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-gray-900">
                  ID Number
                </span>
                <span className="text-sm text-gray-700">
                  {officer.idNumber}
                </span>
              </div>

              {/* Branch */}
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-gray-900">
                  Branch :
                </span>
                <span className="text-sm text-gray-700">{officer.branch}</span>
              </div>

              {/* Active Groups */}
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-gray-900">
                  Active Groups :
                </span>
                <span className="text-sm text-gray-700">
                  {officer.activeGroups}
                </span>
              </div>

              {/* Status */}
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-gray-900">
                  Status
                </span>
                <span className="px-3 py-1 bg-secondary text-white text-xs font-medium rounded-md">
                  {officer.status}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-start justify-between pt-1">
                <span className="text-sm font-medium text-gray-900">
                  Actions :
                </span>
                <div className="flex gap-2">
                  <button className="px-4 py-1.5 bg-primary text-white text-xs rounded-md font-medium hover:bg-blue-600 transition-colors">
                    Edit
                  </button>
                  <button className="px-4 py-1.5 bg-primary text-white text-xs rounded-md font-medium hover:bg-blue-600 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSettings2;

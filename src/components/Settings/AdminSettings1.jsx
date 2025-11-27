// src/pages/AdminSettings.jsx
import React, { useState } from "react";
import { Shield, CheckCircle, Clock, XCircle, ChevronDown } from "lucide-react";
import Groupcard from "../Groupcard";
import AdminSettings2 from "./AdminSettings2";
import AdminSettings3 from "./AdminSettings3";
import AdminSettings4 from "./AdminSettings4";

const AdminSettings1 = () => {
  const [activeTab, setActiveTab] = useState("group-management");
  const [groups, setGroups] = useState([
    {
      id: "GRP001",
      name: "Focal Group loan",
      createdDate: "2024-03-15",
      kycStatus: "Completed",
      disbursement: "Completed",
      portalAccess: true,
      approvalStatus: "Approved",
      loanOfficer: "John Okafor",
    },
    {
      id: "GRP002",
      name: "Women United VISA",
      createdDate: "2024-03-15",
      kycStatus: "Completed",
      disbursement: "Pending",
      portalAccess: true,
      approvalStatus: "Pending",
      loanOfficer: "John Okafor",
    },
    {
      id: "GRP003",
      name: "Focal Group loan",
      createdDate: "2024-03-15",
      kycStatus: "Completed",
      disbursement: "In Progress",
      portalAccess: false,
      approvalStatus: "Cancelled",
      loanOfficer: "John Okafor",
    },
  ]);

  const tabs = [
    { id: "group-management", label: "Group Management" },
    { id: "staff-management", label: "Staff Management" },
    { id: "system-settings", label: "System Settings" },
    { id: "bulk-operations", label: "Bulk Operations" },
  ];

  const getStatusColor = (status) => {
    const colors = {
      Completed: "bg-green-500",
      Pending: "bg-orange-400",
      "In Progress": "bg-yellow-400",
      Cancelled: "bg-red-500",
    };
    return colors[status] || "bg-gray-500";
  };

  const getApprovalIcon = (status) => {
    const icons = {
      Approved: <CheckCircle className="w-4 h-4" />,
      Pending: <Clock className="w-4 h-4" />,
      Cancelled: <XCircle className="w-4 h-4" />,
    };
    return icons[status];
  };

  const getApprovalBorderColor = (status) => {
    const colors = {
      Approved: "border-green-600",
      Pending: "border-yellow-400",
      Cancelled: "border-red-600",
    };
    return colors[status] || "border-gray-600";
  };

  const getApprovalTextColor = (status) => {
    const colors = {
      Approved: "text-green-600",
      Pending: "text-yellow-400",
      Cancelled: "text-red-600",
    };
    return colors[status] || "text-gray-600";
  };

  const togglePortalAccess = (groupId) => {
    setGroups(
      groups.map((group) =>
        group.id === groupId
          ? { ...group, portalAccess: !group.portalAccess }
          : group
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Tabs Container (full width to match tab content) */}
      <div className="bg-white rounded-2xl border-2 border-gray-600 p-4 mb-4 w-full">
        <div className="flex gap-2 w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 rounded-xl font-medium text-sm text-center transition-colors ${
                activeTab === tab.id
                  ? "bg-secondary text-white"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "group-management" && (
        <div className="bg-white rounded-lg shadow-md border-2 border-gray-200 p-8">
          {/* Section Header */}
          <div className="flex items-start gap-3 mb-8">
            <Shield className="w-5 h-5 text-gray-800 mt-1" />
            <div>
              <h2 className="text-base font-semibold text-gray-900">
                Group Approval & Access Control
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Manage group approvals, KYC verification, and portal access
              </p>
            </div>
          </div>

          {/* Groups Grid - wrapped in grid with gap and borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {groups.map((group) => (
              <div
                key={group.id}
                className="bg-white rounded-lg shadow-md border border-gray-200 p-6 space-y-3"
              >
                {/* Group Header */}
                <div className="flex items-start justify-between mb-4 pb-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {group.name}
                  </h3>
                  <p className="text-xs text-gray-600">
                    Created {group.createdDate}
                  </p>
                </div>

                {/* Status Items */}
                <div className="space-y-2.5">
                  {/* KYC Status */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">
                      KYC Status :
                    </span>
                    <span
                      className={`px-3 py-1 ${getStatusColor(
                        group.kycStatus
                      )} text-white text-xs font-medium rounded-md`}
                    >
                      {group.kycStatus}
                    </span>
                  </div>

                  {/* Disbursement */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">
                      Disbursement :
                    </span>
                    <span
                      className={`px-3 py-1 ${getStatusColor(
                        group.disbursement
                      )} text-white text-xs font-medium rounded-md`}
                    >
                      {group.disbursement}
                    </span>
                  </div>

                  {/* Portal Access Toggle */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">
                      Portal Access :
                    </span>
                    <button
                      onClick={() => togglePortalAccess(group.id)}
                      className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
                      style={{
                        backgroundColor: group.portalAccess
                          ? "#40239a"
                          : "#d1d5db",
                      }}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          group.portalAccess ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
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

                {/* Dropdowns Row */}
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-200">
                  {/* Approval Status */}
                  <div>
                    <label className="block text-xs font-medium text-gray-900 mb-2">
                      Approval Status
                    </label>
                    <div className="relative">
                      <select
                        className={`w-full pl-10 pr-9 py-2.5 border-2 ${getApprovalBorderColor(
                          group.approvalStatus
                        )} rounded-lg text-sm font-medium ${getApprovalTextColor(
                          group.approvalStatus
                        )} focus:outline-none focus:ring-2  appearance-none bg-white`}
                        value={group.approvalStatus}
                        onChange={(e) => {
                          setGroups(
                            groups.map((g) =>
                              g.id === group.id
                                ? { ...g, approvalStatus: e.target.value }
                                : g
                            )
                          );
                        }}
                      >
                        <option value="Approved">Approved</option>
                        <option value="Pending">Pending</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                      <div
                        className={`absolute inset-y-0 left-3 flex items-center pointer-events-none ${getApprovalTextColor(
                          group.approvalStatus
                        )}`}
                      >
                        {getApprovalIcon(group.approvalStatus)}
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Loan Officers */}
                  <div>
                    <label className="block text-xs font-medium text-gray-900 mb-2">
                      Loan Officers
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-2.5 pr-9 border-2 border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2  appearance-none bg-white"
                        value={group.loanOfficer}
                        onChange={(e) => {
                          setGroups(
                            groups.map((g) =>
                              g.id === group.id
                                ? { ...g, loanOfficer: e.target.value }
                                : g
                            )
                          );
                        }}
                      >
                        <option value="John Okafor">John Okafor</option>
                        <option value="Sarah Ibrahim">Sarah Ibrahim</option>
                        <option value="John Doe">John Doe</option>
                        <option value="Jane Smith">Jane Smith</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "staff-management" && <AdminSettings2 />}

      {activeTab === "system-settings" && <AdminSettings3 />}

      {activeTab === "bulk-operations" && <AdminSettings4 />}
    </div>
  );
};

export default AdminSettings1;

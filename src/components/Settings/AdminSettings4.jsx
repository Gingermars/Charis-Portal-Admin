// src/components/settings/BulkOperationsContent.jsx
import React, { useState } from "react";
import { Upload, Download, ChevronDown, Plus } from "lucide-react";

const AdminSettings4 = () => {
  const [uploadType, setUploadType] = useState("");
  const [exportType, setExportType] = useState("");
  const [dateRange, setDateRange] = useState({
    from: "",
    to: "",
  });
  const [exportFormat, setExportFormat] = useState("Excel (.xlsx)");

  const recentOperations = [
    {
      id: 1,
      title: "Member Bulk Upload",
      description: "45 members added successfully",
      timestamp: "2024-09-15 14:30",
    },
    {
      id: 2,
      title: "Repayment Export",
      description: "Excel file generated (Q3 2024)",
      timestamp: "2024-09-10 09:15",
    },
    {
      id: 3,
      title: "Group Registration Upload",
      description: "8 groups processed, 2 failed validation",
      timestamp: "2024-09-08 16:45",
    },
  ];

  return (
    <div>
      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Bulk Upload Section */}
        <div className="bg-white rounded-2xl border-2 border-gray-300 p-6">
          <div className="flex items-center gap-2 mb-2">
            <Upload className="w-5 h-5 text-gray-800" />
            <h2 className="text-base font-semibold text-gray-900">
              Bulk Upload
            </h2>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Upload multiple groups or members at once
          </p>

          <div className="space-y-5">
            {/* Upload Type Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Upload Type
              </label>
              <div className="relative">
                <select
                  value={uploadType}
                  onChange={(e) => setUploadType(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-xl text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
                >
                  <option value="">Select upload type</option>
                  <option value="members">Members</option>
                  <option value="groups">Groups</option>
                  <option value="loans">Loans</option>
                </select>
                <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Upload Type
              </label>
              <button className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-sm text-gray-500 text-left flex items-center justify-between hover:border-primary transition-colors">
                <span>Choose File to upload</span>
                <Plus className="w-5 h-5 text-gray-400" />
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Supported formats: CSV, Excel (.xlsx)
              </p>
            </div>

            {/* Upload Button */}
            <button className="w-full px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-secondary transition-colors flex items-center justify-center gap-2">
              <Upload className="w-5 h-5" />
              Upload File
            </button>

            {/* Download Template Link */}
            <button className="text-sm text-primary font-medium hover:text-red-400 transition-colors flex items-center gap-2">
              Download sample template
            </button>
          </div>
        </div>

        {/* Data Export Section */}
        <div className="bg-white rounded-2xl border-2 border-gray-300 p-6">
          <div className="flex items-center gap-2 mb-2">
            <Download className="w-5 h-5 text-gray-800" />
            <h2 className="text-base font-semibold text-gray-900">
              Data Export
            </h2>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Export system data for reporting
          </p>

          <div className="space-y-5">
            {/* Export Type Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Export Type
              </label>
              <div className="relative">
                <select
                  value={exportType}
                  onChange={(e) => setExportType(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-xl text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
                >
                  <option value="">Select data to export</option>
                  <option value="members">Members</option>
                  <option value="groups">Groups</option>
                  <option value="loans">Loans</option>
                  <option value="repayments">Repayments</option>
                </select>
                <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Date Range */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Date Range
              </label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="From (dd/mm/yy)"
                  value={dateRange.from}
                  onChange={(e) =>
                    setDateRange({ ...dateRange, from: e.target.value })
                  }
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="To (dd/mm/yy)"
                  value={dateRange.to}
                  onChange={(e) =>
                    setDateRange({ ...dateRange, to: e.target.value })
                  }
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Format Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Format
              </label>
              <div className="relative">
                <select
                  value={exportFormat}
                  onChange={(e) => setExportFormat(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
                >
                  <option value="Excel (.xlsx)">Excel (.xlsx)</option>
                  <option value="CSV (.csv)">CSV (.csv)</option>
                  <option value="PDF (.pdf)">PDF (.pdf)</option>
                </select>
                <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Export Button */}
            <button className="w-full px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-secondary transition-colors flex items-center justify-center gap-2">
              <Upload className="w-5 h-5" />
              Upload File
            </button>
          </div>
        </div>
      </div>

      {/* Recent Bulk Operations */}
      <div className="bg-white rounded-2xl border-2 border-gray-300 p-6">
        <h2 className="text-base font-semibold text-gray-900 mb-6">
          Recent Bulk Operations
        </h2>

        <div className="space-y-4">
          {recentOperations.map((operation) => (
            <div
              key={operation.id}
              className="flex items-start justify-between py-4 border-b border-gray-200 last:border-b-0"
            >
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {operation.title}
                </h3>
                <p className="text-sm text-gray-600">{operation.description}</p>
              </div>
              <span className="text-sm text-gray-500">
                {operation.timestamp}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSettings4;

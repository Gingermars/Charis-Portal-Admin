// src/pages/MeetingRecords.jsx
import React, { useState } from "react";
import {
  Plus,
  ChevronDown,
  Users,
  Calendar,
  AlertCircle,
  FileText,
} from "lucide-react";

const MeetingRecords = () => {
  const [selectedGroup, setSelectedGroup] = useState(
    "Focal Group Loan -N500,000"
  );

  const meetings = [
    {
      id: 1,
      dueDate: "2024-09-20",
      type: "Weekly",
      attendance: "7/8",
      rate: "Good",
      rateColor: "bg-blue-100 text-blue-700",
      issues: 2,
      actions: 2,
      facilitator: "John",
    },
    {
      id: 2,
      dueDate: "2024-09-20",
      type: "Weekly",
      attendance: "8/8",
      rate: "Excellent",
      rateColor: "bg-green-100 text-green-700",
      issues: 1,
      actions: 2,
      facilitator: "John",
    },
  ];

  const stats = [
    { label: "Total Meetings", value: "2", icon: Calendar },
    { label: "Average Attendance", value: "94%", icon: Users },
    { label: "Total Issues", value: "3", icon: AlertCircle },
    { label: "Action Items", value: "4", icon: FileText },
  ];

  return (
    <>
      {/* Record Meeting Button - Standalone */}
      <div className="flex justify-end mb-6">
        <button className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-secondary transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Record Meeting
        </button>
      </div>

      {/* Group Selection Card */}
      <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 mb-6">
        <label className="block text-sm font-medium text-gray-900 mb-3">
          Select Groups
        </label>
        <div className="flex items-center gap-6">
          <div className="flex-1 relative">
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 appearance-none bg-white"
            >
              <option>Focal Group Loan -N500,000</option>
              <option>Women United VSLA</option>
              <option>Progressive Cooperative</option>
            </select>
            <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Group Stats */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>8 members</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>2 meetings recorded</span>
            </div>
            <span className="font-semibold text-gray-900">
              94% avg attendance
            </span>
          </div>
        </div>
      </div>

      {/* Meeting History Card */}
      <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 mb-6">
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-900 mb-1">
            Meeting History - Focal Group loan
          </h2>
          <p className="text-sm text-gray-600">
            Chronological record of all group meetings
          </p>
        </div>

        {/* Meetings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="space-y-2.5">
              {/* Meeting Details */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Due Date :
                  </span>
                  <span className="text-sm text-gray-700">
                    {meeting.dueDate}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Type :
                  </span>
                  <span className="text-sm text-gray-700">{meeting.type}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Attendance :
                  </span>
                  <span className="text-sm text-gray-700 flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {meeting.attendance}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Rate :
                  </span>
                  <span
                    className={`px-3 py-1 ${meeting.rateColor} text-xs font-medium rounded-md`}
                  >
                    {meeting.rate}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Issues :
                  </span>
                  <span className="text-sm text-gray-700 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    {meeting.issues}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Actions :
                  </span>
                  <span className="text-sm text-gray-700 flex items-center gap-1">
                    <FileText className="w-4 h-4 text-blue-500" />
                    {meeting.actions}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Facilitator :
                  </span>
                  <span className="text-sm text-gray-700">
                    {meeting.facilitator}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-gray-900">
                    Actions :
                  </span>
                  <button className="p-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors">
                    <FileText className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border-2 border-gray-300 p-6"
          >
            <div className="flex items-center gap-2 mb-3 text-gray-600">
              <stat.icon className="w-4 h-4" />
              <span className="text-sm">{stat.label}</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MeetingRecords;

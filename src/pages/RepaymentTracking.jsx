// src/pages/RepaymentTracking.jsx
import React, { useState } from "react";
import {
  ChevronDown,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Calendar,
} from "lucide-react";

const RepaymentTracking = () => {
  const [selectedLoan, setSelectedLoan] = useState("Personal Loan -N600,000");

  const repayments = [
    {
      id: 1,
      dueDate: "2024-09-20",
      scheduledAmount: "N45,000",
      paidAmount: "N45,000",
      progress: 33.3,
      status: "Paid",
      statusColor: "bg-green-100 text-green-700",
      paymentDate: "2024-09-20",
      paymentMethod: "Cash",
      collector: "John",
    },
    {
      id: 2,
      dueDate: "2024-09-20",
      scheduledAmount: "N45,000",
      paidAmount: "N45,000",
      progress: 0,
      status: "Due Soon",
      statusColor: "bg-orange-100 text-orange-700",
      paymentDate: "",
      paymentMethod: "",
      collector: "",
    },
    {
      id: 3,
      dueDate: "2024-09-20",
      scheduledAmount: "N45,000",
      paidAmount: "N45,000",
      progress: 0,
      status: "Due Soon",
      statusColor: "bg-orange-100 text-orange-700",
      paymentDate: "",
      paymentMethod: "",
      collector: "",
    },
  ];

  const stats = [
    {
      label: "Active Limit",
      value: "₦700,000",
      icon: DollarSign,
      iconColor: "text-gray-600",
    },
    {
      label: "Amount Paid",
      value: "₦45,000",
      icon: CheckCircle,
      iconColor: "text-green-600",
    },
    {
      label: "Outstanding",
      value: "₦90,000",
      icon: AlertTriangle,
      iconColor: "text-orange-600",
    },
    {
      label: "Overdue Payments",
      value: "0",
      icon: AlertTriangle,
      iconColor: "text-red-600",
    },
  ];

  return (
    <>
      {/* Select Active Loan Card */}
      <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 mb-6">
        <h2 className="text-sm font-medium text-gray-900 mb-4">
          Select Active Loan
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Loans Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Active Loans
            </label>
            <div className="relative">
              <select
                value={selectedLoan}
                onChange={(e) => setSelectedLoan(e.target.value)}
                className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
              >
                <option>Personal Loan -N600,000</option>
                <option>Business Loan -N1,000,000</option>
                <option>Agricultural Loan -N500,000</option>
              </select>
              <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Loan Overview */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Loan Overview
            </label>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Repayment Progress
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  33.3%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: "33.3%" }}
                ></div>
              </div>
              <p className="text-xs text-gray-500">
                ₦45,000 of ₦135,000 collected
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Repayment Schedule Card */}
      <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 mb-6">
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-900 mb-1">
            Repayment Schedule -Personal loan
          </h2>
          <p className="text-sm text-gray-600">
            Payment schedule and tracking for the selected loan
          </p>
        </div>

        {/* Repayments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repayments.map((repayment) => (
            <div key={repayment.id} className="space-y-2.5">
              {/* Repayment Details */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Due Date :
                  </span>
                  <span className="text-sm text-gray-700 flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-green-600" />
                    {repayment.dueDate}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Scheduled Amount :
                  </span>
                  <span className="text-sm text-gray-700">
                    {repayment.scheduledAmount}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Paid Amount :
                  </span>
                  <span className="text-sm text-gray-700">
                    {repayment.paidAmount}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Repayment Progress
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {repayment.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${repayment.progress}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Payment Status :
                  </span>
                  <span
                    className={`px-3 py-1 ${repayment.statusColor} text-xs font-medium rounded-md`}
                  >
                    {repayment.status}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Payment Date :
                  </span>
                  <span className="text-sm text-gray-700">
                    {repayment.paymentDate || "-"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Payment Method :
                  </span>
                  <span className="text-sm text-gray-700">
                    {repayment.paymentMethod || "-"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Collector :
                  </span>
                  <span className="text-sm text-gray-700">
                    {repayment.collector || "-"}
                  </span>
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
            <div className="flex items-center gap-2 mb-3">
              <stat.icon className={`w-4 h-4 ${stat.iconColor}`} />
              <span className="text-sm text-gray-600">{stat.label}</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RepaymentTracking;

// src/pages/LoanApplication.jsx
import React, { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";

const LoanApplication = () => {
  const [formData, setFormData] = useState({
    loanType: "",
    loanDuration: "",
    purposeOfLoan: "",
    loanAmount: "",
    collateral: "",
    repaymentFrequency: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Loan application submitted:", formData);
    // Add your submission logic here
  };

  const handleGoBack = () => {
    // Add navigation logic
    console.log("Going back");
  };

  return (
    <>
      {/* New Application Button */}
      <div className="flex justify-end mb-6">
        <button className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-secondary transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" />
          New Application
        </button>
      </div>

      {/* Application Form Card */}
      <div className="flex justify-center">
        <div className="bg-white rounded-2xl border-2 border-gray-300 p-8 w-full max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Loan Type */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Loan Type
              </label>
              <div className="relative">
                <select
                  value={formData.loanType}
                  onChange={(e) => handleChange("loanType", e.target.value)}
                  className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-xl text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
                  required
                >
                  <option value="">Select type of Loan</option>
                  <option value="personal">Personal Loan</option>
                  <option value="business">Business Loan</option>
                  <option value="agricultural">Agricultural Loan</option>
                </select>
                <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Loan Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Loan Duration
              </label>
              <div className="relative">
                <select
                  value={formData.loanDuration}
                  onChange={(e) => handleChange("loanDuration", e.target.value)}
                  className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-xl text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
                  required
                >
                  <option value="">Select Duration of Loan</option>
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                  <option value="24">24 months</option>
                </select>
                <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Purpose of Loan */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Purpose of Loan
              </label>
              <textarea
                placeholder="Describe intended use of loan"
                value={formData.purposeOfLoan}
                onChange={(e) => handleChange("purposeOfLoan", e.target.value)}
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              ></textarea>
            </div>

            {/* Loan Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Loan Amount
              </label>
              <input
                type="text"
                placeholder="Enter amount"
                value={formData.loanAmount}
                onChange={(e) => handleChange("loanAmount", e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Collateral */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Collateral (if any)
              </label>
              <textarea
                placeholder="Describe any Collateral offered"
                value={formData.collateral}
                onChange={(e) => handleChange("collateral", e.target.value)}
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>

            {/* Repayment Frequency */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Repayment Frequency
              </label>
              <div className="relative">
                <select
                  value={formData.repaymentFrequency}
                  onChange={(e) =>
                    handleChange("repaymentFrequency", e.target.value)
                  }
                  className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-xl text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
                  required
                >
                  <option value="">Select Frequency</option>
                  <option value="weekly">Weekly</option>
                  <option value="bi-weekly">Bi-weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                </select>
                <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={handleGoBack}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Go Back to Previous page
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-secondary transition-colors"
              >
                Apply for loan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoanApplication;

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const GroupRegistrationForm = () => {
  const [formData, setFormData] = useState({
    groupName: "",
    groupType: "",
    month: "",
    day: "",
    year: "",
    leaderName: "",
    leaderPhone: "",
    groupAddress: "",
    leaderBVN: "",
    leaderNIN: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Group Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Group Name
          </label>
          <input
            type="text"
            name="groupName"
            value={formData.groupName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        {/* Group Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Group Type
          </label>
          <div className="relative">
            <select
              name="groupType"
              value={formData.groupType}
              onChange={handleChange}
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
              required
            >
              <option value="">Select type of group</option>
              <option value="cooperative">Cooperative Society</option>
              <option value="vsla">VSLA</option>
              <option value="jlg">Joint Liability Group</option>
            </select>
            <ChevronDown className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Date Of Formation */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date Of Formation
          </label>
          <div className="grid grid-cols-3 gap-4">
            <div className="relative">
              <select
                name="month"
                value={formData.month}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                required
              >
                <option value="">Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <ChevronDown className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                name="day"
                value={formData.day}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                required
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                required
              >
                <option value="">Year</option>
                {Array.from({ length: 10 }, (_, i) => 2025 - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Group Leader's Name and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Group Leader's Name
            </label>
            <input
              type="text"
              name="leaderName"
              value={formData.leaderName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Group leader's Phone Number
            </label>
            <input
              type="tel"
              name="leaderPhone"
              value={formData.leaderPhone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Group Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Group Address
          </label>
          <input
            type="text"
            name="groupAddress"
            value={formData.groupAddress}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        {/* BVN Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Group Leader's BVN Number
          </label>
          <input
            type="text"
            name="leaderBVN"
            value={formData.leaderBVN}
            onChange={handleChange}
            maxLength="11"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        {/* NIN */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Group Leader's National Identification Number (NIN)
          </label>
          <input
            type="text"
            name="leaderNIN"
            value={formData.leaderNIN}
            onChange={handleChange}
            maxLength="11"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-secondary transition-colors"
        >
          Add New group
        </button>
      </form>
    </div>
  );
};

export default GroupRegistrationForm;

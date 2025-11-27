// src/components/GroupCard.jsx
import React, { useState } from "react";
import { Calendar, X, User, Phone, Mail, ChevronDown } from "lucide-react";

const GroupCard = ({ group }) => {
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [showAddGroupModal, setShowAddGroupModal] = useState(false);

  const statusColors = {
    Active: "bg-green-500",
    Pending: "bg-yellow-500",
    Inactive: "bg-gray-500",
  };

  const handleViewMembers = () => {
    setShowMembersModal(true);
  };

  const handleCloseMembersModal = () => {
    setShowMembersModal(false);
  };

  const handleAddMember = () => {
    setShowMembersModal(false); // Close members modal
    setShowAddGroupModal(true); // Open add group form
  };

  const handleCloseAddGroupModal = () => {
    setShowAddGroupModal(false);
  };

  const handleSubmitGroup = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    setShowAddGroupModal(false);
  };

  return (
    <>
      {/* Group Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{group.name}</h3>
          <span
            className={`px-3 py-1 ${
              statusColors[group.status]
            } text-white text-xs font-medium rounded-full`}
          >
            {group.status}
          </span>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Group ID:</span>
            <span className="text-sm font-medium text-gray-900">
              {group.id}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Type:</span>
            <span className="text-sm font-medium text-gray-900">
              {group.type}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Members:</span>
            <span className="text-sm font-medium text-gray-900">
              {group.memberCount}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Leader:</span>
            <span className="text-sm font-medium text-gray-900">
              {group.leader}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Formation Date:</span>
            <span className="text-sm font-medium text-gray-900 flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {group.formationDate}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Loan Officer:</span>
            <span className="text-sm font-medium text-gray-900">
              {group.loanOfficer}
            </span>
          </div>
        </div>

        {/* View Members Button */}
        <button
          onClick={handleViewMembers}
          className="w-full mt-6 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-secondary transition-colors"
        >
          View Members
        </button>
      </div>

      {/* Members Modal */}
      {showMembersModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {group.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {group.memberCount} Members
                </p>
              </div>
              <button
                onClick={handleCloseMembersModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="overflow-y-auto p-6 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.members.map((member, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-primary" />
                      </div>

                      {/* Member Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {member.name}
                        </h3>

                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="w-4 h-4" />
                            <span>{member.phone}</span>
                          </div>

                          {member.email && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Mail className="w-4 h-4" />
                              <span className="truncate">{member.email}</span>
                            </div>
                          )}

                          <div className="text-xs text-gray-500 mt-2">
                            Member ID: {member.id}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={handleCloseMembersModal}
                className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleAddMember}
                className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                Add Member
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Group Modal/Form */}
      {showAddGroupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Form Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                Add New Member
              </h2>
              <button
                onClick={handleCloseAddGroupModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Form Body - Scrollable */}
            <div className="overflow-y-auto p-6 flex-1">
              <form onSubmit={handleSubmitGroup} className="space-y-6">
                {/* Group Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Group Name
                  </label>
                  <input
                    type="text"
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
                    <select className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white">
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
                    {/* Month */}
                    <div className="relative">
                      <select className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white">
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

                    {/* Day */}
                    <div className="relative">
                      <select className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white">
                        <option value="">Day</option>
                        {Array.from({ length: 31 }, (_, i) => (
                          <option
                            key={i + 1}
                            value={String(i + 1).padStart(2, "0")}
                          >
                            {i + 1}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                    </div>

                    {/* Year */}
                    <div className="relative">
                      <select className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white">
                        <option value="">Year</option>
                        {Array.from({ length: 10 }, (_, i) => 2025 - i).map(
                          (year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          )
                        )}
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
          </div>
        </div>
      )}
    </>
  );
};

export default GroupCard;

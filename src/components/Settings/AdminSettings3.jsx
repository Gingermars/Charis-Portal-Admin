// src/components/settings/SystemSettingsContent.jsx
import React, { useState } from "react";
import { Settings } from "lucide-react";

const AdminSettings3 = () => {
  const [loanSettings, setLoanSettings] = useState({
    autoApproveLimit: "",
    defaultInterestRate: "",
    maxLoanTenure: "",
    paymentReminder: "",
  });

  const [preferences, setPreferences] = useState({
    smsNotifications: true,
    emailNotifications: true,
    requireKYC: true,
    allowBulkUploads: true,
  });

  const handleLoanSettingsChange = (field, value) => {
    setLoanSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePreferenceToggle = (field) => {
    setPreferences((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSaveSettings = () => {
    console.log("Saving settings:", { loanSettings, preferences });
    // Add your save logic here
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Loan Settings */}
      <div className="bg-white rounded-2xl border-2 border-gray-300 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Settings className="w-5 h-5 text-gray-800" />
          <h2 className="text-base font-semibold text-gray-900">
            Loan Settings
          </h2>
        </div>

        <div className="space-y-5">
          {/* Auto-approve limit */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Auto-approve limit
            </label>
            <input
              type="text"
              placeholder="Insert Amount"
              value={loanSettings.autoApproveLimit}
              onChange={(e) =>
                handleLoanSettingsChange("autoApproveLimit", e.target.value)
              }
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Default interest rate */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Default interest rate (%)
            </label>
            <input
              type="text"
              placeholder="Insert Rate"
              value={loanSettings.defaultInterestRate}
              onChange={(e) =>
                handleLoanSettingsChange("defaultInterestRate", e.target.value)
              }
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Maximum loan tenure */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Maximum loan tenure (in months)
            </label>
            <input
              type="text"
              placeholder="Insert number of months"
              value={loanSettings.maxLoanTenure}
              onChange={(e) =>
                handleLoanSettingsChange("maxLoanTenure", e.target.value)
              }
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Payment Reminder */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Payment Reminder (days before)
            </label>
            <input
              type="text"
              placeholder="Insert number of days"
              value={loanSettings.paymentReminder}
              onChange={(e) =>
                handleLoanSettingsChange("paymentReminder", e.target.value)
              }
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* System Preferences */}
      <div className="bg-white rounded-2xl border-2 border-gray-300 p-6">
        <h2 className="text-base font-semibold text-gray-900 mb-6">
          System Preferences
        </h2>

        <div className="space-y-5">
          {/* SMS Notifications */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                SMS Notifications
              </h3>
              <p className="text-sm text-gray-600 mt-0.5">
                Send SMS reminders to groups
              </p>
            </div>
            <button
              onClick={() => handlePreferenceToggle("smsNotifications")}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
              style={{
                backgroundColor: preferences.smsNotifications
                  ? "#40239a"
                  : "#d1d5db",
              }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  preferences.smsNotifications
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Email Notifications */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Email Notifications
              </h3>
              <p className="text-sm text-gray-600 mt-0.5">
                Send email updates to officers
              </p>
            </div>
            <button
              onClick={() => handlePreferenceToggle("emailNotifications")}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
              style={{
                backgroundColor: preferences.emailNotifications
                  ? "#40239a"
                  : "#d1d5db",
              }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  preferences.emailNotifications
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Require KYC Approval */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Require KYC Approval
              </h3>
              <p className="text-sm text-gray-600 mt-0.5">
                Mandatory KYC verification for all members
              </p>
            </div>
            <button
              onClick={() => handlePreferenceToggle("requireKYC")}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
              style={{
                backgroundColor: preferences.requireKYC ? "#40239a" : "#d1d5db",
              }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  preferences.requireKYC ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Allow Bulk Uploads */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Allow Bulk Uploads
              </h3>
              <p className="text-sm text-gray-600 mt-0.5">
                Enable bulk member and group uploads
              </p>
            </div>
            <button
              onClick={() => handlePreferenceToggle("allowBulkUploads")}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
              style={{
                backgroundColor: preferences.allowBulkUploads
                  ? "#40239a"
                  : "#d1d5db",
              }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  preferences.allowBulkUploads
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Save Settings Button */}
          <button
            onClick={handleSaveSettings}
            className="w-full mt-6 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-secondary transition-colors"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings3;

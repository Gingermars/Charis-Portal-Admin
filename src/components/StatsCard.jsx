// src/components/StatCard.jsx
import React from "react";

const StatCard = ({
  title,
  value,
  change,
  icon: Icon,
  iconBgColor,
  iconColor,
  showProgressBar,
  percentage,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start justify-between mb-4">
        <p className="text-sm text-gray-600">{title}</p>
        <div
          className={`w-10 h-10 ${iconBgColor} rounded-lg flex items-center justify-center`}
        >
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>

      {showProgressBar ? (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      ) : (
        <p className="text-xs text-green-600 font-medium">{change}</p>
      )}
    </div>
  );
};

export default StatCard;

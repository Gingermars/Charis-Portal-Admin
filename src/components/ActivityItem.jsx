import React from "react";

const ActivityItem = ({ title, subtitle, amount, time, isLast }) => {
  return (
    <div className={`${!isLast ? "border-b border-gray-200" : ""} pb-4`}>
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">{subtitle}</p>
        {amount && (
          <span className="text-sm font-semibold text-gray-900">{amount}</span>
        )}
      </div>
    </div>
  );
};
export default ActivityItem;

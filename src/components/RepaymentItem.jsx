import React from "react";

const RepaymentItem = ({ groupName, dueDate, amount, status, isLast }) => {
  const statusStyles = {
    "Due Soon": "bg-red-500 text-white",
    Upcoming: "bg-gray-100 text-gray-600",
  };

  return (
    <div className={`${!isLast ? "border-b border-gray-200" : ""} pb-4`}>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-medium text-gray-900">{groupName}</h3>
          <p className="text-xs text-gray-500">Due: {dueDate}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-gray-900 mb-1">{amount}</p>
          <span
            className={`inline-block px-3 py-1 text-xs rounded-full ${statusStyles[status]}`}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RepaymentItem;

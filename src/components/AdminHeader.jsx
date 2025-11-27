import React from "react";
import { useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const routeConfig = {
  "/admin/dashboard": {
    title: "Dashboard Overview",
    subtitle: "Monitor your group lending operations at a glance",
  },
  "/admin/group-registration": {
    title: "Group Registration",
    subtitle: "Register new lending groups",
  },
  "/admin/member-registration": {
    title: "Group Members",
    subtitle: "Manage group members and details",
  },
  "/admin/registered-groups": {
    title: "Registered Groups",
    subtitle: "Overview of all the registered groups",
  },
  "/admin/repayment-tracking": {
    title: "Repayment Tracking",
    subtitle: "Monitor Loan Repayments and schedule",
  },
  "/admin/loan-application": {
    title: "Loan Application",
    subtitle: "Review and manage loan applications",
  },
  "/admin/meeting-records": {
    title: "Meeting Records",
    subtitle: "Maintain records of group meetings",
  },
  "/admin/settings": {
    title: "Admin Settings",
    subtitle: "Configure admin panel settings",
  },
};

export default function AdminHeader() {
  const location = useLocation();
  const config = routeConfig[location.pathname] || {
    title: "Admin Panel",
    subtitle: "Manage your lending operations",
  };

  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {config.title}
        </h1>
        <p className="text-sm text-gray-400">{config.subtitle}</p>
      </div>

      <div className="flex items-center gap-3">
        <img
          src={assets.admin}
          alt="Administrator"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-gray-900">Administrator</p>
          <p className="text-xs text-gray-500">David Oshigbo</p>
        </div>
      </div>
    </header>
  );
}

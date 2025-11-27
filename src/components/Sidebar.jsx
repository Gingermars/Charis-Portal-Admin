// src/components/Sidebar.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Search,
  LayoutDashboard,
  ClipboardList,
  Users,
  CreditCard,
  FileText,
  Calendar,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // React Router hooks
  const navigate = useNavigate(); // For navigation
  const location = useLocation(); // To get current route

  // Menu items array - makes it easy to add/remove items
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Group Registration",
      path: "/admin/group-registration",
      icon: ClipboardList,
    },
    {
      name: "Group Management",
      path: "/admin/registered-groups",
      icon: Users,
    },
    {
      name: "Repayment Tracking",
      path: "/admin/repayment-tracking",
      icon: CreditCard,
    },
    {
      name: "Loan Application",
      path: "/admin/loan-application",
      icon: FileText,
    },
    {
      name: "Meeting Records",
      path: "/admin/meeting-records",
      icon: Calendar,
    },
    {
      name: "Admin Settings",
      path: "/admin/settings",
      icon: Settings,
    },
  ];

  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the route
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      {/* Mobile Menu Toggle Button - Only visible on mobile */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-white rounded-lg"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Dark Overlay for mobile - Only shows when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-primary p-6 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo Section */}
        <div className="mb-8">
          <img src={assets.charisLogo} alt="Charis Logo" className="w-full" />
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-3 pl-10 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon; // Get the icon component
            const isActive = location.pathname === item.path; // Check if current route matches

            return (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive
                    ? "bg-green-400 text-white" // Active state styling
                    : "text-white hover:bg-green-600" // Inactive state styling
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="whitespace-nowrap">{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

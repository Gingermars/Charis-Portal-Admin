import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import GroupRegistration from "./pages/GroupRegistration";
import AdminLayout from "./components/AdminLayout";
import RegisteredGroups from "./pages/RegisteredGroups";
import AdminSettings1 from "./components/Settings/AdminSettings1";
import MeetingRecords from "./pages/MeetingRecords";
import RepaymentTracking from "./pages/RepaymentTracking";
import LoanApplication from "./pages/LoanApplicaation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />

      {/* Admin routes wrapped with AdminLayout (Sidebar + Outlet) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="group-registration" element={<GroupRegistration />} />
        <Route path="registered-groups" element={<RegisteredGroups />} />
        <Route path="settings" element={<AdminSettings1 />} />
        <Route path="meeting-records" element={<MeetingRecords />} />
        <Route path="repayment-tracking" element={<RepaymentTracking />} />
        <Route path="loan-application" element={<LoanApplication />} />
        {/* add additional admin child routes here as needed */}
      </Route>

      {/* Fallback - redirect unknown to login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;

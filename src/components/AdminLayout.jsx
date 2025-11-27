import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <AdminHeader />
        <Outlet />
      </main>
    </div>
  );
}

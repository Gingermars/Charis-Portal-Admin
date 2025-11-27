import React from "react";
import {
  Users,
  Wallet,
  ClipboardCheck,
  CreditCard,
  Search,
  LayoutDashboard,
  ClipboardList,
  FileText,
  Calendar,
  Settings,
  DollarSign,
  TrendingUp,
  Menu,
  X,
  // LogOut,
} from "lucide-react";
import StatCard from "../components/StatCard";
import ActivityItem from "../components/ActivityItem";
import RepaymentItem from "../components/RepaymentItem";
import SimpleStatCard from "../components/SimpleStatCard";
// assets not used here; header provides avatar/logo

export default function Dashboard() {
  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Groups"
          value="24"
          change="+2 from last month"
          icon={Users}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
          shadowColor="bg-blue-500"
        />

        <StatCard
          title="Total Members"
          value="180"
          change="+12 from last month"
          icon={Users}
          iconBgColor="bg-purple-100"
          iconColor="text-purple-600"
          shadowColor="bg-purple-500"
        />

        <StatCard
          title="Loans Disbursed"
          value="₦2,450,000"
          change="+15% from last month"
          icon={DollarSign}
          iconBgColor="bg-cyan-100"
          iconColor="text-cyan-600"
          shadowColor="bg-cyan-500"
        />

        <StatCard
          title="Repayment Rate"
          value="94%"
          icon={TrendingUp}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
          showProgressBar={true}
          percentage={94}
          shadowColor="bg-green-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Recent Activities
            </h2>
            <p className="text-sm text-gray-500">
              Latest updates across your groups
            </p>
          </div>
          <div className="space-y-4">
            <ActivityItem
              title="New group registration"
              subtitle="Focal Group loan"
              amount="₦150,000"
              time="2 hours ago"
            />
            <ActivityItem
              title="Loan disbursement"
              subtitle="Women United VSLA"
              amount="₦150,000"
              time="5 hours ago"
            />
            <ActivityItem
              title="Payment received"
              subtitle="Progressive Cooperative"
              amount="₦25,000"
              time="1 day ago"
            />
            <ActivityItem
              title="Missed payment alert"
              subtitle="Unity JLG"
              time="2 days ago"
              isLast={true}
            />
          </div>
        </div>

        {/* Due Repayments */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Due Repayments
            </h2>
            <p className="text-sm text-gray-500">
              Groups with payments due soon
            </p>
          </div>
          <div className="space-y-4">
            <RepaymentItem
              groupName="Focal Group loan"
              dueDate="2025-09-20"
              amount="₦45,000"
              status="Due Soon"
            />
            <RepaymentItem
              groupName="Women United VSLA"
              dueDate="2025-09-22"
              amount="₦32,000"
              status="Upcoming"
            />
            <RepaymentItem
              groupName="Progressive Cooperative"
              dueDate="2025-09-25"
              amount="₦28,000"
              status="Upcoming"
              isLast={true}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mb-8">
        <SimpleStatCard label="Active Loans" value="18" />
        <SimpleStatCard label="Pending Applications" value="3" />
        <SimpleStatCard label="This Month Collection" value="₦234,500" />
      </div>
    </>
  );
}

function Card({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg  flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm">{title}</p>
        <h3 className="text-2xl font-semibold mt-1">{value}</h3>
      </div>
      <div className="text-purple-700">{icon}</div>
    </div>
  );
}

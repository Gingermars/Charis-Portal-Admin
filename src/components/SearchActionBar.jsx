import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const SearchActionBar = () => {
  const [selectedGroup, setSelectedGroup] = useState("Focal Group loan");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-white rounded-xl border-2 border-gray-300 p-3 mb-6">
      <div className="flex items-center gap-3">
        {/* Group Dropdown */}
        <div className="relative">
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="w-56 px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
          >
            <option>Focal Group loan</option>
            <option>Women United VSLA</option>
            <option>Progressive Cooperative</option>
            <option>Unity Joint Liability Group</option>
          </select>
          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Search Bar */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-11 border-2 border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>

        {/* Add Members Button */}
        <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition-colors whitespace-nowrap">
          Add Members
        </button>

        {/* Go Back Button */}
        <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
          Go back
        </button>
      </div>
    </div>
  );
};

export default SearchActionBar;

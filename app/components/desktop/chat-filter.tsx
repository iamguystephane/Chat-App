"use client";

import { useState } from "react";
import { Add01Icon } from "hugeicons-react";

const ChatFilter = () => {
  const [activeFilter, setActiveFilter] = useState("direct");
  const filters = ["direct", "groups", "public"];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Chats</h2>
        <button className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 hover:scale-105">
          <Add01Icon size={18} />
        </button>
      </div>

      <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
              flex-1 py-2 px-3 text-xs font-semibold uppercase tracking-wide rounded-full transition-all duration-200
              ${
                activeFilter === filter ?
                  "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatFilter;

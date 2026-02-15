"use client";

import Image from "next/image";
import profilePic from "../../assets/images/AI-creation.jpg";
import { UserAdd01Icon } from "hugeicons-react";

const Suggestions = () => {
  const suggestions = [
    { id: 1, name: "Guy Stephane", mutuals: 7, username: "@guystephane" },
    { id: 2, name: "Sarah Wilson", mutuals: 12, username: "@sarahw" },
    { id: 3, name: "Alex Chen", mutuals: 5, username: "@alexc" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Suggestions</h2>
        <UserAdd01Icon size={18} className="text-gray-400" />
      </div>

      <div className="space-y-2">
        {suggestions.map((person) => (
          <div
            key={person.id}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
          >
            <Image
              src={profilePic}
              alt={person.name}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-900 truncate">
                {person.name}
              </h4>
              <p className="text-xs text-gray-500">
                {person.mutuals} mutual friends
              </p>
            </div>
            <button className="px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm hover:shadow-md hover:shadow-purple-500/25 transition-all duration-200 hover:scale-105">
              Add
            </button>
          </div>
        ))}
      </div>

      <button className="w-full py-2.5 text-sm font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-xl transition-colors duration-200">
        See more suggestions
      </button>
    </div>
  );
};

export default Suggestions;

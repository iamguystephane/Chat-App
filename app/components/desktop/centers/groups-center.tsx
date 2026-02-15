"use client";

import {
  UserGroupIcon,
  Add01Icon,
  Search01Icon,
  Globe02Icon,
  LockIcon,
} from "hugeicons-react";
import Image from "next/image";
import profilePic from "../../../assets/images/AI-creation.jpg";

const GroupsCenter = () => {
  const myGroups = [
    { name: "Tech Enthusiasts", members: 128, isPublic: true },
    { name: "Close Friends", members: 12, isPublic: false },
    { name: "Work Team", members: 24, isPublic: false },
  ];

  const suggestedGroups = [
    { name: "UI/UX Designers", members: 1240, isPublic: true },
    { name: "React Developers", members: 3500, isPublic: true },
  ];

  return (
    <div className="flex flex-col h-full p-6 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Groups</h2>
          <p className="text-sm text-gray-500 mt-1">Connect with communities</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
          <div className="flex items-center gap-2">
            <Add01Icon size={18} />
            <span>Create Group</span>
          </div>
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search01Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search groups..."
          className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-300 transition-all duration-200"
        />
      </div>

      {/* My Groups */}
      <h3 className="text-lg font-semibold text-gray-900 mb-4">My Groups</h3>
      <div className="grid grid-cols-1 gap-3 mb-8">
        {myGroups.map((group) => (
          <div
            key={group.name}
            className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:shadow-purple-500/5 transition-all duration-200 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <UserGroupIcon size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">{group.name}</h4>
              <p className="text-sm text-gray-500">{group.members} members</p>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              {group.isPublic ? <Globe02Icon size={16} /> : <LockIcon size={16} />}
              <span className="text-xs">{group.isPublic ? "Public" : "Private"}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Groups */}
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Suggested for You</h3>
      <div className="grid grid-cols-2 gap-4">
        {suggestedGroups.map((group) => (
          <div
            key={group.name}
            className="relative overflow-hidden bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center mb-4 shadow-lg">
              <UserGroupIcon size={28} className="text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">{group.name}</h4>
            <p className="text-sm text-gray-500 mb-4">{group.members.toLocaleString()} members</p>
            <div className="flex -space-x-2 mb-4">
              {[1, 2, 3].map((i) => (
                <Image
                  key={i}
                  src={profilePic}
                  alt="member"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
              <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-500">
                +99
              </div>
            </div>
            <button className="w-full py-2 text-sm font-semibold text-purple-600 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-200">
              Join Group
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupsCenter;

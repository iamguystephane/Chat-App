"use client";

import {
  Activity01Icon,
  Add01Icon,
  Image01Icon,
  Video01Icon,
  TextIcon,
  Clock01Icon,
} from "hugeicons-react";
import Image from "next/image";
import profilePic from "../../../assets/images/AI-creation.jpg";

const StatusCenter = () => {
  const statusTypes = [
    { icon: Image01Icon, label: "Photo", gradient: "from-pink-500 to-rose-500" },
    { icon: Video01Icon, label: "Video", gradient: "from-purple-500 to-indigo-500" },
    { icon: TextIcon, label: "Text", gradient: "from-blue-500 to-cyan-500" },
  ];

  const recentStatuses = [
    { user: "Sarah Wilson", time: "2 hours ago", viewed: false },
    { user: "Alex Chen", time: "4 hours ago", viewed: true },
    { user: "Emma Davis", time: "6 hours ago", viewed: true },
  ];

  return (
    <div className="flex flex-col h-full p-6 overflow-y-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Status</h2>
        <p className="text-sm text-gray-500 mt-1">Share moments with your friends</p>
      </div>

      {/* My Status Card */}
      <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 mb-8 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <Image
                src={profilePic}
                alt="My Status"
                className="w-16 h-16 rounded-full object-cover border-4 border-white/30"
              />
              <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center">
                <Add01Icon size={14} className="text-purple-500" />
              </button>
            </div>
            <div>
              <h3 className="font-bold">My Status</h3>
              <p className="text-sm text-white/70">Tap to add status update</p>
            </div>
          </div>
          <div className="flex gap-3">
            {statusTypes.map((type) => (
              <button
                key={type.label}
                className="flex-1 flex flex-col items-center gap-2 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors duration-200"
              >
                <type.icon size={20} />
                <span className="text-xs">{type.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Updates */}
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Updates</h3>
      <div className="space-y-3 mb-8">
        {recentStatuses.map((status, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:shadow-purple-500/5 transition-all duration-200 cursor-pointer"
          >
            <div className={`relative p-0.5 rounded-full ${status.viewed ? "bg-gray-300" : "bg-gradient-to-br from-purple-500 to-pink-500"}`}>
              <Image
                src={profilePic}
                alt={status.user}
                className="w-12 h-12 rounded-full object-cover border-2 border-white"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">{status.user}</h4>
              <p className="text-sm text-gray-500">{status.time}</p>
            </div>
            {!status.viewed && (
              <span className="w-2 h-2 rounded-full bg-purple-500" />
            )}
          </div>
        ))}
      </div>

      {/* Empty State for More */}
      <div className="flex-1 bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
        <div className="text-center">
          <Clock01Icon size={48} className="text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Status updates disappear after 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCenter;

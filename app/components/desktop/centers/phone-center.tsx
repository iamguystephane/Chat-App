"use client";

import {
  Call02Icon,
  CallOutgoing01Icon,
  CallIncoming01Icon,
  Video01Icon,
  Mic01Icon,
  ContactBookIcon,
  Clock01Icon,
} from "hugeicons-react";

const PhoneCenter = () => {
  const quickActions = [
    {
      icon: Call02Icon,
      title: "New Call",
      description: "Start a voice call",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Video01Icon,
      title: "Video Call",
      description: "Start a video call",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Mic01Icon,
      title: "Voice Message",
      description: "Record and send",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: ContactBookIcon,
      title: "Contacts",
      description: "Browse contacts",
      gradient: "from-orange-400 to-red-500",
    },
  ];

  const recentStats = [
    { label: "Outgoing", count: 24, icon: CallOutgoing01Icon, color: "text-green-500" },
    { label: "Incoming", count: 18, icon: CallIncoming01Icon, color: "text-blue-500" },
    { label: "Missed", count: 3, icon: Call02Icon, color: "text-red-500" },
  ];

  return (
    <div className="flex flex-col h-full p-6 overflow-y-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Calls</h2>
        <p className="text-sm text-gray-500 mt-1">Manage your calls and contacts</p>
      </div>

      {/* Call Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {recentStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center gap-2"
          >
            <stat.icon size={24} className={stat.color} />
            <span className="text-2xl font-bold text-gray-900">{stat.count}</span>
            <span className="text-xs text-gray-500">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {quickActions.map((action) => (
          <button
            key={action.title}
            className="group relative overflow-hidden bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 text-left"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
            />
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center mb-4 shadow-lg`}
            >
              <action.icon size={24} className="text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">{action.title}</h4>
            <p className="text-sm text-gray-500">{action.description}</p>
          </button>
        ))}
      </div>

      {/* Recent Activity */}
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="flex-1 bg-gray-50 rounded-2xl p-4 flex items-center justify-center">
        <div className="text-center">
          <Clock01Icon size={48} className="text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Your recent calls will appear here</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneCenter;

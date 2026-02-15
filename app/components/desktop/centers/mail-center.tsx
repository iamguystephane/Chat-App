"use client";

import {
  Mail01Icon,
  MailAdd01Icon,
  InboxIcon,
  SentIcon,
  DartIcon,
  Delete01Icon,
} from "hugeicons-react";

const MailCenter = () => {
  const folders = [
    { icon: InboxIcon, label: "Inbox", count: 12, active: true },
    { icon: SentIcon, label: "Sent", count: 45, active: false },
    { icon: DartIcon, label: "Drafts", count: 3, active: false },
    { icon: Delete01Icon, label: "Trash", count: 0, active: false },
  ];

  const quickActions = [
    {
      icon: MailAdd01Icon,
      title: "Compose",
      description: "Write a new email",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: InboxIcon,
      title: "Check Inbox",
      description: "View received emails",
      gradient: "from-blue-400 to-cyan-500",
    },
  ];

  return (
    <div className="flex flex-col h-full p-6 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Mail</h2>
          <p className="text-sm text-gray-500 mt-1">Manage your emails</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
          <div className="flex items-center gap-2">
            <MailAdd01Icon size={18} />
            <span>Compose</span>
          </div>
        </button>
      </div>

      {/* Folders */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        {folders.map((folder) => (
          <button
            key={folder.label}
            className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-200 ${
              folder.active
                ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
          >
            <folder.icon size={24} />
            <span className="text-sm font-medium">{folder.label}</span>
            {folder.count > 0 && (
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  folder.active ? "bg-white/20" : "bg-gray-200"
                }`}
              >
                {folder.count}
              </span>
            )}
          </button>
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

      {/* Empty State */}
      <div className="flex-1 bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
        <div className="text-center">
          <Mail01Icon size={48} className="text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Select a folder to view emails</p>
        </div>
      </div>
    </div>
  );
};

export default MailCenter;

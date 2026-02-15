"use client";

import {
  UserCircleIcon,
  Settings01Icon,
  SecurityIcon,
  Notification01Icon,
  PaintBrushIcon,
  Logout01Icon,
  Edit01Icon,
} from "hugeicons-react";
import Image from "next/image";
import profilePic from "../../../assets/images/AI-creation.jpg";

const AccountCenter = () => {
  const menuItems = [
    { icon: Settings01Icon, label: "General Settings", description: "App preferences and configurations" },
    { icon: SecurityIcon, label: "Privacy & Security", description: "Password, 2FA, and privacy settings" },
    { icon: Notification01Icon, label: "Notifications", description: "Manage notification preferences" },
    { icon: PaintBrushIcon, label: "Appearance", description: "Theme, colors, and display options" },
  ];

  return (
    <div className="flex flex-col h-full p-6 overflow-y-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Account</h2>
        <p className="text-sm text-gray-500 mt-1">Manage your profile and settings</p>
      </div>

      {/* Profile Card */}
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="relative flex items-center gap-4">
          <div className="relative">
            <Image
              src={profilePic}
              alt="Profile"
              className="w-20 h-20 rounded-2xl object-cover border-4 border-white/20"
            />
            <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <Edit01Icon size={14} className="text-purple-500" />
            </button>
          </div>
          <div>
            <h3 className="text-xl font-bold">Guy Stephane</h3>
            <p className="text-white/80 text-sm">@guystephane</p>
            <p className="text-white/60 text-xs mt-1">Premium Member</p>
          </div>
        </div>
        <div className="relative grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
          <div className="text-center">
            <p className="text-2xl font-bold">248</p>
            <p className="text-xs text-white/60">Friends</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs text-white/60">Groups</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">1.2k</p>
            <p className="text-xs text-white/60">Messages</p>
          </div>
        </div>
      </div>

      {/* Settings Menu */}
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Settings</h3>
      <div className="space-y-3 mb-8">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:shadow-purple-500/5 hover:border-purple-100 transition-all duration-200 text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
              <item.icon size={24} className="text-purple-500" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">{item.label}</h4>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Logout */}
      <button className="flex items-center justify-center gap-2 w-full py-4 text-red-500 bg-red-50 rounded-2xl hover:bg-red-100 transition-colors duration-200">
        <Logout01Icon size={20} />
        <span className="font-semibold">Log Out</span>
      </button>
    </div>
  );
};

export default AccountCenter;

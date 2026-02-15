"use client";

import Image from "next/image";
import profilePic from "../../assets/images/AI-creation.jpg";
import { Notification01Icon } from "hugeicons-react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      user: "@iamguystephane",
      action: "added you to the group",
      target: "No Return",
      time: "2 mins ago",
      unread: true,
    },
    {
      id: 2,
      user: "@jane_doe",
      action: "sent you a message",
      target: "",
      time: "15 mins ago",
      unread: true,
    },
    {
      id: 3,
      user: "@tech_guru",
      action: "liked your status",
      target: "",
      time: "1 hour ago",
      unread: false,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full">
            2 new
          </span>
          <Notification01Icon size={18} className="text-gray-400" />
        </div>
      </div>

      <div className="space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer ${
              notification.unread ?
                "bg-purple-50/50 hover:bg-purple-50"
              : "hover:bg-gray-50"
            }`}
          >
            <div className="relative flex-shrink-0">
              <Image
                src={profilePic}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              {notification.unread && (
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-purple-500 border-2 border-white rounded-full" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold text-blue-600">
                  {notification.user}
                </span>{" "}
                {notification.action}
                {notification.target && (
                  <span className="font-medium text-gray-900">
                    {" "}
                    &apos;{notification.target}&apos;
                  </span>
                )}
              </p>
              <span className="text-xs text-gray-400 mt-1 block">
                {notification.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-2.5 text-sm font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-xl transition-colors duration-200">
        View all notifications
      </button>
    </div>
  );
};

export default Notifications;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Chatting01Icon,
  UserGroupIcon,
  Call02Icon,
  Mail01Icon,
  UserCircleIcon,
  Notification01Icon,
} from "hugeicons-react";

export default function ChatNav() {
  const router = useRouter();
  const [tab, setTab] = useState("chat");

  const handleTab = (tabName: string) => {
    setTab(tabName);
    router.push(`/${tabName}`);
  };

  const tabs = [
    { id: "chat", icon: Chatting01Icon, label: "Chat" },
    { id: "phone", icon: Call02Icon, label: "Calls" },
    { id: "mail", icon: Mail01Icon, label: "Mail" },
    {
      id: "notifications",
      icon: Notification01Icon,
      label: "Alerts",
      hideOnDesktop: true,
    },
    { id: "groups", icon: UserGroupIcon, label: "Groups" },
    { id: "account", icon: UserCircleIcon, label: "Account" },
  ];

  return (
    <nav className="flex items-center justify-between gap-1 p-1 bg-gray-50 rounded-xl">
      {tabs.map(({ id, icon: Icon, hideOnDesktop }) => (
        <button
          key={id}
          onClick={() => handleTab(id)}
          className={`
            flex items-center justify-center p-2.5 rounded-lg transition-all duration-200
            ${hideOnDesktop ? "lg:hidden" : ""}
            ${
              tab === id ?
                "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md shadow-purple-500/25"
              : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            }
          `}
        >
          <Icon size={20} />
        </button>
      ))}
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Chatting01Icon,
  UserGroupIcon,
  Call02Icon,
  Mail01Icon,
  UserCircleIcon,
  Notification01Icon,
  Activity01Icon,
} from "hugeicons-react";

export default function ChatNav() {
  const pathname = usePathname();

  const tabs = [
    { id: "chat", icon: Chatting01Icon, label: "Chat" },
    { id: "phone", icon: Call02Icon, label: "Calls" },
    { id: "mail", icon: Mail01Icon, label: "Mail" },
    { id: "status", icon: Activity01Icon, label: "Status" },
    {
      id: "notifications",
      icon: Notification01Icon,
      label: "Alerts",
      hideOnDesktop: true,
    },
    { id: "groups", icon: UserGroupIcon, label: "Groups" },
    { id: "account", icon: UserCircleIcon, label: "Account" },
  ];

  const isActive = (id: string) => pathname === `/${id}`;

  return (
    <nav className="flex items-center justify-between gap-1 p-1.5 bg-gray-50 rounded-2xl">
      {tabs.map(({ id, icon: Icon, hideOnDesktop }) => (
        <Link
          key={id}
          href={`/${id}`}
          prefetch={true}
          className={`
            flex items-center justify-center p-2.5 rounded-full transition-all duration-200
            ${hideOnDesktop ? "lg:hidden" : ""}
            ${
              isActive(id) ?
                "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md shadow-purple-500/25"
              : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            }
          `}
        >
          <Icon size={20} />
        </Link>
      ))}
    </nav>
  );
}

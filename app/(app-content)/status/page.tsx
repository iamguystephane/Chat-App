import Image from "next/image";
import profilePic from "../../assets/images/AI-creation.jpg";
import { Add01Icon } from "hugeicons-react";

const statuses = [
  { user: "Sarah Wilson", time: "2 hours ago", viewed: false },
  { user: "Alex Chen", time: "4 hours ago", viewed: false },
  { user: "Emma Davis", time: "6 hours ago", viewed: true },
  { user: "John Smith", time: "8 hours ago", viewed: true },
  { user: "Lisa Brown", time: "12 hours ago", viewed: true },
];

export default function Status() {
  return (
    <div className="space-y-4">
      {/* My Status */}
      <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl cursor-pointer hover:from-purple-100 hover:to-pink-100 transition-all duration-200">
        <div className="relative flex-shrink-0">
          <Image
            src={profilePic}
            alt="My Status"
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          <button className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-md">
            <Add01Icon size={12} className="text-white" />
          </button>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-gray-900">My Status</h4>
          <p className="text-xs text-gray-500">Tap to add status update</p>
        </div>
      </div>

      {/* Recent Updates */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Recent Updates</h2>
        <span className="text-xs text-gray-500">{statuses.filter(s => !s.viewed).length} new</span>
      </div>

      <div className="space-y-2">
        {statuses.map((status, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-white hover:bg-gray-50 rounded-xl cursor-pointer transition-all duration-200 border border-transparent hover:border-gray-100 hover:shadow-sm"
          >
            <div className={`relative p-0.5 rounded-full ${status.viewed ? "bg-gray-300" : "bg-gradient-to-br from-purple-500 to-pink-500"}`}>
              <Image
                src={profilePic}
                alt={status.user}
                className="w-11 h-11 rounded-full object-cover border-2 border-white"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-900 truncate">
                {status.user}
              </h4>
              <p className="text-xs text-gray-500">{status.time}</p>
            </div>

            {!status.viewed && (
              <span className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import { UserGroupIcon, Globe02Icon, LockIcon } from "hugeicons-react";

const groups = [
  { name: "Tech Enthusiasts", members: 128, isPublic: true, unread: 5 },
  { name: "Close Friends", members: 12, isPublic: false, unread: 0 },
  { name: "Work Team", members: 24, isPublic: false, unread: 3 },
  { name: "Gaming Squad", members: 8, isPublic: false, unread: 12 },
  { name: "Book Club", members: 45, isPublic: true, unread: 0 },
];

export default function Groups() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">My Groups</h2>
        <span className="text-xs text-gray-500">{groups.length} groups</span>
      </div>

      <div className="space-y-2">
        {groups.map((group, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-white hover:bg-gray-50 rounded-xl cursor-pointer transition-all duration-200 border border-transparent hover:border-gray-100 hover:shadow-sm"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <UserGroupIcon size={20} className="text-white" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h4 className="text-sm font-semibold text-gray-900 truncate">
                  {group.name}
                </h4>
                {group.isPublic ? (
                  <Globe02Icon size={12} className="text-gray-400" />
                ) : (
                  <LockIcon size={12} className="text-gray-400" />
                )}
              </div>
              <p className="text-xs text-gray-500">{group.members} members</p>
            </div>

            {group.unread > 0 && (
              <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-semibold text-white bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
                {group.unread}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

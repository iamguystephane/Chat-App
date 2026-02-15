import Image from "next/image";
import profilePic from "../../assets/images/AI-creation.jpg";
import {
  CallOutgoing01Icon,
  CallIncoming01Icon,
  CallMissed01Icon,
} from "hugeicons-react";

const callHistory = [
  {
    name: "Sarah Wilson",
    time: "10:30 AM",
    type: "outgoing",
    duration: "5 min",
  },
  {
    name: "Alex Chen",
    time: "Yesterday",
    type: "incoming",
    duration: "12 min",
  },
  { name: "Emma Davis", time: "Yesterday", type: "missed", duration: "" },
  {
    name: "John Smith",
    time: "2 days ago",
    type: "outgoing",
    duration: "3 min",
  },
  {
    name: "Lisa Brown",
    time: "3 days ago",
    type: "incoming",
    duration: "8 min",
  },
];

const getCallIcon = (type: string) => {
  switch (type) {
    case "outgoing":
      return <CallOutgoing01Icon size={14} className="text-green-500" />;
    case "incoming":
      return <CallIncoming01Icon size={14} className="text-blue-500" />;
    case "missed":
      return <CallMissed01Icon size={14} className="text-red-500" />;
    default:
      return null;
  }
};

export default function Phone() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Call History</h2>
        <span className="text-xs text-gray-500">
          {callHistory.length} calls
        </span>
      </div>

      <div className="space-y-2">
        {callHistory.map((call, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-white hover:bg-gray-50 rounded-xl cursor-pointer transition-all duration-200 border border-transparent hover:border-gray-100 hover:shadow-sm"
          >
            <div className="relative flex-shrink-0">
              <Image
                src={profilePic}
                alt={call.name}
                className="w-11 h-11 rounded-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h4 className="text-sm font-semibold text-gray-900 truncate">
                  {call.name}
                </h4>
                {getCallIcon(call.type)}
              </div>
              <p className="text-xs text-gray-500">
                {call.duration ? `${call.duration} • ` : ""}
                {call.time}
              </p>
            </div>

            <button className="p-2 rounded-full bg-green-50 hover:bg-green-100 transition-colors duration-200">
              <CallOutgoing01Icon size={16} className="text-green-600" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

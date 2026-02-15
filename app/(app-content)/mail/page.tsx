import Image from "next/image";
import profilePic from "../../assets/images/AI-creation.jpg";
import { Mail01Icon, MailOpen01Icon } from "hugeicons-react";

const emails = [
  { sender: "Sarah Wilson", subject: "Project Update", preview: "Hey, I wanted to share the latest...", time: "10:30 AM", unread: true },
  { sender: "Alex Chen", subject: "Meeting Tomorrow", preview: "Don't forget about our meeting...", time: "Yesterday", unread: true },
  { sender: "Emma Davis", subject: "Re: Design Review", preview: "Thanks for the feedback on...", time: "Yesterday", unread: false },
  { sender: "John Smith", subject: "Quick Question", preview: "I was wondering if you could...", time: "2 days ago", unread: false },
  { sender: "Lisa Brown", subject: "Invitation", preview: "You're invited to join our...", time: "3 days ago", unread: false },
];

export default function Mail() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Inbox</h2>
        <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full">
          {emails.filter(e => e.unread).length} new
        </span>
      </div>

      <div className="space-y-2">
        {emails.map((email, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 border border-transparent hover:border-gray-100 hover:shadow-sm ${
              email.unread ? "bg-purple-50/50 hover:bg-purple-50" : "bg-white hover:bg-gray-50"
            }`}
          >
            <div className="relative flex-shrink-0">
              <Image
                src={profilePic}
                alt={email.sender}
                className="w-10 h-10 rounded-full object-cover"
              />
              {email.unread && (
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-purple-500 border-2 border-white rounded-full" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <h4 className={`text-sm truncate ${email.unread ? "font-bold text-gray-900" : "font-medium text-gray-700"}`}>
                  {email.sender}
                </h4>
                <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{email.time}</span>
              </div>
              <p className={`text-sm truncate ${email.unread ? "font-semibold text-gray-800" : "text-gray-600"}`}>
                {email.subject}
              </p>
              <p className="text-xs text-gray-500 truncate mt-0.5">{email.preview}</p>
            </div>

            <div className="flex-shrink-0 mt-1">
              {email.unread ? (
                <Mail01Icon size={16} className="text-purple-500" />
              ) : (
                <MailOpen01Icon size={16} className="text-gray-400" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

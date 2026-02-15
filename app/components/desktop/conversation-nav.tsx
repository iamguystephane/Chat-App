import Image from "next/image";
import profilePicture from "../../assets/images/AI-creation.jpg";
import {
  Call02Icon,
  Video01Icon,
  MoreHorizontalCircle01Icon,
} from "hugeicons-react";

const ConversationNav = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Image
            src={profilePicture}
            alt="profile picture"
            className="w-12 h-12 rounded-full ring-2 ring-white/30 object-cover"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />
        </div>
        <div>
          <h3 className="text-white font-semibold">Guy Stephane :)</h3>
          <p className="text-white/80 text-sm">Online</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button className="p-2.5 rounded-xl hover:bg-white/10 transition-colors duration-200">
          <Call02Icon size={20} className="text-white" />
        </button>
        <button className="p-2.5 rounded-xl hover:bg-white/10 transition-colors duration-200">
          <Video01Icon size={20} className="text-white" />
        </button>
        <button className="p-2.5 rounded-xl hover:bg-white/10 transition-colors duration-200">
          <MoreHorizontalCircle01Icon size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ConversationNav;

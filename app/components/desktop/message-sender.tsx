import {
  Mic02Icon,
  SmileIcon,
  Navigation03Icon,
  FolderUploadIcon,
} from "hugeicons-react";

export default function MessageSender() {
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-2xl border border-gray-100">
      <button className="p-2.5 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200">
        <FolderUploadIcon size={20} />
      </button>

      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 px-3 py-2.5 bg-transparent text-gray-800 placeholder:text-gray-400 focus:outline-none text-sm"
      />

      <div className="flex items-center gap-1">
        <button className="p-2.5 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200">
          <SmileIcon size={20} />
        </button>
        <button className="p-2.5 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200">
          <Mic02Icon size={20} />
        </button>
        <button className="p-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200">
          <Navigation03Icon size={20} />
        </button>
      </div>
    </div>
  );
}

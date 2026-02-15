import { Search01Icon } from "hugeicons-react";

export default function SearchBar() {
  return (
    <div className="relative mt-4">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search01Icon size={18} className="text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search conversations..."
        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-300 focus:bg-white transition-all duration-200"
      />
    </div>
  );
}

import { Message01Icon } from "hugeicons-react";

export default function Nav() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
          <Message01Icon size={20} className="text-white" />
        </div>
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          CHATTY
        </h1>
      </div>
      <p className="text-sm text-gray-500 font-medium hidden sm:block">
        Create memorable talks
      </p>
    </header>
  );
}

import ConversationNav from "./conversation-nav";
import MessageSender from "./message-sender";

export default function ChatArea() {
  return (
    <div className="flex flex-col h-full w-full">
      <header className="flex-shrink-0">
        <ConversationNav />
      </header>

      <main className="flex-1 overflow-y-auto px-6 py-4">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4">
            <span className="text-3xl">💬</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Start a conversation
          </h3>
          <p className="text-sm text-gray-500 max-w-xs">
            Select a chat from the sidebar or start a new conversation to begin
            messaging
          </p>
        </div>
      </main>

      <footer className="flex-shrink-0 p-4 border-t border-gray-100">
        <MessageSender />
      </footer>
    </div>
  );
}

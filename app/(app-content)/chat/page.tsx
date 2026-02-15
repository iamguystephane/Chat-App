import ChatFilter from "../../components/desktop/chat-filter";
import SearchBar from "../../components/desktop/search";
import MessageCard from "../../components/desktop/message-card";

export default function Chat() {
  return (
    <div className="space-y-4">
      <ChatFilter />
      <SearchBar />
      <MessageCard />
    </div>
  );
}

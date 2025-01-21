import { Stack } from "@mui/material";
import ChatFilter from "../../components/chat-filter";
import SearchBar from "../../components/search";
import MessageCard from "../../components/message-card";

export default function Chat() {
  return (
    <Stack>
      <ChatFilter />
      <SearchBar />
      <MessageCard />
    </Stack>
  );
}

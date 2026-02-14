export const metadata = {
  title: "Chat",
  description: "This is where you message another person",
};

import { Stack } from "@mui/material";
import ChatFilter from "../../components/desktop/chat-filter";
import SearchBar from "../../components/desktop/search";
import MessageCard from "../../components/desktop/message-card";

export default function Chat() {
  return (
    <Stack>
      <ChatFilter />
      <SearchBar />
      <MessageCard />
      
    </Stack>
  );
}

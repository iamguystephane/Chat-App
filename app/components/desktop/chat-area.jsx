import { Stack } from "@mui/material";
import ConversationNav from "./conversation-nav";
import MessageSender from "./message-sender";

export default function ChatArea() {
  return (
    <>
      <Stack
        className="w-full h-full justify-between overflow-auto relative "
        direction="column"
      >
        <header className="sticky top-0 w-full sm:mt-0 lg:mt-3">
          <ConversationNav />
        </header>
        <main className="w-full h-auto pb-14 pt-5 overflow-auto px-6">
          This is the message section
        </main>
        <footer className="sticky w-full md:bottom-10 lg:bottom-14 p-2 z-50">
          <MessageSender />
        </footer>
      </Stack>
    </>
  );
}

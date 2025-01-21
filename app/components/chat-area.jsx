import { Stack } from "@mui/material";
import ConversationNav from "./conversation-nav";
import MessageSender from "./message-sender";

export default function ChatArea() {
  return (
    <>
      <Stack className='w-full h-full justify-between' direction='column'>
        <header className='top-0 sticky'>
          <ConversationNav />
        </header>
        <main className='w-full h-full overflow-auto '>
          This is the message section
        </main>
        <footer className='sticky bottom-0 shadow bg-white p-2'>
          <MessageSender />
        </footer>
      </Stack>
    </>
  );
}

import { Stack } from "@mui/material";
import Nav from "../components/nav";
import ChatNav from "../components/chatNav";
import "../styles/chat.css";
import ChatArea from "../components/chat-area";
import Notifications from "../components/notifications";

export const metadata = {
  title: "Home",
  description: "Home section of the chat application",
};

export default function AppLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Stack className="main-container">
          <Nav />
          <Stack direction="row" className="w-full h-full">
            <Stack className="left-section overflow-auto sm:hidden">
              <ChatNav />
              <Stack className="p-4">{children}</Stack>
            </Stack>
            <Stack
              className="middle-section justify-between"
              direction="column"
            >
              <ChatArea />
            </Stack>
            <Stack className="right-section w-full h-full" direction="column">
              <Stack className="notifications h-1/2 w-full">
                <Notifications />
              </Stack>
              <Stack className="suggestions h-1/2 w-full">suggestions</Stack>
            </Stack>
          </Stack>
        </Stack>
      </body>
    </html>
  );
}

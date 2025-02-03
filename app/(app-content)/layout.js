"use client";

import { Stack } from "@mui/material";
import Nav from "../components/desktop/nav";
import ChatNav from "../components/desktop/chatNav";
import "../styles/chat.css";
import ChatArea from "../components/desktop/chat-area";
import Notifications from "../components/desktop/notifications";
import { useState, useEffect } from "react";
import Loading from "../components/desktop/loading";
import { Poppins } from "next/font/google";
import Suggestions from "../components/desktop/suggestions";
import "./global.css";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "600", "700"],
});

export default function AppLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  if (!isLoading)
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <Loading />
      </div>
    );

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Stack className="main-container w-full">
          <Nav />
          <main
            direction="row"
            className="w-full h-full sm:hidden xsm:hidden lg:flex desktop"
          >
            <Stack className="left-section overflow-auto">
              <ChatNav />
              <Stack className="px-1 py-3 w-full">{children}</Stack>
            </Stack>
            <Stack
              className="middle-section justify-between shadow"
              direction="column"
            >
              <ChatArea />
            </Stack>
            <Stack
              className="right-section w-full h-full shadow px-2"
              direction="column"
            >
              <Stack className="notifications h-1/2 w-full overflow-auto">
                <Notifications />
              </Stack>
              <Stack className="suggestions h-1/2 w-full mt-4 overflow-auto">
                <Suggestions />
              </Stack>
            </Stack>
          </main>
          <div className="mobile sm:flex-col lg:hidden w-full h-full xsm:overflow-auto sm:overflow-hidden">
            <section className="h-full flex justify-between gap-6 p-6 chat-section-tablet">
              <div className='sm:w-full xsm:w-full md:w-1/2 h-screen sm:overflow-auto'>{children}</div>
              <div className="justify-between w-2/3 h-full sm:hidden xsm:hidden md:flex" >
                <ChatArea />
              </div>
            </section>
            <footer className="w-full bottom-0 absolute z-50 bg-white">
              <ChatNav />
            </footer>
          </div>
        </Stack>
      </body>
    </html>
  );
}

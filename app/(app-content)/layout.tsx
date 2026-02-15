"use client";

import Nav from "../components/desktop/nav";
import ChatNav from "../components/desktop/chatNav";
import ChatArea from "../components/desktop/chat-area";
import Notifications from "../components/desktop/notifications";
import { useState, useEffect, ReactNode } from "react";
import { Poppins } from "next/font/google";
import Suggestions from "../components/desktop/suggestions";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "600", "700"],
});

export default function AppLayout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 min-h-screen`}
      >
        <div className="flex flex-col h-screen">
          <Nav />

          {/* Desktop Layout */}
          <main className="flex-1 hidden lg:flex gap-4 p-4 overflow-hidden">
            {/* Left Sidebar - Chat List */}
            <aside className="w-[320px] flex-shrink-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
              <div className="p-4">
                <ChatNav />
              </div>
              <div className="flex-1 overflow-y-auto px-4 pb-4">{children}</div>
            </aside>

            {/* Middle Section - Chat Area */}
            <section className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
              <ChatArea />
            </section>

            {/* Right Sidebar - Notifications & Suggestions */}
            <aside className="w-[300px] flex-shrink-0 flex flex-col gap-4">
              <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-y-auto p-4">
                <Notifications />
              </div>
              <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-y-auto p-4">
                <Suggestions />
              </div>
            </aside>
          </main>

          {/* Mobile/Tablet Layout */}
          <div className="flex-1 lg:hidden flex flex-col overflow-hidden">
            <main className="flex-1 flex gap-4 p-4 overflow-hidden">
              <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-y-auto p-4 md:w-1/2">
                {children}
              </div>
              <div className="hidden md:flex flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <ChatArea />
              </div>
            </main>
            <footer className="bg-white/90 backdrop-blur-md border-t border-gray-200 px-4 py-2 safe-area-pb">
              <ChatNav />
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

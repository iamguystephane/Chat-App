"use client";

import Nav from "../components/desktop/nav";
import ChatNav from "../components/desktop/chatNav";
import ChatArea from "../components/desktop/chat-area";
import Notifications from "../components/desktop/notifications";
import { useState, useEffect, ReactNode } from "react";
import { Poppins } from "next/font/google";
import Suggestions from "../components/desktop/suggestions";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Notification01Icon,
  UserAdd01Icon,
} from "hugeicons-react";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "600", "700"],
});

export default function AppLayout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(true);

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

          {/* Desktop Layout (lg and above) */}
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

            {/* Right Sidebar - Notifications & Suggestions (Collapsible) */}
            <aside
              className={`flex-shrink-0 flex gap-2 transition-all duration-300 ${isPanelOpen ? "w-[300px]" : "w-10"}`}
            >
              {/* Toggle Button */}
              <button
                onClick={() => setIsPanelOpen(!isPanelOpen)}
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 hover:bg-purple-50 hover:border-purple-200 transition-colors duration-200 self-start"
                title={isPanelOpen ? "Collapse panel" : "Expand panel"}
              >
                {isPanelOpen ?
                  <ArrowRight01Icon size={18} className="text-purple-500" />
                : <div className="flex flex-col gap-1">
                    <Notification01Icon size={14} className="text-purple-500" />
                    <UserAdd01Icon size={14} className="text-pink-500" />
                  </div>
                }
              </button>

              {/* Panel Content */}
              <div
                className={`flex-1 flex flex-col gap-4 overflow-hidden transition-all duration-300 ${isPanelOpen ? "opacity-100" : "opacity-0 w-0"}`}
              >
                <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-y-auto p-4">
                  <Notifications />
                </div>
                <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-y-auto p-4">
                  <Suggestions />
                </div>
              </div>
            </aside>
          </main>

          {/* Tablet Layout (md to lg) */}
          <div className="flex-1 hidden md:flex lg:hidden flex-col overflow-hidden">
            <main className="flex-1 flex gap-4 p-4 overflow-hidden">
              <div className="w-[280px] flex-shrink-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-y-auto p-4">
                {children}
              </div>
              <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <ChatArea />
              </div>

              {/* Collapsible Right Panel for Tablet */}
              <aside
                className={`flex-shrink-0 flex gap-2 transition-all duration-300 ${isPanelOpen ? "w-[260px]" : "w-10"}`}
              >
                {/* Toggle Button */}
                <button
                  onClick={() => setIsPanelOpen(!isPanelOpen)}
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 hover:bg-purple-50 hover:border-purple-200 transition-colors duration-200 self-start"
                  title={isPanelOpen ? "Collapse panel" : "Expand panel"}
                >
                  {isPanelOpen ?
                    <ArrowRight01Icon size={18} className="text-purple-500" />
                  : <div className="flex flex-col gap-1">
                      <Notification01Icon
                        size={14}
                        className="text-purple-500"
                      />
                      <UserAdd01Icon size={14} className="text-pink-500" />
                    </div>
                  }
                </button>

                {/* Panel Content */}
                <div
                  className={`flex-1 flex flex-col gap-4 overflow-hidden transition-all duration-300 ${isPanelOpen ? "opacity-100" : "opacity-0 w-0"}`}
                >
                  <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-y-auto p-4">
                    <Notifications />
                  </div>
                  <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-y-auto p-4">
                    <Suggestions />
                  </div>
                </div>
              </aside>
            </main>
          </div>

          {/* Mobile Layout (below md) */}
          <div className="flex-1 md:hidden flex flex-col overflow-hidden">
            <main className="flex-1 p-4 overflow-hidden">
              <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 overflow-y-auto p-4">
                {children}
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

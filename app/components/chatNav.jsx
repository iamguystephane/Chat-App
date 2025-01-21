"use client";

import { IconButton, Stack } from "@mui/material";
import {
  ChatBubble,
  Phone,
  Groups,
  Mail,
  AccountCircle,
} from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function ChatNav() {
  const router = useRouter();
  const [tab, setTab] = useState("chat");
  const handleTab = (tab) => {
    setTab(tab);
    router.push(`/${tab}`);
  };
  const styles = {
    active: {
      color: "white",
      backgroundColor: "#8855eb",
    },
  };
  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        className="shadow w-full mt-3 flex items-center justify-between p-2 bg-white"
      >
        <IconButton
          onClick={() => handleTab("chat")}
          style={tab === "chat" ? styles.active : {}}
        >
          <ChatBubble />
        </IconButton>
        <IconButton
          onClick={() => handleTab("phone")}
          style={tab === "phone" ? styles.active : {}}
        >
          <Phone />
        </IconButton>
        <IconButton
          onClick={() => handleTab("mail")}
          style={tab === "mail" ? styles.active : {}}
        >
          <Mail />
        </IconButton>
        <IconButton
          onClick={() => handleTab("groups")}
          style={tab === "groups" ? styles.active : {}}
        >
          <Groups />
        </IconButton>
        <IconButton
          onClick={() => handleTab("account")}
          style={tab === "account" ? styles.active : {}}
        >
          <AccountCircle />
        </IconButton>
      </Stack>
    </>
  );
}

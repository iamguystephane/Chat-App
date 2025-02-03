"use client";

import { IconButton, Stack } from "@mui/material";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Chatting01Icon,
  UserGroupIcon,
  Call02Icon,
  Mail01Icon,
  UserCircleIcon,
  Notification01Icon,
} from "hugeicons-react";
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
        className="w-full mt-3 flex items-center justify-between p-2 shadow"
      >
        <IconButton
          onClick={() => handleTab("chat")}
          style={tab === "chat" ? styles.active : {}}
        >
          <Chatting01Icon />
        </IconButton>
        <IconButton
          onClick={() => handleTab("phone")}
          style={tab === "phone" ? styles.active : {}}
        >
          <Call02Icon />
        </IconButton>
        <IconButton
          onClick={() => handleTab("mail")}
          style={tab === "mail" ? styles.active : {}}
        >
          <Mail01Icon />
        </IconButton>
        <IconButton
          sx={{
            "@media (min-width: 1024px)": {
              display: "none",
            },
          }}
          onClick={() => handleTab("notifications")}
          style={tab === "notifications" ? styles.active : {}}
        >
          <Notification01Icon />
        </IconButton>
        <IconButton
          onClick={() => handleTab("groups")}
          style={tab === "groups" ? styles.active : {}}
        >
          <UserGroupIcon />
        </IconButton>
        <IconButton
          onClick={() => handleTab("account")}
          style={tab === "account" ? styles.active : {}}
        >
          <UserCircleIcon />
        </IconButton>
      </Stack>
    </>
  );
}

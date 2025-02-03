import { Stack, IconButton } from "@mui/material";
import Image from "next/image";
import profilePicture from "../../assets/images/AI-creation.jpg";
import {
  Call02Icon,
  Video01Icon,
  MoreHorizontalCircle01Icon,
} from "hugeicons-react";

const ConversationNav = () => {
  return (
    <>
      <Stack
        direction="row"
        className="w-full h-14 bg-gradient-to-r from-blue-500 to-pink-500 shadow items-center justify-between px-5 cursor-pointer"
      >
        <Stack direction="row" className="gap-3">
          <Image
            src={profilePicture}
            alt="profile picture"
            className="rounded-full w-11 h-11"
          />
          <Stack>
            <p className="text-sm text-white"> Guy Stephane :) </p>
            <p className="text-sm text-white"> Last seen 3 hours ago </p>
          </Stack>
        </Stack>
        <Stack direction="row">
          <IconButton>
            <Call02Icon color="white" />
          </IconButton>
          <IconButton>
            <Video01Icon color="white" />
          </IconButton>
          <IconButton>
            <MoreHorizontalCircle01Icon color="white" />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
};

export default ConversationNav;

import { Stack, IconButton } from "@mui/material";
import Image from "next/image";
import profilePicture from "../assets/images/AI-creation.jpg";
import { Phone, Videocam, MoreHoriz } from "@mui/icons-material";

const ConversationNav = () => {
  return (
    <>
      <Stack
        direction="row"
        className="w-full mt-3 h-14 bg-white shadow items-center justify-between px-5 cursor-pointer"
      >
        <Stack direction="row" className="gap-3">
          <Image
            src={profilePicture}
            alt="profile picture"
            className="rounded-full w-11 h-11"
          />
          <Stack>
            <p className="text-sm font-bold"> Guy Stephane :) </p>
            <p className="text-sm text-gray-500"> Last seen 3 hours ago </p>
          </Stack>
        </Stack>
        <Stack direction="row">
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <Videocam />
          </IconButton>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
};

export default ConversationNav;

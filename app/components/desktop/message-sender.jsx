import { Stack, IconButton } from "@mui/material";
import { Mic02Icon, SmileIcon, Navigation03Icon, FolderUploadIcon } from 'hugeicons-react'

export default function MessageSender() {
  return (
    <>
      <Stack
        direction="row"
        className="items-center justify-center bg-blue-50 rounded-3xl"
      >
        <IconButton>
          <FolderUploadIcon />
        </IconButton>
        <input
          type="text"
          placeholder="Type your message here"
          className="bg-transparent focus:outline-none text-gray-800 w-3/4"
        />
        <Stack direction="row">
          <IconButton>
            <SmileIcon />
          </IconButton>
          <IconButton>
            <Mic02Icon />
          </IconButton>
          <IconButton color="secondary">
            <Navigation03Icon />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}

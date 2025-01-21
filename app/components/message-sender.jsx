import { Stack, IconButton } from "@mui/material";
import {
  UploadFile,
  Mic,
  Telegram,
  EmojiEmotionsOutlined,
} from "@mui/icons-material";

export default function MessageSender() {
  return (
    <>
      <Stack
        direction="row"
        className="items-center justify-center bg-blue-50 rounded-3xl"
      >
        <IconButton>
          <UploadFile />
        </IconButton>
        <input
          type="text"
          placeholder="Type your message here"
          className="bg-transparent focus:outline-none text-gray-800 w-3/4"
        />
        <Stack direction="row">
          <IconButton>
            <EmojiEmotionsOutlined />
          </IconButton>
          <IconButton>
            <Mic />
          </IconButton>
          <IconButton color="secondary">
            <Telegram />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}

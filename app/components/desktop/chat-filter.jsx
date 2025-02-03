import { Stack, Typography, IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";

const ChatFilter = () => {
  return (
    <>
      
        <Stack
          direction="row"
          className="w-full flex items-center justify-between"
        >
          <h2 className="text-2xl font-bold"> Chats </h2>
          <IconButton
            className="w-fit"
            style={{
              background: "linear-gradient(#b849eb, #794af6)",
              color: "white",
            }}
          >
            <Add />
          </IconButton>
        </Stack>
        <Stack direction="row" className="mt-3 items-center gap-3">
          <button type="button" className="text-sm">
            DIRECT{" "}
          </button>
          <button type="button" className="text-sm">
            GROUPS{" "}
          </button>
          <button type="button" className="text-sm">
            PUBLIC{" "}
          </button>
        </Stack>
      
    </>
  );
};

export default ChatFilter;

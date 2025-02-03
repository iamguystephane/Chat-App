import { Stack, IconButton } from "@mui/material";
import { Search } from '@mui/icons-material'
import { Search01Icon } from 'hugeicons-react'

export default function SearchBar() {
  return (
    <Stack
      className="flex gap-1 w-full bg-white mt-4 px-2 shadow-lg rounded-3xl"
      direction="row"
    >
      <IconButton>
        <Search01Icon />
      </IconButton>
      <input
        type="text"
        placeholder="search"
        className="w-full bg-transparent focus:outline-none"
      />
    </Stack>
  );
}

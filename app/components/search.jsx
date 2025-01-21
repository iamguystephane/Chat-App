import { Stack, IconButton } from "@mui/material";
import { Search } from '@mui/icons-material'

export default function SearchBar() {
  return (
    <Stack className='flex gap-1 w-full bg-white mt-4 px-2 shadow-lg rounded-3xl' direction='row'>
        <IconButton>
            <Search />
        </IconButton>
      <input type="text" placeholder="search" className='w-full bg-transparent focus:outline-none' />
    </Stack>
  );
}

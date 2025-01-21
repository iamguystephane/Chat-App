import { Stack } from "@mui/material";
import profileImg from "../assets/images/AI-creation.jpg";
import Image from 'next/image'

const MessageCard = () => {
  return (
    <>
      <Stack>
        <Stack
          direction="row"
          className="flex w-full h-15 px-2 py-3 items-center justify-between bg-white rounded-lg shadow mt-3 cursor-pointer"
        >
          <Stack direction="row" className="gap-2">
            <Image
              src={profileImg}
              alt="Profile"
              className="rounded-full w-9 h-9"
            />
            <Stack direction="column" className="flex-col justify-center">
              <span style={styles.text} className="font-bold">
                Guy Stephane :)
              </span>
              <span style={styles.text}>Please don't forget to send...</span>
            </Stack>
          </Stack>
          <Stack className='flex-col items-center justify-center'>
            <span style={{ fontSize: 12, color: "#b849eb", fontWeight: 'bold' }}>8: 30</span>
            <span style={styles.counter} className="rounded-full text-center text-white">
              3
            </span>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default MessageCard;

const styles = {
  text: {
    fontSize: 12,
  },
  counter: {
    fontSize: 12,
    background: "linear-gradient(#b849eb, #794af6)",
    width: 18,
    height: 18,
  },
};

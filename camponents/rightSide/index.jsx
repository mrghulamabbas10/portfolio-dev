import React from "react";
// import next components 
import Link from "next/link";
import Image from "next/image";

// import material ui comppnets
import { Stack, Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { ManuBar } from "../config";

const index = () => {
  return (
    <Stack sx={{ display: { xs: "none", md: "flex" }, zIndex: 2 }}>
      {ManuBar?.map((data) => (
        <Box key={data?.id}>
          <Tooltip title={data?.name} placement="top" arrow bg-black>
            <Link href={`${data?.link}`}>
              <Box className="bg-[#FFB400] hover:bg-[#c7941e] rounded-full w-10 h-10 flex items-center justify-center my-5 ">
                <Image src={data?.Image} alt="Profil" width={18} height={18} />
              </Box>
            </Link>
          </Tooltip>
        </Box>
      ))}
    </Stack>
  );
};

export default index;

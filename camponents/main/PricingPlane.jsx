import React from "react";
// import next components 
import Image from "next/image";
// import material ui
import { Stack, Typography, Box, Grid, Button } from "@mui/material";
import { PricingData } from "./config";

// import useRouter
import { useRouter } from "next/router";

const PricingPlane = () => {
    const router = useRouter();
  return (
    <Stack>
      <Stack className="mx-auto text-center " spacing={2}>
        <Typography variant="h2" fontSize={36} fontWeight={600}>
          Price Plans
        </Typography>
        <Typography
          variant="body1"
          className="md:w-[600px] w-[300px] text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </Typography>
      </Stack>
      <Box className="md:mt-10 mt-5" id="Pricing">
        <Grid container spacing={{ md: 2, xs: 4 }}>
          {PricingData?.map((data) => (
            <Grid item xs={12} md={4} key={data?.id}>
              <Stack
                className="justify-center items-center px-8 bg-white pt-7 pb-7 relative h-full  shadow-sm border-[1px] h-full"
                spacing={3}>
                <Typography
                  variant="body1"
                  className="absolute top-0 bg-[#FFB400] w-full text-center ">
                  {data?.populer}
                </Typography>
                <Typography variant="h3" fontSize={30} fontWeight={600}>
                  {data?.name}
                </Typography>
                <Stack spacing={1} className="text-center">
                  <Typography variant="h2" fontSize={34} fontWeight={600}>
                    {data?.price}
                    <Box component="span" className="uppercase">
                      /hour
                    </Box>
                  </Typography>
                  <Typography variant="body1" fontSize={12} className="text-center pb-5">
                    {data?.description}
                  </Typography>
                  {data?.children?.map((val, index) => (
                    <Stack direction="row" spacing={3} key={index}>
                      {val?.check ? (
                        <Image
                          src="/main-imgaes/icons/Check.svg"
                          alt="coding"
                          width={24}
                          height={24}
                        />
                      ) : (
                        <Image
                          src="/main-imgaes/icons/Close.svg"
                          alt="coding"
                          width={24}
                          height={24}
                        />
                      )}
                      <Typography variant="body1" fontSize={14} textTransform="capitalize">{val?.name}</Typography>
                    </Stack>
                  ))}
                  <Box>
                    <button
                      onClick={() => router.push("#")}
                      className="bg-[#FFB400] hover:bg-[#cc920b] rounded-full px-8 py-2 font-semibold mt-5 text-black">
                      {data?.button}
                    </button>
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default PricingPlane;

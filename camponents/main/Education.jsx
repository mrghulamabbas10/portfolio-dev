import React from "react";

// import material ui
import { Stack, Typography, Box, Grid, Divider } from "@mui/material";

// import config
import { EducationData } from "./config";

const Education = () => {
  return (
    <>
      {/* Education main heading  */}
      <Stack
        className="mx-auto text-center  items-center"
        spacing={2}
        id="Education">
        <Typography variant="h2" className="font-semibold text-4xl">
          Education
        </Typography>
        <Typography
          variant="body1"
          className="md:w-[700px] w-[300px] text-center mx-auto">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </Typography>
      </Stack>
      {/* Education main heading  */}
      {/* if you change a your data please edit the config file  */}
      {/* EducationData  */}
      <Box className="bg-white p-8 flex flex-col justify-center items-center">
        <Grid container>
          <Grid item xs={12}>
            <Divider light />
            {EducationData.map((data) => (
              <>
                <Grid container>
                  <Grid item xs={12} md={4} className="bg-white">
                    <Stack spacing={2} className="p-4" key={data?.id}>
                      <Typography
                        variant="h4"
                        className="text-[18px] font-[500]">
                        {data.UniversityName}
                      </Typography>
                      <Typography variant="body1" className="">
                        {data.profaction}
                        <Box
                          component="span"
                          className="px-2 ml-2 text-white bg-[#FFB400]">
                          {data.date}
                        </Box>
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Stack spacing={2} className="p-4">
                      <Typography
                        variant="h4"
                        className="text-[18px] font-[500]">
                        {data.field}
                      </Typography>
                      <Typography variant="body1" className="">
                        {data.description}
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
                <Divider light />
              </>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Education;
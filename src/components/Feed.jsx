import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Sidebar, Videos } from "./";

export default function Feed() {
  return (
    <Stack direction={{ xs: "column", md: "row" }}>
      <Box borderRight="1px solid #333">
        <Sidebar />
        <Typography
          component="p"
          variant="caption"
          color="grey.600"
          align="center"
          display={{ xs: "none", md: "block" }}
        >
          Copyright 2022 - Jul
        </Typography>
      </Box>
      {/* Actual Feed */}
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" component="h1" color="text.secondary">
          New Videos
        </Typography>
        <Videos />
      </Box>
    </Stack>
  );
}

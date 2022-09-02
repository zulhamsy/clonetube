import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";

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
      <Box></Box>
    </Stack>
  );
}

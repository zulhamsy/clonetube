import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";

export default function Feed() {
  return (
    <Stack direction={{ xs: "column", md: "row" }}>
      <Box
        px={{ xs: 0, md: 2 }}
        height={{ xs: "auto", md: "97vh" }}
        borderRight="1px solid #333"
      >
        <Sidebar />
        <Typography component="p" variant="caption" color="grey.600">
          Copyright 2022 - Jul
        </Typography>
      </Box>
    </Stack>
  );
}

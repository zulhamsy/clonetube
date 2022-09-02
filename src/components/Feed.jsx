import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchCategoryVideos } from "../services/fetchYoutube";

export default function Feed() {
  const [selectedMenu, setSelectedMenu] = useState("New");

  useEffect(() => {
    fetchCategoryVideos(`q=${selectedMenu}`).then((data) => console.log(data));
  }, [selectedMenu]);

  return (
    <Stack direction={{ xs: "column", md: "row" }}>
      <Box borderRight="1px solid #333">
        <Sidebar selectedMenu={selectedMenu} onChangeMenu={setSelectedMenu} />
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

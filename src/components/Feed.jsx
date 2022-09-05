import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchCategoryVideos } from "../services/fetchYoutube";
import videos from "../services/mockYoutube.json";

export default function Feed() {
  const [selectedMenu, setSelectedMenu] = useState({
    name: "New",
    keyword: "Viral",
  });
  const [videoList, setVideoList] = useState(videos.items);

  // useEffect(() => {
  //   fetchCategoryVideos(`q=${selectedMenu.keyword}`).then((data) =>
  //     setVideoList(data.items),
  //   );
  // }, [selectedMenu]);

  return (
    <Stack direction={{ xs: "column", md: "row" }}>
      <Box
        borderRight="1px solid #333"
        position={{ xs: "block", md: "fixed" }}
        height="100%"
        zIndex={1}
      >
        <Sidebar selectedMenu={selectedMenu} onChangeMenu={setSelectedMenu} />
        <Typography
          component="p"
          variant="caption"
          color="grey.600"
          align="center"
          display={{ xs: "none", md: "block" }}
          pt={1}
        >
          Copyright 2022 - Jul
        </Typography>
      </Box>
      {/* Actual Feed */}
      <Box sx={{ p: 2, ml: { xs: 0, md: 25 } }}>
        <Typography variant="h5" component="h1" color="text.secondary" mb={2}>
          {selectedMenu.name} Videos
        </Typography>
        <Videos videos={videoList} />
      </Box>
    </Stack>
  );
}

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#181818" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:keyword" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

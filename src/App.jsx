import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  PlaylistDetail,
} from "./components";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ bgcolor: "background.default" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/playlist/:id" element={<PlaylistDetail />} />
            <Route path="/search/:keyword" element={<SearchFeed />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

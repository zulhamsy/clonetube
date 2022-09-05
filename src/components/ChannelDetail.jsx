import React from "react";
import { useParams } from "react-router-dom";
import { Box, Divider, Avatar } from "@mui/material";

import channel from "../services/mockChannel.json";

export default function ChannelDetail() {
  const { id } = useParams();
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "url(" + channel.brandingSettings.image.bannerExternalUrl + ")",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        minHeight="150px"
      ></Box>
      <Divider sx={{ position: "relative", top: "-75px" }}>
        <Avatar
          src={channel.snippet.thumbnails.high.url}
          alt={channel.snippet.title}
          sx={{
            width: 150,
            height: 150,
            border: "thin solid #333",
          }}
        />
      </Divider>
      <Box>Bottom</Box>
    </>
  );
}

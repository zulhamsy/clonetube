import React from "react";
import { Grid } from "@mui/material";
import { Video, Channel } from "./";

export default function Videos({ videos }) {
  return (
    <Grid container columnSpacing={2} rowSpacing={4} minHeight="97vh">
      {videos.map((video) => {
        if (video.id.videoId || video.id.playlistId) {
          return (
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              key={video.id.videoId || video.id.playlistId}
            >
              <Video video={video} />
            </Grid>
          );
        } else {
          return (
            <Grid item xs={12} sm={4} md={3} key={video.id.channelId}>
              <Channel channel={video} />
            </Grid>
          );
        }
      })}
    </Grid>
  );
}

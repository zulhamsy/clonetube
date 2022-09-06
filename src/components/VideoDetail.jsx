import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const { id } = useParams();
  return (
    <Grid container spacing={3} px={8} py={2}>
      {/* Video Detail */}
      <Grid item xs={12} md={8}>
        <Box
          borderRadius={1}
          overflow="clip"
          width="100%"
          sx={{
            aspectRatio: "7/4",
          }}
        >
          <iframe
            // width="560"
            // height="315"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Grid>
      {/* Related Video Thumbnail */}
      <Grid item xs={12} md={4}>
        <Typography color="white">Related Vids</Typography>
      </Grid>
    </Grid>
  );
}

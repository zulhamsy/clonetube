import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchRelatedVideos } from "../services/fetchYoutube";
import { Video, RelatedVideo } from "./";

export default function VideoDetail() {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchRelatedVideos(id).then((result) => setVideos(result));
    console.log("useEffect run");
  }, [id]);

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
        <Typography color="grey.500" variant="body2">
          Related Video
        </Typography>
        <Grid container spacing={1}>
          {videos.map((video) => {
            if (video.snippet) {
              return (
                <Grid item xs={12} key={video.id.videoId}>
                  {/* <Video video={video} /> */}
                  <RelatedVideo video={video} />
                </Grid>
              );
            }
            return null;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

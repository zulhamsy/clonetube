import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function Video({ video }) {
  return (
    <Card elevation={0}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={video.snippet.thumbnails.medium.url}
        />
        <CardContent>
          {/* Video Title */}
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {video.snippet.title}
          </Typography>
          {/* Channel Title */}
          <Typography variant="caption" color="grey.500">
            {video.snippet.channelTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default function Videos({ videos }) {
  return (
    <Grid container columnSpacing={2} rowSpacing={4}>
      {videos.map((video) => {
        return (
          <Grid item xs={12} sm={4} md={3} key={video.id.videoId}>
            <Video video={video} />
          </Grid>
        );
      })}
    </Grid>
  );
}

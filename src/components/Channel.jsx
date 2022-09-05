import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export default function Channel({ channel: { snippet } }) {
  const { thumbnails, channelTitle } = snippet;

  return (
    <Card elevation={0}>
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          "&.MuiCardActionArea-root:hover .MuiCardActionArea-focusHighlight": {
            opacity: 0,
          },
        }}
        onClick={() => console.log("ActionArea clicked")}
      >
        <CardMedia
          component="img"
          image={thumbnails.medium.url}
          sx={{ borderRadius: "50%", width: "70%" }}
        />
        <CardContent>
          <Typography
            onClick={(e) => {
              e.stopPropagation();
              console.log("Channel clicked");
            }}
            variant="body2"
          >
            {channelTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

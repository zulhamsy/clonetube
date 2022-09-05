import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Channel({ channel: { snippet } }) {
  const navigate = useNavigate();
  const { thumbnails, channelTitle, channelId } = snippet;

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
        onClick={() => navigate("/channel/" + channelId)}
      >
        <CardMedia
          component="img"
          image={thumbnails.medium.url}
          sx={{ borderRadius: "50%", width: "60%" }}
        />
        <CardContent>
          <Typography variant="body2">{channelTitle}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

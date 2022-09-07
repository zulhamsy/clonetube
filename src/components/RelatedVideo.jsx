import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function RelatedVideo({ video: { id, snippet } }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, channelId } = snippet;
  function navigateTo() {
    if (id.videoId) {
      navigate("/video/" + id.videoId);
    }
    if (id.playlistId) {
      navigate("/playlist/" + id.playlistId);
    }
  }

  return (
    <Card elevation={0}>
      <CardActionArea
        sx={{
          "&.MuiCardActionArea-root:hover .MuiCardActionArea-focusHighlight": {
            opacity: 0,
          },
        }}
        onClick={navigateTo}
      >
        <Stack direction="row" alignItems="center">
          <div style={{ flex: 7 }}>
            <CardMedia component="img" image={thumbnails.medium.url} />
          </div>
          <CardContent sx={{ flex: 8 }}>
            {/* Video / Playlist Title */}
            <Typography
              variant="body2"
              gutterBottom
              fontWeight={600}
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {id.playlistId && "Playlist: "}
              {title}
            </Typography>
            {/* Channel Title */}
            <Typography
              sx={{
                "&.MuiTypography-root:hover": {
                  color: "white",
                },
              }}
              onClick={(e) => {
                e.stopPropagation();
                navigate("/channel/" + channelId);
              }}
              variant="caption"
              color="grey.500"
            >
              {channelTitle}
            </Typography>
          </CardContent>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
